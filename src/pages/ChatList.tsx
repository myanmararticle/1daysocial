
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Clock, 
  Star,
  Users,
  MessageCircle,
  Plus,
  Bell
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';

interface ChatRequest {
  id: number;
  user: {
    name: string;
    avatar: string;
    hobby: string;
    age: number;
  };
  timeLeft: string;
  pointsRequired: number;
  isOnline: boolean;
}

interface ActiveChat {
  id: number;
  user: {
    name: string;
    avatar: string;
    hobby: string;
  };
  lastMessage: string;
  timeLeft: string;
  unreadCount: number;
  isOnline: boolean;
}

const ChatList = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'active' | 'requests'>('active');
  const [userPoints] = useState(150);

  const chatRequests: ChatRequest[] = [
    {
      id: 1,
      user: {
        name: "မင်းမင်း",
        avatar: "🎮",
        hobby: "Gaming",
        age: 22
      },
      timeLeft: "22h 45m",
      pointsRequired: 10,
      isOnline: true
    },
    {
      id: 2,
      user: {
        name: "သူဇာ",
        avatar: "🎬",
        hobby: "Movies",
        age: 20
      },
      timeLeft: "18h 30m",
      pointsRequired: 15,
      isOnline: false
    }
  ];

  const activeChats: ActiveChat[] = [
    {
      id: 3,
      user: {
        name: "အောင်အောင်",
        avatar: "⚽",
        hobby: "Sports"
      },
      lastMessage: "ဒီနေ့ ဘောလုံးပွဲ ကြည့်မလား?",
      timeLeft: "5h 20m",
      unreadCount: 2,
      isOnline: true
    },
    {
      id: 4,
      user: {
        name: "မေမေ",
        avatar: "🎵",
        hobby: "Music"
      },
      lastMessage: "နောက်ဆုံးထွက် သီချင်းကောင်းတယ်",
      timeLeft: "12h 15m",
      unreadCount: 0,
      isOnline: false
    }
  ];

  const sendChatRequest = (requestId: number, pointsRequired: number) => {
    if (userPoints >= pointsRequired) {
      console.log(`Sending chat request to user ${requestId} for ${pointsRequired} points`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">1D</span>
            </div>
            <h1 className="text-gray-800 font-bold text-lg">Chats</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
              <Star className="h-3 w-3 mr-1" />
              {userPoints} Points
            </Badge>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 pb-20 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Search chats or find new friends..."
            className="pl-10 bg-white/80 border-gray-200 text-gray-800"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white/60 p-1 rounded-lg">
          <Button
            variant={activeTab === 'active' ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === 'active' ? 'bg-purple-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('active')}
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Active Chats
          </Button>
          <Button
            variant={activeTab === 'requests' ? 'default' : 'ghost'}
            className={`flex-1 ${activeTab === 'requests' ? 'bg-purple-500 text-white' : 'text-gray-600'}`}
            onClick={() => setActiveTab('requests')}
          >
            <Users className="h-4 w-4 mr-2" />
            New Connections
          </Button>
        </div>

        {/* 24-Hour Timer Notice */}
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-orange-700">
              <Clock className="h-5 w-5" />
              <div>
                <p className="font-semibold">24-Hour Chat System</p>
                <p className="text-sm">All chats and messages automatically delete after 24 hours. Send new requests to reconnect!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Chats */}
        {activeTab === 'active' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Active Conversations</h2>
            
            {activeChats.length === 0 ? (
              <Card className="bg-white/60 border-gray-200">
                <CardContent className="p-8 text-center">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No active chats yet!</p>
                  <p className="text-sm text-gray-500 mt-2">Send connection requests to start chatting</p>
                </CardContent>
              </Card>
            ) : (
              activeChats.map(chat => (
                <Card key={chat.id} className="bg-white/60 border-gray-200 hover:bg-white/80 transition-colors cursor-pointer" onClick={() => navigate(`/chat/${chat.id}`)}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                          {chat.user.avatar}
                        </div>
                        {chat.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="text-gray-800 font-semibold">{chat.user.name}</h3>
                            <Badge className="bg-blue-100 text-blue-700 text-xs">{chat.user.hobby}</Badge>
                          </div>
                          {chat.unreadCount > 0 && (
                            <Badge className="bg-red-500 text-white">{chat.unreadCount}</Badge>
                          )}
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-1">{chat.lastMessage}</p>
                        
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-500">Expires in {chat.timeLeft}</span>
                          <div className="flex items-center space-x-1 text-orange-600">
                            <Clock className="h-3 w-3" />
                            <span>Auto-delete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Chat Requests */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Suggested Connections</h2>
            
            {chatRequests.map(request => (
              <Card key={request.id} className="bg-white/60 border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                        {request.user.avatar}
                      </div>
                      {request.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-gray-800 font-semibold">{request.user.name}</h3>
                        <Badge className="bg-purple-100 text-purple-700 text-xs">{request.user.hobby}</Badge>
                        <span className="text-gray-500 text-sm">({request.user.age})</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                          <p>Matched based on interests</p>
                          <div className="flex items-center space-x-1 text-orange-600 mt-1">
                            <Clock className="h-3 w-3" />
                            <span>Request expires in {request.timeLeft}</span>
                          </div>
                        </div>
                        
                        <Button
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                          onClick={() => sendChatRequest(request.id, request.pointsRequired)}
                          disabled={userPoints < request.pointsRequired}
                        >
                          <Star className="h-4 w-4 mr-1" />
                          {request.pointsRequired} Points
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <BottomNavigation />
    </div>
  );
};

export default ChatList;
