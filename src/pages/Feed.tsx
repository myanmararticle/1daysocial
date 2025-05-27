
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreVertical,
  Camera,
  Search,
  Bell,
  Plus,
  Home,
  Users,
  User,
  Settings
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import Stories from '@/components/Stories';
import PostCard from '@/components/PostCard';

interface Post {
  id: number;
  user: {
    name: string;
    username: string;
    avatar: string;
    isVerified: boolean;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  isLiked: boolean;
  location?: string;
}

const Feed = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: {
        name: "မင်းမင်း",
        username: "@minmin_gamer",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
        isVerified: true
      },
      content: "Gaming tournament မှာ championship ရခဲ့တယ်! အားပေးကြတဲ့လူတွေကို ကျေးဇူးတင်ပါတယ် 🏆🎮✨",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      likes: 247,
      comments: 38,
      shares: 15,
      timeAgo: "2h ago",
      isLiked: false,
      location: "Yangon Gaming Arena"
    },
    {
      id: 2,
      user: {
        name: "သူဇာ",
        username: "@suza_movie",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
        isVerified: false
      },
      content: "ဒီနေ့ sunset က အရမ်းလှတယ်! Nature photography က ကိုယ့်ရဲ့ passion လေး 📸🌅",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
      likes: 189,
      comments: 25,
      shares: 8,
      timeAgo: "4h ago",
      isLiked: true,
      location: "Kandawgyi Lake"
    },
    {
      id: 3,
      user: {
        name: "အောင်အောင်",
        username: "@aung_sports",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
        isVerified: false
      },
      content: "Morning workout ပြီးပြီ! Healthy lifestyle က အရေးကြီးတယ်နော် 💪🏃‍♂️",
      likes: 156,
      comments: 42,
      shares: 12,
      timeAgo: "6h ago",
      isLiked: false,
      location: "Inya Lake Park"
    },
    {
      id: 4,
      user: {
        name: "မေမေ",
        username: "@may_foodie",
        avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face",
        isVerified: true
      },
      content: "ဒီနေ့ cook လုပ်တဲ့ မွန်လူမျိုး traditional food! Recipe ကို share လုပ်မလား? 🍛👩‍🍳",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop",
      likes: 203,
      comments: 67,
      shares: 23,
      timeAgo: "8h ago",
      isLiked: true,
      location: "Home Kitchen"
    }
  ]);

  const toggleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white text-lg font-bold">1D</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl">1DaySocial</h1>
              <p className="text-white/60 text-xs">Connect & Share</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <Stories />

      {/* Create Post */}
      <div className="p-4">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">You</AvatarFallback>
              </Avatar>
              <Input 
                placeholder="What's on your mind?" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full flex-1"
              />
              <Button size="icon" className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 rounded-full shadow-lg">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Posts */}
      <div className="px-4 pb-20 space-y-4">
        {posts.map((post) => (
          <PostCard 
            key={post.id} 
            post={post} 
            onToggleLike={() => toggleLike(post.id)}
          />
        ))}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Feed;
