const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    category: { type: String, required: true, 
    enum: ['Entertainment', 'Utilities', 'Personal', 'Work'] },
    startDate: { type: Date, required: true },
    billingCycle: { type: String, enum: ['Monthly', 'Yearly'], default: 'Monthly' }
}, { timestamps: true });

module.exports = mongoose.model('Subscription', SubscriptionSchema);