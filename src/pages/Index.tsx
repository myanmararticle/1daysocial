
import React, { useState } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import ChatDashboard from '@/components/chat/ChatDashboard';

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <ChatDashboard onLogout={handleLogout} />;
  }

  return <AuthLayout onAuthSuccess={handleAuthSuccess} />;
};

export default Index;
