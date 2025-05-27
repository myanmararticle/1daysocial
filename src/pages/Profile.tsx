
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Edit, 
  Camera,
  MapPin,
  Calendar,
  Heart,
  Star,
  Settings,
  Save,
  X
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'သင်၏အမည်',
    age: '25',
    location: 'ရန်ကုန်',
    bio: 'Hello! 1DaySocial တွင် အသစ်ရောက်ရှိလာပါတယ်။',
    hobbies: ['Gaming', 'Music'],
    avatar: '🎯'
  });

  const allHobbies = ['Gaming', 'Music', 'Movies', 'Reading', 'Sports', 'Travel', 'Photography', 'Cooking', 'Art', 'Dancing'];

  const saveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile သိမ်းဆည်းပြီး! ✅",
      description: "သင့်အချက်အလက်များကို အောင်မြင်စွာ update လုပ်ပြီးပါပြီး",
    });
  };

  const toggleHobby = (hobby: string) => {
    setProfile(prev => ({
      ...prev,
      hobbies: prev.hobbies.includes(hobby)
        ? prev.hobbies.filter(h => h !== hobby)
        : [...prev.hobbies, hobby]
    }));
  };

  const stats = [
    { label: 'Total Chats', value: '12', icon: Heart },
    { label: 'Points Earned', value: '450', icon: Star },
    { label: 'Games Won', value: '8', icon: Star },
    { label: 'Days Active', value: '15', icon: Calendar }
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
          <h1 className="text-xl font-bold text-white">Profile</h1>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsEditing(!isEditing)}
            className="text-slate-400 hover:text-white"
          >
            {isEditing ? <X className="h-5 w-5" /> : <Edit className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Profile Card */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-slate-600 rounded-full flex items-center justify-center text-4xl">
                  {profile.avatar}
                </div>
                {isEditing && (
                  <Button 
                    size="icon"
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 hover:bg-purple-600"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Basic Info */}
              <div className="w-full space-y-4">
                {isEditing ? (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">အမည်</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-slate-700/50 border-slate-600 text-white"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age" className="text-white">အသက်</Label>
                        <Input
                          id="age"
                          value={profile.age}
                          onChange={(e) => setProfile(prev => ({ ...prev, age: e.target.value }))}
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location" className="text-white">နေရပ်</Label>
                        <Input
                          id="location"
                          value={profile.location}
                          onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                          className="bg-slate-700/50 border-slate-600 text-white"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio" className="text-white">မိတ်ဆက်</Label>
                      <Textarea
                        id="bio"
                        value={profile.bio}
                        onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                        className="bg-slate-700/50 border-slate-600 text-white"
                        rows={3}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-white mb-1">{profile.name}</h2>
                      <div className="flex items-center justify-center space-x-4 text-slate-400">
                        <span>{profile.age} နှစ်</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{profile.location}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-300 text-center">{profile.bio}</p>
                  </>
                )}
              </div>

              {isEditing && (
                <Button 
                  onClick={saveProfile}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  <Save className="h-4 w-4 mr-2" />
                  သိမ်းဆည်း
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Hobbies */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">ဝါသနာများ</CardTitle>
          </CardHeader>
          <CardContent>
            {isEditing ? (
              <div className="space-y-3">
                <p className="text-slate-400 text-sm">သင့်ဝါသနာများကို ရွေးချယ်ပါ (အများဆုံး 5 ခု)</p>
                <div className="flex flex-wrap gap-2">
                  {allHobbies.map(hobby => (
                    <Badge
                      key={hobby}
                      className={`cursor-pointer transition-all ${
                        profile.hobbies.includes(hobby)
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
            ) : (
              <div className="flex flex-wrap gap-2">
                {profile.hobbies.map(hobby => (
                  <Badge 
                    key={hobby}
                    className="bg-purple-500/20 text-purple-400 border-purple-500/50"
                  >
                    {hobby}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Stats */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white">ကိန်းဂဏန်းများ</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-slate-700/50 rounded-lg">
                  <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>ဆက်တင်များ</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 justify-start"
            >
              Notification ဆက်တင်များ
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 justify-start"
            >
              Privacy ဆက်တင်များ
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700 justify-start"
            >
              Account မှတ်တမ်း
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-red-600 text-red-400 hover:bg-red-500/20 justify-start"
            >
              Account ဖျက်ခြင်း
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
