
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Settings, 
  Search, 
  Users, 
  Clock, 
  Gift, 
  LogOut,
  Smile,
  Paperclip,
  Phone,
  Video,
  MoreVertical
} from "lucide-react";

const ChatDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState(150);

  const chats = [
    {
      id: 1,
      name: "Alex K.",
      lastMessage: "Hey! How's your day going?",
      time: "2:30 PM",
      avatar: "🎮",
      hobby: "Gaming",
      timeLeft: "18h 30m",
      unread: 3,
      online: true
    },
    {
      id: 2,
      name: "Sarah M.",
      lastMessage: "That movie was amazing!",
      time: "1:15 PM",
      avatar: "🎬",
      hobby: "Movies",
      timeLeft: "22h 45m",
      unread: 0,
      online: false
    },
    {
      id: 3,
      name: "Jake P.",
      lastMessage: "Let's play that word game",
      time: "11:45 AM",
      avatar: "🎯",
      hobby: "Games",
      timeLeft: "15h 20m",
      unread: 1,
      online: true
    }
  ];

  const messages = [
    {
      id: 1,
      text: "Hey! How's your day going?",
      time: "2:30 PM",
      sender: "other",
      type: "text"
    },
    {
      id: 2,
      text: "Pretty good! Just finished work. What about you?",
      time: "2:32 PM",
      sender: "me",
      type: "text"
    },
    {
      id: 3,
      text: "Same here! Want to play a quick game?",
      time: "2:33 PM",
      sender: "other",
      type: "text"
    }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      // Add message logic here
      setMessage('');
    }
  };

  return (
    <div className="h-screen bg-slate-900 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-slate-800 border-r border-slate-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-semibold">1DaySocial</h1>
                <div className="flex items-center space-x-2">
                  <Gift className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-yellow-500">{points} Points</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onLogout}
              className="text-slate-400 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search chats..."
              className="pl-10 bg-slate-700 border-slate-600 text-white placeholder-slate-400"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(index)}
              className={`p-4 border-b border-slate-700 cursor-pointer hover:bg-slate-700/50 transition-colors ${
                selectedChat === index ? 'bg-slate-700' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-lg">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{chat.name}</h3>
                    <div className="flex items-center space-x-2">
                      {chat.unread > 0 && (
                        <Badge className="bg-purple-500 text-white text-xs">{chat.unread}</Badge>
                      )}
                      <span className="text-xs text-slate-400">{chat.time}</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 truncate">{chat.lastMessage}</p>
                  <div className="flex items-center justify-between mt-1">
                    <Badge variant="secondary" className="text-xs bg-slate-600 text-slate-300">
                      {chat.hobby}
                    </Badge>
                    <div className="flex items-center space-x-1 text-xs text-slate-500">
                      <Clock className="h-3 w-3" />
                      <span>{chat.timeLeft}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-slate-700">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Users className="h-4 w-4 mr-2" />
              Find Match
            </Button>
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-700">
              <Gift className="h-4 w-4 mr-2" />
              Earn Points
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-lg">
                {chats[selectedChat]?.avatar}
              </div>
              {chats[selectedChat]?.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-800"></div>
              )}
            </div>
            <div>
              <h3 className="text-white font-medium">{chats[selectedChat]?.name}</h3>
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Clock className="h-3 w-3" />
                <span>Time left: {chats[selectedChat]?.timeLeft}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.sender === 'me'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-700 text-white'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <p className={`text-xs mt-1 ${
                  msg.sender === 'me' ? 'text-purple-100' : 'text-slate-400'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-slate-800 border-t border-slate-700">
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 pr-10"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <Smile className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              onClick={sendMessage}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
