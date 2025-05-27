
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  Star,
  Clock
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '@/components/BottomNavigation';
import Stories from '@/components/Stories';

interface Post {
  id: number;
  user: {
    name: string;
    avatar: string;
    isVerified: boolean;
    hobby: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  isLiked: boolean;
}

const Feed = () => {
  const navigate = useNavigate();
  const [userPoints] = useState(150);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: {
        name: "မင်းမင်း",
        avatar: "🎮",
        isVerified: true,
        hobby: "Gaming"
      },
      content: "Gaming tournament မှာ ပါဝင်နေတယ်! သူငယ်ချင်းတွေ ကံကောင်းပါစေ 🎯 ဘယ်သူတွေ ကြည့်နေလဲ?",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop",
      likes: 24,
      comments: 8,
      shares: 3,
      timeAgo: "2h ago",
      isLiked: false
    },
    {
      id: 2,
      user: {
        name: "သူဇာ",
        avatar: "🎬",
        isVerified: false,
        hobby: "Movies"
      },
      content: "နောက်ဆုံးထွက်တဲ့ Marvel ရုပ်ရှင်ကြည့်ပြီးပြီ။ အရမ်းကောင်းတယ်! ဘယ်သူတွေကြည့်ပြီးပြီလဲ? spoiler မပေးပါနဲ့နော် 🍿✨",
      likes: 45,
      comments: 12,
      shares: 7,
      timeAgo: "4h ago",
      isLiked: true
    },
    {
      id: 3,
      user: {
        name: "အောင်အောင်",
        avatar: "⚽",
        isVerified: false,
        hobby: "Sports"
      },
      content: "ဒီနေ့ညနေ ဘောလုံးပွဲကြည့်မယ်။ ဘယ်တီးမကိုင်းမလဲ? စိုစိုရွှမ်းရွှမ်း ဖြစ်နေပြီ 🏆⚽",
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=500&h=300&fit=crop",
      likes: 31,
      comments: 18,
      shares: 5,
      timeAgo: "6h ago",
      isLiked: false
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-lg border-b border-gray-200 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">1D</span>
            </div>
            <h1 className="text-gray-800 font-bold text-lg">1DaySocial</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
              <Star className="h-3 w-3 mr-1" />
              {userPoints}
            </Badge>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-800">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Stories */}
        <Stories />

        {/* 24-Hour System Info */}
        <div className="p-4">
          <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-2 text-orange-700">
                <Clock className="h-5 w-5" />
                <div>
                  <p className="font-semibold">24-Hour Social System</p>
                  <p className="text-sm">Messages, chats, and connections reset every 24 hours. Earn points to unlock new conversations!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Create Post */}
        <div className="p-4">
          <Card className="bg-white/80 border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">You</span>
                </div>
                <div 
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2 cursor-pointer hover:bg-gray-200 transition-colors"
                  onClick={() => navigate('/create')}
                >
                  <p className="text-gray-500">What's on your mind today?</p>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <Camera className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Posts */}
        <div className="p-4 space-y-6 pb-20">
          {posts.map(post => (
            <Card key={post.id} className="bg-white/80 border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                {/* Post Header */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                      {post.user.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-gray-800 font-semibold">{post.user.name}</h3>
                        {post.user.isVerified && <Badge className="bg-blue-100 text-blue-700 text-xs">✓</Badge>}
                        <Badge className="bg-purple-100 text-purple-700 text-xs">{post.user.hobby}</Badge>
                      </div>
                      <p className="text-gray-500 text-sm">{post.timeAgo}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-gray-400">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>

                {/* Post Content */}
                <div className="px-4 pb-3">
                  <p className="text-gray-800">{post.content}</p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-4">
                    <img 
                      src={post.image} 
                      alt="Post content" 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="px-4 pb-4">
                  <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                    <div className="flex items-center space-x-6">
                      <Button
                        variant="ghost"
                        size="sm"
                        className={`${post.isLiked ? 'text-red-500' : 'text-gray-600'} hover:text-red-500`}
                        onClick={() => toggleLike(post.id)}
                      >
                        <Heart className={`h-4 w-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="text-gray-600 hover:text-green-500">
                        <Share2 className="h-4 w-4 mr-1" />
                        {post.shares}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Feed;
