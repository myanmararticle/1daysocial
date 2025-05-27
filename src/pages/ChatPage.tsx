
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowLeft, 
  Send, 
  Smile, 
  Plus,
  Clock,
  Star,
  Gift
} from "lucide-react";
import { useNavigate, useParams } from 'react-router-dom';

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isMine: boolean;
  type: 'text' | 'emoji' | 'sticker';
}

const ChatPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [message, setMessage] = useState('');
  const [timeLeft, setTimeLeft] = useState('23h 45m');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "မင်္ဂလာပါ! 👋",
      timestamp: "10:30 AM",
      isMine: false,
      type: 'text'
    },
    {
      id: 2,
      text: "မင်္ဂလာပါ! ကောင်းတယ်နော် သင့်ကို တွေ့ရတာ 😊",
      timestamp: "10:32 AM",
      isMine: true,
      type: 'text'
    },
    {
      id: 3,
      text: "ဒီနေ့ ဘာလုပ်နေတာလဲ?",
      timestamp: "10:35 AM",
      isMine: false,
      type: 'text'
    }
  ]);

  const chatPartner = {
    name: "မင်းမင်း",
    avatar: "🎮",
    hobby: "Gaming",
    isOnline: true
  };

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
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMine: true,
        type: 'text'
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const quickEmojis = ['😊', '😂', '❤️', '👍', '😢', '😮', '🎉', '🔥'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 p-4 sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/chat')}
              className="text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  {chatPartner.avatar}
                </div>
                {chatPartner.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <div>
                <h3 className="text-gray-800 font-semibold">{chatPartner.name}</h3>
                <p className="text-xs text-gray-500">{chatPartner.isOnline ? 'Online' : 'Offline'}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1 text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
              <Clock className="h-3 w-3" />
              <span className="text-xs font-medium">{timeLeft}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Auto-delete Warning */}
      <div className="p-4">
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardContent className="p-3 text-center">
            <p className="text-xs text-orange-700">
              <Clock className="h-3 w-3 inline mr-1" />
              This conversation will auto-delete in {timeLeft}. All messages will be permanently removed.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.isMine ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                msg.isMine
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.isMine ? 'text-purple-100' : 'text-gray-400'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Emoji Bar */}
      <div className="p-4 border-t border-gray-200 bg-white/60">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2">
          {quickEmojis.map((emoji, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className="text-lg hover:bg-purple-100"
              onClick={() => {
                const emojiMessage: Message = {
                  id: messages.length + 1,
                  text: emoji,
                  timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  isMine: true,
                  type: 'emoji'
                };
                setMessages([...messages, emojiMessage]);
              }}
            >
              {emoji}
            </Button>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white/80 backdrop-blur-lg border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Plus className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Gift className="h-5 w-5" />
          </Button>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-white border-gray-200"
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          />
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Smile className="h-5 w-5" />
          </Button>
          <Button 
            onClick={sendMessage}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
