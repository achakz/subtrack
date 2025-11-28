import React, { useContext } from 'react';
import { LogOut } from 'lucide-react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
            <h1 className="text-xl font-bold text-gray-800">SubTrack</h1>
        </div>
        
        <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden md:block">Welcome, <b>{user?.name}</b></span>
            <button 
                onClick={logout}
                className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 transition-colors"
            >
                <LogOut size={18} />
                Logout
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;