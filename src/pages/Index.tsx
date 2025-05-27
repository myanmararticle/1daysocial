
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Gift, Star, MessageCircle, Gamepad2 } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "24-Hour Messaging",
      description: "စကားပြောမှတ်တမ်းများ 24 နာရီပြည့်ပါက အလိုအလျောက် ဖျက်သိမ်းပါမည်",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Gift,
      title: "Point System",
      description: "ကြော်ငြာကြည့်ခြင်း သို့မဟုတ် mini-games ဖြင့် points များရယူပါ",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "ဝါသနာနှင့် ရည်မှန်းချက်တူသူများကို AI algorithm ဖြင့် ချိတ်ဆက်ပေးပါမည်",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: Gamepad2,
      title: "Mini Games",
      description: "စကားပြောရင်းဆက် mini-games များကစားနိုင်ပါသည်",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const hobbies = [
    "🎵 Music", "🎮 Gaming", "📚 Reading", "🏃‍♀️ Fitness", 
    "🎨 Art", "🍳 Cooking", "✈️ Travel", "📷 Photography",
    "💻 Technology", "🌱 Gardening", "🎬 Movies", "⚽ Sports"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="p-4 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            <h1 className="text-2xl font-bold text-white">1DaySocial</h1>
          </div>
          <div className="flex space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Connect for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> 24 Hours</span>
            </h2>
            <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
              ဝါသနာတူသူများနှင့် ယာယီစကားပြောဆိုမှုများ၊ Points များရယူပြီး ထူးခြားသော ဆက်သွယ်မှုအတွေ့အကြုံကို ခံစားပါ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Chatting
              </Button>
              <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            Unique Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-200 text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-12">
            Find Your Tribe
          </h3>
          <div className="text-center mb-8">
            <p className="text-xl text-purple-200 max-w-2xl mx-auto">
              သင့်ဝါသနာနှင့်လိုက်ဖက်သော လူများကို ရှာဖွေပြီး ချိတ်ဆက်ပါ
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white text-lg px-6 py-3 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {hobby}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                10K+
              </div>
              <div className="text-purple-200">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                1M+
              </div>
              <div className="text-purple-200">Messages Sent</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text">
                50K+
              </div>
              <div className="text-purple-200">Connections Made</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text">
                24/7
              </div>
              <div className="text-purple-200">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border-purple-400/30">
            <CardHeader className="space-y-6">
              <CardTitle className="text-4xl font-bold text-white">
                Ready to Connect?
              </CardTitle>
              <CardDescription className="text-xl text-purple-200">
                24 နာရီ ကြာမြင့်သော ထူးခြားသည့် social experience ကို စတင်ပါ
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6">
                  <Star className="mr-2 h-5 w-5" />
                  Get Started Now
                </Button>
                <Button size="lg" variant="outline" className="border-purple-400 text-purple-300 hover:bg-purple-500/20 text-lg px-8 py-6">
                  Download App
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-lg border-t border-white/10 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-white">1DaySocial</h3>
              </div>
              <p className="text-purple-200">
                Connect, Chat, Disappear. Repeat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-2 text-purple-200">
                <li>24-Hour Chat</li>
                <li>Point System</li>
                <li>Smart Matching</li>
                <li>Mini Games</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-purple-200">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-purple-200">
            <p>&copy; 2024 1DaySocial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
