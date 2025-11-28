import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import api from '../api';
import Navbar from '../components/Navbar';
import SubscriptionCard from '../components/SubscriptionCard';
import StatsChart from '../components/StatsChart';
import AddSubscriptionModal from '../components/AddSubscriptionModal';

const Dashboard = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch Data
  const fetchSubscriptions = async () => {
    try {
      const response = await api.get('/subscriptions');
      setSubscriptions(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscriptions();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this subscription?')) {
      try {
        await api.delete(`/subscriptions/${id}`);
        setSubscriptions(subscriptions.filter((sub) => sub._id !== id));
      } catch (error) {
        alert('Error deleting subscription');
      }
    }
  };

  // Calculate Total Monthly Cost
  const totalCost = subscriptions.reduce((acc, sub) => acc + sub.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-10">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 mt-8">
        
        {/* Top Summary Section */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg flex-1">
            <p className="text-indigo-200 font-medium mb-1">Total Monthly Spend</p>
            <h2 className="text-4xl font-bold">₹{totalCost.toLocaleString()}</h2>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex items-center justify-between">
            <div>
              <p className="text-gray-500 font-medium mb-1">Active Subscriptions</p>
              <h2 className="text-3xl font-bold text-gray-800">{subscriptions.length}</h2>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-xl transition-colors flex items-center gap-2 font-bold shadow-lg"
            >
              <Plus size={20} /> New Subscription
            </button>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Subscriptions</h2>
            {loading ? (
              <p>Loading...</p>
            ) : subscriptions.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500">No subscriptions yet. Add one to get started!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subscriptions.map((sub) => (
                  <SubscriptionCard key={sub._id} sub={sub} onDelete={handleDelete} />
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Charts */}
          <div className="lg:col-span-1">
             <StatsChart subscriptions={subscriptions} />
          </div>

        </div>
      </div>

      <AddSubscriptionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={fetchSubscriptions} 
      />
    </div>
  );
};

export default Dashboard;