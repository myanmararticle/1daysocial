
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Users, UserPlus } from "lucide-react";
import BottomNavigation from '@/components/BottomNavigation';

interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow' | 'mention';
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  timeAgo: string;
  isRead: boolean;
  postImage?: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'like',
      user: {
        name: "မင်းမင်း",
        username: "@minmin_gamer",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face"
      },
      content: "liked your post",
      timeAgo: "2m ago",
      isRead: false,
      postImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      type: 'comment',
      user: {
        name: "သူဇာ",
        username: "@suza_movie",
        avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face"
      },
      content: "commented on your post: \"Amazing shot! 📸\"",
      timeAgo: "15m ago",
      isRead: false
    },
    {
      id: 3,
      type: 'follow',
      user: {
        name: "အောင်အောင်",
        username: "@aung_sports",
        avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face"
      },
      content: "started following you",
      timeAgo: "1h ago",
      isRead: true
    },
    {
      id: 4,
      type: 'mention',
      user: {
        name: "မေမေ",
        username: "@may_foodie",
        avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop&crop=face"
      },
      content: "mentioned you in a post",
      timeAgo: "2h ago",
      isRead: true
    }
  ]);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'like':
        return <Heart className="h-4 w-4 text-red-500" />;
      case 'comment':
        return <MessageCircle className="h-4 w-4 text-blue-500" />;
      case 'follow':
        return <UserPlus className="h-4 w-4 text-green-500" />;
      case 'mention':
        return <Users className="h-4 w-4 text-purple-500" />;
      default:
        return <Heart className="h-4 w-4 text-gray-500" />;
    }
  };

  const markAsRead = (notificationId: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === notificationId ? { ...notif, isRead: true } : notif
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-xl">Activity</h1>
          <Button
            variant="ghost"
            className="text-white/60 hover:text-white text-sm"
            onClick={() => setNotifications(notifications.map(n => ({ ...n, isRead: true })))}
          >
            Mark all as read
          </Button>
        </div>
      </div>

      <div className="p-4 pb-20">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`bg-white/10 backdrop-blur-lg border-white/20 cursor-pointer transition-all ${
                !notification.isRead ? 'border-blue-500/50 bg-blue-500/10' : ''
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="relative">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={notification.user.avatar} />
                      <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                        {notification.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="text-white text-sm">
                          <span className="font-semibold">{notification.user.name}</span>
                          {' '}
                          <span className="text-white/80">{notification.content}</span>
                        </p>
                        <p className="text-white/60 text-xs mt-1">{notification.timeAgo}</p>
                      </div>
                      
                      {notification.postImage && (
                        <img 
                          src={notification.postImage} 
                          alt="Post" 
                          className="w-12 h-12 object-cover rounded-lg ml-3"
                        />
                      )}
                    </div>
                  </div>
                  
                  {!notification.isRead && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Notifications;
