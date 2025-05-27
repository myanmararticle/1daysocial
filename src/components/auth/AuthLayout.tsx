
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageCircle, Users, Clock, Shield, Zap, Heart, Star, ArrowRight, Mail, Phone, HelpCircle } from "lucide-react";

const AuthLayout = ({ onAuthSuccess }: { onAuthSuccess: () => void }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Remember me:', rememberMe);
    onAuthSuccess();
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess();
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Here you would typically open a forgot password modal or redirect
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
      {/* Left Side - Enhanced Landing Content */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/5 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/15 rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-md text-center">
          {/* Brand Section */}
          <div className="mb-12 animate-fade-in">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-3xl flex items-center justify-center mx-auto mb-6 animate-scale-in shadow-2xl">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              1DaySocial
            </h1>
            <p className="text-xl text-blue-100 mb-6">Connect, Share, Inspire in 24 Hours</p>
            <p className="text-white/80 text-sm leading-relaxed">
              အသစ်သော လူမှုကွန်ယက် တစ်ခုတွင် ၂၄ နာရီကြာ အဓိပ္ပါယ်ရှိသော ဆက်သွယ်မှုများ ဖန်တီးပါ။ AI-powered matching နှင့် privacy-first approach ဖြင့် လုံခြုံပြီး တန်ဖိုးရှိသော လူမှုကွန်ယက် အတွေ့အကြုံကို ခံစားပါ။
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale group">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/30 transition-colors">
                <Clock className="h-6 w-6 text-yellow-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">24-Hour Connections</h3>
                <p className="text-white/80 text-sm">အဓိပ္పါယ်ရှိသော စကားဝိုင်းများ ပြုလုပ်ပါ</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale group">
              <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center group-hover:bg-green-400/30 transition-colors">
                <Users className="h-6 w-6 text-green-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">Smart AI Matching</h3>
                <p className="text-white/80 text-sm">ကိုက်ညီသော သူငယ်ချင်းများ ရှာဖွေပါ</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale group">
              <div className="w-12 h-12 bg-pink-400/20 rounded-lg flex items-center justify-center group-hover:bg-pink-400/30 transition-colors">
                <Shield className="h-6 w-6 text-pink-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">Privacy First</h3>
                <p className="text-white/80 text-sm">လုံခြုံမှု အမြင့်ဆုံး ကာကွယ်မှု</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover-scale group">
              <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center group-hover:bg-purple-400/30 transition-colors">
                <Zap className="h-6 w-6 text-purple-300" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-white">Instant Connect</h3>
                <p className="text-white/80 text-sm">မြန်ဆန်သော ချိတ်ဆက်မှု စနစ်</p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid grid-cols-3 gap-6 text-center animate-fade-in">
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl">
              <div className="text-3xl font-bold text-white">50K+</div>
              <div className="text-white/80 text-sm">Active Users</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl">
              <div className="text-3xl font-bold text-white">24hrs</div>
              <div className="text-white/80 text-sm">Connection Time</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-lg rounded-xl">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-white/80 text-sm">Uptime</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8 p-6 bg-white/10 backdrop-blur-lg rounded-xl animate-fade-in">
            <div className="flex items-center justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-white/90 text-sm italic mb-3">
              "1DaySocial ကတစ်ဆင့် တကယ့် သူငယ်ချင်းများနှင့် ကျွန်တော်တွေ့ခဲ့ပါတယ်။"
            </p>
            <p className="text-white/70 text-xs">— Thant Zin, Yangon</p>
          </div>
        </div>
      </div>

      {/* Right Side - Enhanced Auth Forms */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="lg:hidden text-center mb-8 animate-fade-in">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              1DaySocial
            </h1>
            <p className="text-gray-600">၂၄ နာရီ ဆက်သွယ်မှု</p>
          </div>

          <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-2xl animate-scale-in">
            <CardHeader className="space-y-1 pb-6">
              <CardTitle className="text-2xl text-center text-gray-800">Welcome Back</CardTitle>
              <CardDescription className="text-center text-gray-600">
                သင့်အကောင့်သို့ ဝင်ရောက်ပါ သို့မဟုတ် အသစ်ဖန်တီးပါ
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-gray-100/50 p-1 rounded-xl">
                  <TabsTrigger 
                    value="login" 
                    className="text-gray-600 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 rounded-lg transition-all duration-300"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="signup" 
                    className="text-gray-600 data-[state=active]:text-white data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-600 rounded-lg transition-all duration-300"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-6 mt-6">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="အီးမေးလ် လိပ်စာ"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="စကားဝှက်"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    
                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="remember" 
                          checked={rememberMe}
                          onCheckedChange={setRememberMe}
                          className="border-gray-300"
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        စကားဝှက် မေ့နေသလား?
                      </button>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 h-12 rounded-xl text-white font-medium transition-all duration-300 hover-scale"
                    >
                      Sign In
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="signup" className="space-y-6 mt-6">
                  <form onSubmit={handleSignup} className="space-y-4">
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="အမည် အပြည့်အစုံ"
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="email"
                        placeholder="အီးမေးလ် လိပ်စာ"
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="စကားဝှက်"
                        value={signupForm.password}
                        onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Input
                        type="password"
                        placeholder="စကားဝှက် အတည်ပြုပါ"
                        value={signupForm.confirmPassword}
                        onChange={(e) => setSignupForm({...signupForm, confirmPassword: e.target.value})}
                        className="bg-white/70 border-gray-200 focus:border-blue-500 focus:ring-blue-500 h-12 rounded-xl transition-all duration-300"
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 h-12 rounded-xl text-white font-medium transition-all duration-300 hover-scale"
                    >
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Support Links Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-600 mb-4">အကူအညီ လိုအပ်ပါသလား?</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <span className="text-xs text-gray-600">Email</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="text-xs text-gray-600">Phone</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 group cursor-pointer">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <HelpCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <span className="text-xs text-gray-600">Help</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">
                    By signing up, you agree to our{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">Terms</span>
                    {' '}and{' '}
                    <span className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</span>
                  </p>
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
