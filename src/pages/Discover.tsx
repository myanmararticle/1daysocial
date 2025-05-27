
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Users, Plus } from "lucide-react";
import BottomNavigation from '@/components/BottomNavigation';

interface SuggestedUser {
  id: number;
  name: string;
  username: string;
  avatar: string;
  followers: number;
  isFollowing: boolean;
  interests: string[];
}

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestedUsers, setSuggestedUsers] = useState<SuggestedUser[]>([
    {
      id: 1,
      name: "ရဲမင်း",
      username: "@ye_min_photo",
      avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
      followers: 1234,
      isFollowing: false,
      interests: ["Photography", "Travel"]
    },
    {
      id: 2,
      name: "သီရိ",
      username: "@thiri_art",
      avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      followers: 892,
      isFollowing: false,
      interests: ["Art", "Design"]
    },
    {
      id: 3,
      name: "ကျော်စွာ",
      username: "@kyaw_tech",
      avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face",
      followers: 2156,
      isFollowing: false,
      interests: ["Technology", "Gaming"]
    },
    {
      id: 4,
      name: "နီလာ",
      username: "@nila_music",
      avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop&crop=face",
      followers: 567,
      isFollowing: false,
      interests: ["Music", "Entertainment"]
    }
  ]);

  const toggleFollow = (userId: number) => {
    setSuggestedUsers(users => 
      users.map(user => 
        user.id === userId 
          ? { ...user, isFollowing: !user.isFollowing }
          : user
      )
    );
  };

  const trendingTopics = [
    "#YangonLife", "#MyanmarFood", "#Technology", "#Photography", 
    "#Music", "#Sports", "#Travel", "#Art"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-xl border-b border-white/10 p-4">
        <h1 className="text-white font-bold text-xl mb-4">Discover</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
          <Input
            placeholder="Search people, interests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full pl-10"
          />
        </div>
      </div>

      <div className="p-4 pb-20">
        {/* Trending Topics */}
        <div className="mb-6">
          <h2 className="text-white font-semibold text-lg mb-3">Trending</h2>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic, index) => (
              <Button
                key={index}
                variant="ghost"
                className="bg-white/10 text-white/80 hover:bg-white/20 hover:text-white rounded-full text-sm"
              >
                {topic}
              </Button>
            ))}
          </div>
        </div>

        {/* Suggested Users */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-lg">Suggested for you</h2>
            <Button variant="ghost" className="text-white/60 hover:text-white text-sm">
              See all
            </Button>
          </div>
          
          <div className="space-y-4">
            {suggestedUsers.map((user) => (
              <Card key={user.id} className="bg-white/10 backdrop-blur-lg border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-white font-semibold text-sm">{user.name}</h3>
                        <p className="text-white/60 text-xs">{user.username}</p>
                        <div className="flex items-center space-x-1 text-white/50 text-xs mt-1">
                          <Users className="h-3 w-3" />
                          <span>{user.followers} followers</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {user.interests.map((interest, index) => (
                            <span key={index} className="text-xs bg-white/20 text-white/80 px-2 py-0.5 rounded-full">
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => toggleFollow(user.id)}
                      className={
                        user.isFollowing 
                          ? "bg-white/20 text-white hover:bg-white/30 rounded-full"
                          : "bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white rounded-full"
                      }
                    >
                      {user.isFollowing ? 'Following' : 'Follow'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Discover;
