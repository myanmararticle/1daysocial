
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus } from "lucide-react";

interface Story {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  isViewed: boolean;
  isOwn?: boolean;
}

const Stories = () => {
  const stories: Story[] = [
    { id: 0, user: { name: "Your Story", avatar: "" }, isViewed: false, isOwn: true },
    { id: 1, user: { name: "မင်းမင်း", avatar: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face" }, isViewed: false },
    { id: 2, user: { name: "သူဇာ", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face" }, isViewed: true },
    { id: 3, user: { name: "အောင်အောင်", avatar: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop&crop=face" }, isViewed: false },
    { id: 4, user: { name: "မေမေ", avatar: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=100&h=100&fit=crop&crop=face" }, isViewed: true },
    { id: 5, user: { name: "ကိုကို", avatar: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=100&h=100&fit=crop&crop=face" }, isViewed: false },
  ];

  return (
    <div className="p-4 border-b border-white/10">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div className={`relative p-1 rounded-full ${
              story.isOwn 
                ? 'bg-gradient-to-r from-gray-400 to-gray-600' 
                : story.isViewed 
                  ? 'bg-gradient-to-r from-gray-400 to-gray-600' 
                  : 'bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500'
            }`}>
              <Avatar className="w-16 h-16 border-2 border-white">
                {story.isOwn ? (
                  <div className="w-full h-full bg-white/20 backdrop-blur-lg flex items-center justify-center rounded-full">
                    <Plus className="h-6 w-6 text-white" />
                  </div>
                ) : (
                  <>
                    <AvatarImage src={story.user.avatar} />
                    <AvatarFallback className="bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm">
                      {story.user.name.charAt(0)}
                    </AvatarFallback>
                  </>
                )}
              </Avatar>
              {story.isOwn && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Plus className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <p className="text-xs text-white/80 mt-2 max-w-[64px] truncate">
              {story.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
