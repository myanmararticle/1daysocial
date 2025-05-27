
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";

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

interface PostCardProps {
  post: Post;
  onToggleLike: () => void;
}

const PostCard: React.FC<PostCardProps> = ({ post, onToggleLike }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-xl overflow-hidden">
      <CardContent className="p-0">
        {/* Post Header */}
        <div className="flex items-center justify-between p-4 pb-2">
          <div className="flex items-center space-x-3">
            <Avatar className="w-12 h-12">
              <AvatarImage src={post.user.avatar} />
              <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">
                {post.user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="text-white font-semibold text-sm">{post.user.name}</h3>
                {post.user.isVerified && (
                  <Badge className="bg-blue-500 text-white text-xs px-1 py-0">✓</Badge>
                )}
              </div>
              <p className="text-white/60 text-xs">{post.user.username}</p>
              <div className="flex items-center space-x-1 text-white/50 text-xs">
                <span>{post.timeAgo}</span>
                {post.location && (
                  <>
                    <span>•</span>
                    <span>{post.location}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        {/* Post Content */}
        <div className="px-4 pb-3">
          <p className="text-white text-sm leading-relaxed">{post.content}</p>
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="relative">
            <img 
              src={post.image} 
              alt="Post content" 
              className="w-full h-64 object-cover"
            />
          </div>
        )}

        {/* Post Actions */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onToggleLike}
                className={`text-white/60 hover:text-white hover:bg-white/10 rounded-full ${
                  post.isLiked ? 'text-red-500 hover:text-red-400' : ''
                }`}
              >
                <Heart className={`h-5 w-5 mr-2 ${post.isLiked ? 'fill-current' : ''}`} />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
                <MessageCircle className="h-5 w-5 mr-2" />
                {post.comments}
              </Button>
              <Button variant="ghost" size="sm" className="text-white/60 hover:text-white hover:bg-white/10 rounded-full">
                <Share2 className="h-5 w-5 mr-2" />
                {post.shares}
              </Button>
            </div>
          </div>

          {/* Like Count */}
          {post.likes > 0 && (
            <div className="mt-2">
              <p className="text-white text-sm">
                <span className="font-semibold">{post.likes} likes</span>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCard;
