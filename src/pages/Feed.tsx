
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MessageCircle, 
  Share2, 
  MoreVertical,
  Camera,
  Search,
  Bell,
  Star,
  Clock,
  User,
  UserPlus,
  ChevronLeft,
  ChevronRight
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
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
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
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=600&fit=crop",
      likes: 124,
      comments: 48,
      shares: 13,
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
      content: "နောက်ဆုံးထွက်တဲ့ Marvel ရုပ်ရှင်ကြည့်ပြီးပြီ။ အရမ်းကောင်းတယ်! ဘယ်သူတွေကြည့်ပြီးပြီလဲ? 🍿✨",
      image: "https://images.unsplash.com/photo-1489599558913-b62e7b5fab05?w=400&h=600&fit=crop",
      likes: 245,
      comments: 82,
      shares: 27,
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
      image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=400&h=600&fit=crop",
      likes: 331,
      comments: 118,
      shares: 45,
      timeAgo: "6h ago",
      isLiked: false
    },
    {
      id: 4,
      user: {
        name: "မေမေ",
        avatar: "🎵",
        isVerified: true,
        hobby: "Music"
      },
      content: "နောက်ဆုံး song cover လုပ်ပြီးပြီ။ ကြားကြည့်ပြီး comment ပေးကြပါနော် 🎤🎶",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop",
      likes: 89,
      comments: 34,
      shares: 12,
      timeAgo: "8h ago",
      isLiked: false
    }
  ]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

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

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (isDesktop) return;
    
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;
    const itemHeight = container.clientHeight;
    const newIndex = Math.round(scrollTop / itemHeight);
    
    if (newIndex !== currentPostIndex && newIndex >= 0 && newIndex < posts.length) {
      setCurrentPostIndex(newIndex);
    }
  };

  const goToPrevious = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    }
  };

  const PostComponent = ({ post, index }: { post: Post; index: number }) => (
    <div 
      className={`relative ${
        isDesktop 
          ? 'w-80 h-[600px] flex-shrink-0 mx-4' 
          : 'h-screen snap-start'
      } flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden`}
    >
      {/* Background Image */}
      {post.image && (
        <div className="absolute inset-0">
          <img 
            src={post.image}
            alt="Post content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
      )}
      
      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 text-white">
        {/* Top Section - User Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl border-2 border-white shadow-lg">
              {post.user.avatar}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-white font-semibold text-lg drop-shadow-lg">{post.user.name}</h3>
                {post.user.isVerified && <Badge className="bg-blue-500 text-white text-xs">✓</Badge>}
              </div>
              <Badge className="bg-white/20 text-white text-xs backdrop-blur-sm">{post.user.hobby}</Badge>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <MoreVertical className="h-5 w-5" />
          </Button>
        </div>

        {/* Bottom Section - Content & Actions */}
        <div className="space-y-4">
          {/* Post Text */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-4">
            <p className="text-white text-lg leading-relaxed drop-shadow-lg">{post.content}</p>
            <p className="text-white/80 text-sm mt-2">{post.timeAgo}</p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 ${post.isLiked ? 'text-red-400' : ''}`}
                onClick={() => toggleLike(post.id)}
              >
                <Heart className={`h-6 w-6 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                <span className="font-semibold">{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <MessageCircle className="h-6 w-6 mr-2" />
                <span className="font-semibold">{post.comments}</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Share2 className="h-6 w-6 mr-2" />
                <span className="font-semibold">{post.shares}</span>
              </Button>
            </div>
            <Button className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg">
              <UserPlus className="h-4 w-4 mr-2" />
              Follow
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <div className="fixed top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-lg border-b border-gray-100 px-4 py-3">
        <div className={`flex items-center justify-between ${isDesktop ? 'max-w-6xl' : 'max-w-md'} mx-auto`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
              <span className="text-white text-sm font-bold">1D</span>
            </div>
            <h1 className="text-gray-900 font-bold text-lg">1DaySocial</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200 shadow-sm">
              <Star className="h-3 w-3 mr-1" />
              {userPoints}
            </Badge>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-gray-900 hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stories Section */}
      <div className="fixed top-16 left-0 right-0 z-10 bg-white">
        <Stories />
      </div>

      {/* Feed Container */}
      {isDesktop ? (
        /* Desktop Swiper View */
        <div className="pt-32 pb-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="relative w-full max-w-6xl mx-auto px-8">
            {/* Navigation Buttons */}
            <Button
              onClick={goToPrevious}
              disabled={currentPostIndex === 0}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-lg disabled:opacity-50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              onClick={goToNext}
              disabled={currentPostIndex === posts.length - 1}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 rounded-full w-12 h-12 shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Posts Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentPostIndex * (320 + 32)}px)` }}
              >
                {posts.map((post, index) => (
                  <PostComponent key={post.id} post={post} index={index} />
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {posts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPostIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPostIndex 
                      ? 'bg-gradient-to-r from-pink-500 to-orange-500' 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Mobile Vertical Scroll View */
        <div 
          ref={containerRef}
          className="pt-32 pb-20 h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory"
          onScroll={handleScroll}
          style={{ scrollBehavior: 'smooth' }}
        >
          {posts.map((post, index) => (
            <PostComponent key={post.id} post={post} index={index} />
          ))}

          {/* Mobile Scroll Indicator */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
            {posts.map((_, idx) => (
              <div
                key={idx}
                className={`w-1 h-8 rounded-full transition-all duration-300 ${
                  idx === currentPostIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* 24-Hour System Reminder */}
      <div className={`fixed bottom-20 z-10 ${isDesktop ? 'left-8 right-8' : 'left-4 right-4'}`}>
        <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200 shadow-lg">
          <CardContent className="p-3">
            <div className="flex items-center space-x-2 text-orange-700">
              <Clock className="h-4 w-4" />
              <p className="text-xs font-medium">24-Hour Social System - All connections reset daily!</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default Feed;
