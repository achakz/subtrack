const Subscription = require('../models/Subscription');

const getSubscriptions = async (req, res) => {
    try {
        const subs = await Subscription.find({ user: req.user.id }).sort({ startDate: 1 });
        res.status(200).json(subs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addSubscription = async (req, res) => {
    try {
        const sub = await Subscription.create({
            ...req.body,
            user: req.user.id 
        });
        res.status(201).json(sub);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteSubscription = async (req, res) => {
    try {
        const sub = await Subscription.findById(req.params.id);
        if (!sub) return res.status(404).json({ message: 'Subscription not found' });
        
        // Ensure user owns the sub
        if (sub.user.toString() !== req.user.id) {
            return res.status(401).json({ message: 'User not authorized' });
        }

        await sub.deleteOne();
        res.status(200).json({ id: req.params.id });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getSubscriptions, addSubscription, deleteSubscription };