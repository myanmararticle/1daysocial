
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Points from "./pages/Points";
import Matches from "./pages/Matches";
import Groups from "./pages/Groups";
import Games from "./pages/Games";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Feed from "./pages/Feed";
import Discover from "./pages/Discover";
import CreatePost from "./pages/CreatePost";
import Notifications from "./pages/Notifications";
import UserProfile from "./pages/UserProfile";
import ChatList from "./pages/ChatList";
import ChatPage from "./pages/ChatPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="light"> {/* Force light theme */}
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/create" element={<CreatePost />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/profile" element={<UserProfile />} />
              <Route path="/chat" element={<ChatList />} />
              <Route path="/chat/:userId" element={<ChatPage />} />
              <Route path="/auth" element={<Index />} />
              <Route path="/points" element={<Points />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/games" element={<Games />} />
              <Route path="/legacy-profile" element={<Profile />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
