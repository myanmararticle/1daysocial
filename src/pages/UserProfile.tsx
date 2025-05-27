
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Settings, 
  MoreVertical, 
  MapPin, 
  Calendar,
  Link as LinkIcon,
  Users,
  Heart,
  MessageCircle,
  Share2
} from "lucide-react";
import BottomNavigation from '@/components/BottomNavigation';

interface UserPost {
  id: number;
  image: string;
  likes: number;
  comments: number;
}

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);

  const userPosts: UserPost[] = [
    { id: 1, image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop", likes: 24, comments: 8 },
    { id: 2, image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop", likes: 15, comments: 12 },
    { id: 3, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop", likes: 31, comments: 18 },
    { id: 4, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=300&fit=crop", likes: 45, comments: 22 },
    { id: 5, image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=300&fit=crop", likes: 28, comments: 15 },
    { id: 6, image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop", likes: 67, comments: 33 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-white font-bold text-xl">Profile</h1>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pb-20">
        {/* Profile Header */}
        <div className="relative">
          {/* Cover Photo */}
          <div className="h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"></div>
          
          {/* Profile Info */}
          <div className="px-4 pb-4">
            <div className="flex items-end justify-between -mt-16 mb-4">
              <Avatar className="w-32 h-32 border-4 border-white shadow-xl">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=200&fit=crop&crop=face" />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-2xl">You</AvatarFallback>
              </Avatar>
              <Button
                onClick={() => setIsFollowing(!isFollowing)}
                className={
                  isFollowing 
                    ? "bg-white/20 text-white hover:bg-white/30 rounded-full"
                    : "bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white rounded-full"
                }
              >
                {isFollowing ? 'Following' : 'Follow'}
              </Button>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h2 className="text-white font-bold text-2xl">Your Name</h2>
                  <Badge className="bg-blue-500 text-white">✓</Badge>
                </div>
                <p className="text-white/80">@your_username</p>
              </div>

              <p className="text-white text-sm leading-relaxed">
                Passionate photographer 📸 | Coffee lover ☕ | Exploring life one adventure at a time 🌟 | Sharing moments that matter ✨
              </p>

              <div className="flex items-center space-x-4 text-white/60 text-sm">
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>Yangon, Myanmar</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined March 2023</span>
                </div>
                <div className="flex items-center space-x-1">
                  <LinkIcon className="h-4 w-4" />
                  <span className="text-blue-400">yourwebsite.com</span>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-white">
                <div className="text-center">
                  <div className="font-bold text-lg">1,234</div>
                  <div className="text-white/60 text-sm">Following</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">5,678</div>
                  <div className="text-white/60 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg">234</div>
                  <div className="text-white/60 text-sm">Posts</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="px-4">
          <TabsList className="w-full bg-white/10 backdrop-blur-lg border-white/20">
            <TabsTrigger value="posts" className="flex-1 text-white data-[state=active]:bg-white/20">
              Posts
            </TabsTrigger>
            <TabsTrigger value="media" className="flex-1 text-white data-[state=active]:bg-white/20">
              Media
            </TabsTrigger>
            <TabsTrigger value="likes" className="flex-1 text-white data-[state=active]:bg-white/20">
              Likes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              {userPosts.map((post) => (
                <div key={post.id} className="relative aspect-square group">
                  <img 
                    src={post.image} 
                    alt="Post" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="media" className="mt-4">
            <div className="grid grid-cols-2 gap-1">
              {userPosts.slice(0, 4).map((post) => (
                <div key={post.id} className="relative aspect-square">
                  <img 
                    src={post.image} 
                    alt="Media" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="likes" className="mt-4">
            <div className="grid grid-cols-3 gap-1">
              {userPosts.slice(0, 3).map((post) => (
                <div key={post.id} className="relative aspect-square">
                  <img 
                    src={post.image} 
                    alt="Liked post" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Heart className="h-4 w-4 text-red-500 fill-current" />
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default UserProfile;
