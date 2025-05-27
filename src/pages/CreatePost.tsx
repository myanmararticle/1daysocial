
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Camera, MapPin, Users, Smile, ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [postContent, setPostContent] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = () => {
    if (postContent.trim()) {
      // Add post logic here
      console.log('Posting:', postContent);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-black/20 backdrop-blur-xl border-b border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-white font-bold text-xl">Create Post</h1>
          </div>
          <Button
            onClick={handlePost}
            disabled={!postContent.trim()}
            className="bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white rounded-full px-6"
          >
            Post
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="p-4">
            {/* User Info */}
            <div className="flex items-center space-x-3 mb-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" />
                <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white">You</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-white font-semibold">Your Name</h3>
                <p className="text-white/60 text-sm">@your_username</p>
              </div>
            </div>

            {/* Post Content */}
            <Textarea
              placeholder="What's happening?"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              className="bg-transparent border-none text-white placeholder:text-white/60 text-lg resize-none focus:ring-0 p-0 min-h-[150px]"
            />

            {/* Selected Image Preview */}
            {selectedImage && (
              <div className="mt-4 relative">
                <img 
                  src={selectedImage} 
                  alt="Selected" 
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70 rounded-full"
                >
                  ×
                </Button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/20">
              <div className="flex items-center space-x-4">
                <label htmlFor="image-upload">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                    asChild
                  >
                    <span>
                      <Camera className="h-5 w-5" />
                    </span>
                  </Button>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <MapPin className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <Users className="h-5 w-5" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white/60 hover:text-white hover:bg-white/10 rounded-full"
                >
                  <Smile className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="text-white/60 text-sm">
                {postContent.length}/280
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePost;
