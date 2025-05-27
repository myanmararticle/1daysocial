
import React from 'react';
import { Button } from "@/components/ui/button";
import { Home, Search, Plus, Heart, User } from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, path: '/', label: 'Home' },
    { icon: Search, path: '/discover', label: 'Discover' },
    { icon: Plus, path: '/create', label: 'Create' },
    { icon: Heart, path: '/notifications', label: 'Activity' },
    { icon: User, path: '/profile', label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/20 backdrop-blur-xl border-t border-white/10 z-50">
      <div className="flex items-center justify-around py-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Button
              key={item.path}
              variant="ghost"
              size="icon"
              onClick={() => navigate(item.path)}
              className={`rounded-full h-12 w-12 ${
                isActive 
                  ? 'bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className={`h-6 w-6 ${item.icon === Plus ? 'h-7 w-7' : ''}`} />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
