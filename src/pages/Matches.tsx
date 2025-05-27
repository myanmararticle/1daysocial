
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Heart, 
  X, 
  Filter, 
  Search,
  MapPin,
  Clock,
  Star,
  MessageCircle
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Matches = () => {
  const navigate = useNavigate();
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>(['Gaming']);

  const hobbies = ['Gaming', 'Music', 'Movies', 'Reading', 'Sports', 'Travel', 'Photography', 'Cooking'];
  
  const potentialMatches = [
    {
      id: 1,
      name: "မင်းမင်း",
      age: 24,
      hobbies: ['Gaming', 'Music'],
      distance: "2 km ကွာ",
      avatar: "🎮",
      compatibility: 95,
      isOnline: true,
      bio: "Gaming နှင့် Music နှစ်သက်ပါတယ်"
    },
    {
      id: 2,
      name: "သူဇာ",
      age: 22,
      hobbies: ['Movies', 'Reading'],
      distance: "5 km ကွာ",
      avatar: "🎬",
      compatibility: 87,
      isOnline: false,
      bio: "ရုပ်ရှင်နှင့် စာဖတ်ခြင်းကို ချစ်ပါတယ်"
    },
    {
      id: 3,
      name: "အောင်အောင်",
      age: 26,
      hobbies: ['Sports', 'Travel'],
      distance: "1 km ကွာ",
      avatar: "⚽",
      compatibility: 82,
      isOnline: true,
      bio: "အားကစားနှင့် ခရီးသွားခြင်းကို နှစ်သက်ပါတယ်"
    }
  ];

  const sendRequest = (matchId: number, name: string) => {
    toast({
      title: "Request ပို့ပြီးပါပြီး! 💌",
      description: `${name} သို့ chat request ပို့ပြီးပါပြီး`,
    });
  };

  const toggleHobby = (hobby: string) => {
    setSelectedHobbies(prev => 
      prev.includes(hobby) 
        ? prev.filter(h => h !== hobby)
        : [...prev, hobby]
    );
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
          <h1 className="text-xl font-bold text-white">Match ရှာခြင်း</h1>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white">
            <Filter className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="ဝါသနာအလိုက် ရှာခြင်း..."
            className="pl-10 bg-slate-700/50 border-slate-600 text-white"
          />
        </div>

        {/* Hobby Filter */}
        <div className="space-y-3">
          <h3 className="text-white font-medium">ဝါသနာများ ရွေးချယ်ပါ</h3>
          <div className="flex flex-wrap gap-2">
            {hobbies.map(hobby => (
              <Badge
                key={hobby}
                className={`cursor-pointer transition-all ${
                  selectedHobbies.includes(hobby)
                    ? 'bg-purple-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
                onClick={() => toggleHobby(hobby)}
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </div>

        {/* Matches */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">သင့်အတွက် အကြံပြုချက်များ</h2>
          
          {potentialMatches.map(match => (
            <Card key={match.id} className="bg-slate-800/50 border-slate-700/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  {/* Match compatibility */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                      {match.compatibility}% ကိုက်ညီ
                    </Badge>
                  </div>
                  
                  {/* Profile Section */}
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center text-2xl">
                          {match.avatar}
                        </div>
                        {match.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800"></div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-white font-bold text-lg">{match.name}</h3>
                          <span className="text-slate-400">{match.age}</span>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-slate-400 mb-2">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{match.distance}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-500" />
                            <span>{match.compatibility}%</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 text-sm mb-3">{match.bio}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {match.hobbies.map(hobby => (
                            <Badge 
                              key={hobby}
                              className="bg-blue-500/20 text-blue-400 border-blue-500/50 text-xs"
                            >
                              {hobby}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 border-slate-600 text-slate-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400"
                          >
                            <X className="h-4 w-4 mr-1" />
                            ကျော်
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                            onClick={() => sendRequest(match.id, match.name)}
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Request ပို့
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Requests */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">ပို့ထားသော Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">🎮</div>
                  <div>
                    <p className="text-white font-medium">မင်းမင်း</p>
                    <p className="text-slate-400 text-sm">2 နာရီအရင် ပို့ခဲ့</p>
                  </div>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/50">
                  စောင့်နေ
                </Badge>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">🎬</div>
                  <div>
                    <p className="text-white font-medium">သူဇာ</p>
                    <p className="text-slate-400 text-sm">5 နာရီအရင် ပို့ခဲ့</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                  လက်ခံပြီး
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Matches;
