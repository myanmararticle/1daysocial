
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
    { id: 1, user: { name: "မင်းမင်း", avatar: "🎮" }, isViewed: false },
    { id: 2, user: { name: "သူဇာ", avatar: "🎬" }, isViewed: true },
    { id: 3, user: { name: "အောင်အောင်", avatar: "⚽" }, isViewed: false },
    { id: 4, user: { name: "မေမေ", avatar: "🎵" }, isViewed: true },
    { id: 5, user: { name: "ကိုကို", avatar: "📚" }, isViewed: false },
  ];

  return (
    <div className="p-4 border-b border-gray-200 bg-white/60">
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {stories.map((story) => (
          <div key={story.id} className="flex-shrink-0 text-center">
            <div className={`relative p-1 rounded-full ${
              story.isOwn 
                ? 'bg-gradient-to-r from-purple-500 to-pink-500' 
                : story.isViewed 
                  ? 'bg-gradient-to-r from-gray-300 to-gray-400' 
                  : 'bg-gradient-to-r from-purple-500 to-pink-500'
            }`}>
              <Avatar className="w-16 h-16 border-2 border-white">
                {story.isOwn ? (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-full">
                    <Plus className="h-6 w-6 text-gray-600" />
                  </div>
                ) : (
                  <>
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-full text-2xl">
                      {story.user.avatar}
                    </div>
                  </>
                )}
              </Avatar>
              {story.isOwn && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <Plus className="h-3 w-3 text-white" />
                </div>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-2 max-w-[64px] truncate">
              {story.user.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
