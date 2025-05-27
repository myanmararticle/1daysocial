
import React, { useState, useEffect } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import { useNavigate } from 'react-router-dom';

const Index: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check if user was previously authenticated
    const savedAuthState = localStorage.getItem('1daysocial_auth');
    if (savedAuthState === 'true') {
      setIsAuthenticated(true);
      // Redirect to main feed if already authenticated
      navigate('/');
    }
    setIsLoading(false);
  }, [navigate]);

  const handleAuthSuccess = (): void => {
    setIsAuthenticated(true);
    localStorage.setItem('1daysocial_auth', 'true');
    // Redirect to main feed after authentication
    navigate('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-2xl">💬</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">1DaySocial</h1>
          <p className="text-white/60">Loading...</p>
        </div>
      </div>
    );
  }

  return <AuthLayout onAuthSuccess={handleAuthSuccess} />;
};

export default Index;
