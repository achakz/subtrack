import React, { useContext } from 'react';
import { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const AppContent = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return user ? <Dashboard /> : <Login />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;