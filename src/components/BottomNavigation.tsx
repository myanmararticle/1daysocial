
import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Search, Plus, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/discover', label: 'Discover' },
    { icon: Plus, path: '/create', label: 'Create' },
    { icon: MessageCircle, path: '/chat', label: 'Chat' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 z-50 shadow-lg">
      <div className="flex items-center justify-around py-3 px-4 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
            (item.path === '/chat' && location.pathname.startsWith('/chat'));
          
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="icon"
              onClick={() => navigate(item.path)}
              className={`rounded-2xl h-12 w-12 transition-all duration-200 ${
                isActive 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg transform scale-110' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className={`h-6 w-6 ${item.icon === Plus && isActive ? 'h-7 w-7' : ''}`} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
