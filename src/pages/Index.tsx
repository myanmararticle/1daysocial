
import React, { useState, useEffect } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import ChatDashboard from '@/components/chat/ChatDashboard';

const Index: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user was previously authenticated
    const savedAuthState = localStorage.getItem('1daysocial_auth');
    if (savedAuthState === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleAuthSuccess = (): void => {
    setIsAuthenticated(true);
    localStorage.setItem('1daysocial_auth', 'true');
  };

  const handleLogout = (): void => {
    setIsAuthenticated(false);
    localStorage.removeItem('1daysocial_auth');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">💬</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">1DaySocial</h1>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated) {
    return <ChatDashboard onLogout={handleLogout} />;
  }

  return <AuthLayout onAuthSuccess={handleAuthSuccess} />;
};

export default Index;
