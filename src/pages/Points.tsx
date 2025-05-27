
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Gift, 
  Star, 
  Play, 
  Eye, 
  ArrowLeft, 
  Coins,
  Trophy,
  Target,
  Calendar
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Points = () => {
  const navigate = useNavigate();
  const [points, setPoints] = useState(150);
  const [watchingAd, setWatchingAd] = useState(false);

  const watchAd = () => {
    setWatchingAd(true);
    toast({
      title: "ကြော်ငြာကြည့်နေပါသည်",
      description: "5 စက္ကန့်ကြာမည်...",
    });
    
    setTimeout(() => {
      setWatchingAd(false);
      setPoints(prev => prev + 10);
      toast({
        title: "Point ရရှိပြီး! 🎉",
        description: "10 points ထပ်ရရှိပါပြီး",
      });
    }, 5000);
  };

  const earnActivities = [
    { title: "ကြော်ငြာကြည့်ခြင်း", points: 10, icon: Eye, action: watchAd },
    { title: "Word Game ကစားခြင်း", points: 15, icon: Play, action: () => navigate('/games') },
    { title: "Profile မြန်မာသွင်းခြင်း", points: 5, icon: Star, action: () => navigate('/profile') },
    { title: "နေ့စဉ်ဝင်ရောက်ခြင်း", points: 20, icon: Calendar, action: () => {} }
  ];

  const pointHistory = [
    { activity: "Word Game နိုင်ခြင်း", points: "+15", time: "2 နာရီအရင်" },
    { activity: "ကြော်ငြာကြည့်ခြင်း", points: "+10", time: "5 နာရီအရင်" },
    { activity: "နေ့စဉ်ဝင်ရောက်ခြင်း", points: "+20", time: "ယနေ့" },
    { activity: "စကားပြောခြင်း", points: "-5", time: "3 နာရီအရင်" }
  ];

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
          <h1 className="text-xl font-bold text-white">Point များ</h1>
          <div className="flex items-center space-x-2">
            <Coins className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold">{points}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Current Points Card */}
        <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span>လက်ရှိ Points</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">{points}</div>
              <p className="text-slate-400">Chat အတွက် သုံးစွဲနိုင်သော Points</p>
            </div>
          </CardContent>
        </Card>

        {/* Earn Points Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center space-x-2">
            <Target className="h-5 w-5 text-green-500" />
            <span>Points ရယူရန်</span>
          </h2>
          
          <div className="grid gap-4">
            {earnActivities.map((activity, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-slate-700 rounded-lg">
                        <activity.icon className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{activity.title}</h3>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                          +{activity.points} Points
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      onClick={activity.action}
                      disabled={watchingAd && activity.title === "ကြော်ငြာကြည့်ခြင်း"}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      {watchingAd && activity.title === "ကြော်ငြာကြည့်ခြင်း" ? "ကြည့်နေ..." : "စတင်"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Points History */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">အသုံးပြုမှတ်တမ်း</h2>
          
          <div className="space-y-3">
            {pointHistory.map((item, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{item.activity}</h3>
                      <p className="text-slate-400 text-sm">{item.time}</p>
                    </div>
                    <Badge 
                      className={`${
                        item.points.startsWith('+') 
                          ? 'bg-green-500/20 text-green-400 border-green-500/50'
                          : 'bg-red-500/20 text-red-400 border-red-500/50'
                      }`}
                    >
                      {item.points}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
