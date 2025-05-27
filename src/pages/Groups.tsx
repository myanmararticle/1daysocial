
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Plus, 
  Search,
  Users,
  Lock,
  Globe,
  Crown,
  MessageCircle,
  Clock
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Groups = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'my' | 'discover'>('my');

  const myGroups = [
    {
      id: 1,
      name: "Gaming Buddies",
      description: "မြန်မာ Gamers အတွက်",
      members: 45,
      isPrivate: false,
      hobby: "Gaming",
      lastMessage: "အဲဒီ game ကောင်းတယ်နော်!",
      lastMessageTime: "2 မိနစ်အရင်",
      unreadCount: 3,
      isAdmin: true,
      avatar: "🎮"
    },
    {
      id: 2,
      name: "Music Lovers",
      description: "တေးဂီတချစ်သူများ",
      members: 32,
      isPrivate: true,
      hobby: "Music",
      lastMessage: "နောက်ဆုံးထွက် သီချင်းကောင်းတယ်",
      lastMessageTime: "1 နာရီအရင်",
      unreadCount: 0,
      isAdmin: false,
      avatar: "🎵"
    }
  ];

  const discoverGroups = [
    {
      id: 3,
      name: "Movie Critics",
      description: "ရုပ်ရှင်ဝါသနာများ ဆွေးနွေးရာ",
      members: 78,
      isPrivate: false,
      hobby: "Movies",
      avatar: "🎬"
    },
    {
      id: 4,
      name: "Book Club",
      description: "စာဖတ်ခြင်းနှင့် စာအုပ်များ ဆွေးနွေးခြင်း",
      members: 56,
      isPrivate: false,
      hobby: "Reading",
      avatar: "📚"
    },
    {
      id: 5,
      name: "Travel Enthusiasts",
      description: "ခရီးသွားမှတ်တမ်းများ မျှဝေခြင်း",
      members: 89,
      isPrivate: true,
      hobby: "Travel",
      avatar: "✈️"
    }
  ];

  const joinGroup = (groupId: number, groupName: string) => {
    toast({
      title: "Group သို့ ဝင်ရောက်ပြီး! 🎉",
      description: `${groupName} group သို့ အောင်မြင်စွာ ဝင်ရောက်ပြီးပါပြီး`,
    });
  };

  const leaveGroup = (groupId: number, groupName: string) => {
    toast({
      title: "Group မှ ထွက်ပြီး",
      description: `${groupName} group မှ ထွက်ခွာပြီးပါပြီး`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-800/90 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Group Chat များ</h1>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-slate-400 hover:text-white"
            onClick={() => toast({ title: "Group အသစ်ဖန်တီးမည်", description: "Feature လာမည်..." })}
          >
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Group နာမည်ဖြင့် ရှာခြင်း..."
            className="pl-10 bg-slate-700/50 border-slate-600 text-white"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg">
          <Button
            variant={selectedTab === 'my' ? 'default' : 'ghost'}
            className={`flex-1 ${selectedTab === 'my' ? 'bg-purple-500 text-white' : 'text-slate-400'}`}
            onClick={() => setSelectedTab('my')}
          >
            ကျွန်ုပ်၏ Groups
          </Button>
          <Button
            variant={selectedTab === 'discover' ? 'default' : 'ghost'}
            className={`flex-1 ${selectedTab === 'discover' ? 'bg-purple-500 text-white' : 'text-slate-400'}`}
            onClick={() => setSelectedTab('discover')}
          >
            ရှာဖွေခြင်း
          </Button>
        </div>

        {/* My Groups */}
        {selectedTab === 'my' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">ကျွန်ုပ်၏ Groups</h2>
            
            {myGroups.map(group => (
              <Card key={group.id} className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center text-xl">
                        {group.avatar}
                      </div>
                      {group.isAdmin && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                          <Crown className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="text-white font-bold">{group.name}</h3>
                          {group.isPrivate ? (
                            <Lock className="h-4 w-4 text-slate-400" />
                          ) : (
                            <Globe className="h-4 w-4 text-green-400" />
                          )}
                        </div>
                        {group.unreadCount > 0 && (
                          <Badge className="bg-red-500 text-white">{group.unreadCount}</Badge>
                        )}
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-2">{group.description}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-slate-500 mb-2">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{group.members} members</span>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                          {group.hobby}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-slate-300 text-sm">{group.lastMessage}</p>
                          <div className="flex items-center space-x-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" />
                            <span>{group.lastMessageTime}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                            onClick={() => navigate('/')}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Chat
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-slate-600 text-slate-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400"
                            onClick={() => leaveGroup(group.id, group.name)}
                          >
                            ထွက်
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Discover Groups */}
        {selectedTab === 'discover' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white">အကြံပြုချက် Groups</h2>
            
            {discoverGroups.map(group => (
              <Card key={group.id} className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-slate-600 rounded-xl flex items-center justify-center text-xl">
                      {group.avatar}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-white font-bold">{group.name}</h3>
                        {group.isPrivate ? (
                          <Lock className="h-4 w-4 text-slate-400" />
                        ) : (
                          <Globe className="h-4 w-4 text-green-400" />
                        )}
                      </div>
                      
                      <p className="text-slate-400 text-sm mb-2">{group.description}</p>
                      
                      <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{group.members} members</span>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs">
                          {group.hobby}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                          onClick={() => joinGroup(group.id, group.name)}
                        >
                          <Plus className="h-4 w-4 mr-1" />
                          {group.isPrivate ? 'Request ပို့' : 'ဝင်ရောက်'}
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
    </div>
  );
};

export default Groups;
