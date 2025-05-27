import React, { useState, useRef, useEffect } from 'react';
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
  MoreVertical,
  Plus,
  Star,
  Shield,
  Heart,
  Zap,
  Gamepad2,
  UserCheck
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  time: string;
  sender: 'me' | 'other';
  type: 'text' | 'emoji' | 'image';
}

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  hobby: string;
  timeLeft: string;
  unread: number;
  online: boolean;
}

const ChatDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const navigate = useNavigate();
  const [selectedChat, setSelectedChat] = useState(0);
  const [message, setMessage] = useState('');
  const [points, setPoints] = useState(150);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [chats] = useState<Chat[]>([
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
    },
    {
      id: 4,
      name: "Maya L.",
      lastMessage: "Thanks for the music recommendation!",
      time: "Yesterday",
      avatar: "🎵",
      hobby: "Music",
      timeLeft: "8h 45m",
      unread: 0,
      online: true
    }
  ]);

  const [messages, setMessages] = useState<Message[]>([
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
      text: "Same here! Want to play a quick game? 🎮",
      time: "2:33 PM",
      sender: "other",
      type: "text"
    },
    {
      id: 4,
      text: "Sure! What game do you have in mind?",
      time: "2:34 PM",
      sender: "me",
      type: "text"
    }
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sender: "me",
        type: "text"
      };
      
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate typing indicator
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        // Add a random response
        const responses = [
          "That's interesting! 😊",
          "မင်းကြောင့်ပျော်တယ်! 🎉",
          "Tell me more about that!",
          "အဲဒါကောင်းတယ်နော်!",
          "Sounds fun! 🎮"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        const responseMessage: Message = {
          id: messages.length + 2,
          text: randomResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sender: "other",
          type: "text"
        };
        setMessages(prev => [...prev, responseMessage]);
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col md:flex-row animate-fade-in">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-slate-800/90 backdrop-blur-lg border-r border-slate-700/50 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg animate-scale-in">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-white font-semibold text-lg">1DaySocial</h1>
                <div className="flex items-center space-x-2">
                  <Gift className="h-3 w-3 text-yellow-500" />
                  <span className="text-xs text-yellow-500 font-medium">{points} Points</span>
                </div>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={onLogout}
              className="text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
              placeholder="Search chats..."
              className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:bg-slate-700 transition-all duration-200"
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="grid grid-cols-2 gap-3">
            <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="text-xs text-slate-400">Active Chats</p>
                    <p className="text-sm font-semibold text-white">{chats.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-green-400" />
                  <div>
                    <p className="text-xs text-slate-400">Time Left</p>
                    <p className="text-sm font-semibold text-white">18h 30m</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(index)}
              className={`p-4 border-b border-slate-700/50 cursor-pointer hover:bg-slate-700/30 transition-all duration-200 ${
                selectedChat === index ? 'bg-slate-700/50 border-l-4 border-l-purple-500' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-slate-600 rounded-xl flex items-center justify-center text-lg shadow-md">
                    {chat.avatar}
                  </div>
                  {chat.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-medium truncate">{chat.name}</h3>
                    <div className="flex items-center space-x-2">
                      {chat.unread > 0 && (
                        <Badge className="bg-purple-500 text-white text-xs animate-pulse">{chat.unread}</Badge>
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

        {/* Navigation Menu */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-slate-600 text-slate-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 transition-all duration-300"
              onClick={() => navigate('/matches')}
            >
              <UserCheck className="h-4 w-4 mr-2" />
              Find Match
            </Button>
            <div className="grid grid-cols-4 gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 p-2"
                onClick={() => navigate('/points')}
              >
                <Gift className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 p-2"
                onClick={() => navigate('/groups')}
              >
                <Users className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 p-2"
                onClick={() => navigate('/games')}
              >
                <Gamepad2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-slate-600 text-slate-300 hover:bg-slate-700 p-2"
                onClick={() => navigate('/profile')}
              >
                <Settings className="h-4 w-4" />
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="border-yellow-600 text-yellow-300 hover:bg-yellow-500/20 border-yellow-500/50"
              onClick={() => navigate('/admin')}
            >
              <Shield className="h-4 w-4 mr-2" />
              Admin Panel
            </Button>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 bg-slate-800/90 backdrop-blur-lg border-b border-slate-700/50 flex items-center justify-between">
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
                <span className="text-green-400">• Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
              <Shield className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-800/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} animate-fade-in`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-lg ${
                  msg.sender === 'me'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-700/80 backdrop-blur-sm text-white border border-slate-600/50'
                }`}
              >
                <p className="text-sm leading-relaxed">{msg.text}</p>
                <p className={`text-xs mt-2 ${
                  msg.sender === 'me' ? 'text-purple-100' : 'text-slate-400'
                }`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 px-4 py-3 rounded-2xl shadow-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 bg-slate-800/90 backdrop-blur-lg border-t border-slate-700/50">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-slate-700/50">
              <Paperclip className="h-4 w-4" />
            </Button>
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message... (Press Enter to send)"
                className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pr-12 focus:bg-slate-700 transition-all duration-200"
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
              disabled={!message.trim()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Quick Reactions */}
          <div className="flex items-center space-x-2 mt-3">
            <span className="text-xs text-slate-400">Quick:</span>
            {['👍', '❤️', '😊', '🎉', '🔥'].map((emoji) => (
              <Button
                key={emoji}
                variant="ghost"
                size="sm"
                className="text-lg hover:bg-slate-700/50 p-1 h-8 w-8"
                onClick={() => setMessage(message + emoji)}
              >
                {emoji}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDashboard;
