
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageCircle, Users, Clock, Gift, Eye, EyeOff, Heart, Shield, Zap } from "lucide-react";

const AuthLayout = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex">
      {/* Left Side - Landing Content */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/20 rounded-full animate-ping"></div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-lg rounded-2xl flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">1DaySocial</h1>
            <p className="text-xl text-white/90 mb-8">Connect, Share, Inspire in 24 Hours</p>
          </div>

          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">24-Hour Connections</h3>
                <p className="text-white/80 text-sm">Meaningful conversations that matter</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Smart Matching</h3>
                <p className="text-white/80 text-sm">AI-powered friend suggestions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale">
              <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-pink-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Safe & Secure</h3>
                <p className="text-white/80 text-sm">Privacy-first social networking</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 text-center animate-fade-in">
            <div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-white/80 text-sm">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24hrs</div>
              <div className="text-white/80 text-sm">Connection Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold">99%</div>
              <div className="text-white/80 text-sm">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">1DaySocial</h1>
            <p className="text-gray-600">Connect for 24 hours</p>
          </div>

          <Card className="bg-white/70 backdrop-blur-lg border-0 shadow-xl animate-scale-in">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl text-center text-gray-800">Welcome Back</CardTitle>
              <CardDescription className="text-center text-gray-600">
                Sign in to your account or create a new one
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100/50 p-1 rounded-xl">
                  <TabsTrigger 
                    value="login" 
                    className="text-gray-600 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 rounded-lg transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="text-gray-600 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 rounded-lg transition-all duration-300"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-6 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2 relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl pr-12 transition-all duration-300"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 h-12 rounded-xl text-white font-medium transition-all duration-300 hover-scale"
                    >
                      Sign In
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-6 mt-6">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Full Name"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="Email address"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Password"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="Confirm Password"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                        className="bg-white/50 border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 h-12 rounded-xl text-white font-medium transition-all duration-300 hover-scale"
                    >
                      Create Account
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                      <Shield className="h-5 w-5 text-indigo-600" />
                    </div>
                    <span className="text-xs text-gray-600">Secure</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Zap className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-xs text-gray-600">Fast</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center group-hover:bg-pink-200 transition-colors">
                      <Gift className="h-5 w-5 text-pink-600" />
                    </div>
                    <span className="text-xs text-gray-600">Free</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
