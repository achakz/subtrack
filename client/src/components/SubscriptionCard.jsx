import React from 'react';
import { Trash2, Calendar, CreditCard } from 'lucide-react';
import { format } from 'date-fns';

const SubscriptionCard = ({ sub, onDelete }) => {
  const date = new Date(sub.startDate);
  const dayOfMonth = date.getDate();
  
  // Simple logic to check if due within 3 days
  const today = new Date().getDate();
  const isDueSoon = Math.abs(dayOfMonth - today) <= 3;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow relative group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-gray-800">{sub.name}</h3>
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
            {sub.category}
          </span>
        </div>
        <p className="font-bold text-xl text-indigo-600">
          ₹{sub.price}
          <span className="text-xs text-gray-400 font-normal">/mo</span>
        </p>
      </div>

      <div className="space-y-2 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <span>Started: {format(date, 'MMM do, yyyy')}</span>
        </div>
        <div className={`flex items-center gap-2 ${isDueSoon ? 'text-red-500 font-semibold' : ''}`}>
          <CreditCard size={16} />
          <span>Renews on: {dayOfMonth}{getOrdinal(dayOfMonth)}</span>
        </div>
      </div>

      <button 
        onClick={() => onDelete(sub._id)}
        className="absolute bottom-4 right-4 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

// Helper for "1st", "2nd", "3rd"
const getOrdinal = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return s[(v - 20) % 10] || s[v] || s[0];
};

export default SubscriptionCard;