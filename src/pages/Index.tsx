
import React, { useState } from 'react';
import AuthLayout from '@/components/auth/AuthLayout';
import ChatDashboard from '@/components/chat/ChatDashboard';

const Index: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleAuthSuccess = (): void => {
    setIsAuthenticated(true);
  };

  const handleLogout = (): void => {
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return <ChatDashboard onLogout={handleLogout} />;
  }

  return <AuthLayout onAuthSuccess={handleAuthSuccess} />;
};

export default Index;
