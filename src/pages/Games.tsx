import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Play, 
  Trophy,
  Star,
  Clock,
  Users,
  Gamepad2,
  Target,
  Zap
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Games = () => {
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [currentWord, setCurrentWord] = useState('');
  const [guess, setGuess] = useState('');
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(false);

  const games = [
    {
      id: 'word-guess',
      name: 'Guess the Word',
      description: 'စကားလုံးများကို ခန့်မှန်းကြည့်ပါ',
      icon: '🔤',
      points: 15,
      players: 'Single Player',
      difficulty: 'လွယ်ကူ'
    },
    {
      id: 'emoji-puzzle',
      name: 'Emoji Puzzle',
      description: 'Emoji များကို ကြည့်ပြီး စကားလုံးခန့်မှန်းခြင်း',
      icon: '😊',
      points: 20,
      players: 'Single Player',
      difficulty: 'အလယ်အလတ်'
    },
    {
      id: 'quick-math',
      name: 'Quick Math',
      description: 'မြန်ဆန်သော သင်္ချာဂိမ်း',
      icon: '🔢',
      points: 10,
      players: 'Single Player',
      difficulty: 'လွယ်ကူ'
    },
    {
      id: 'group-trivia',
      name: 'Group Trivia',
      description: 'အုပ်စုလိုက် မေးခွန်းဖြေဂိမ်း',
      icon: '🧠',
      points: 25,
      players: 'Group',
      difficulty: 'ခက်ခဲ'
    }
  ];

  const wordList = [
    { word: 'COMPUTER', hint: 'နည်းပညာပစ္စည်း' },
    { word: 'MUSIC', hint: 'နားထောင်ရသောအရာ' },
    { word: 'FLOWER', hint: 'လှပသောအပင်' },
    { word: 'MOUNTAIN', hint: 'မြင့်မားသောနေရာ' }
  ];

  const startWordGame = () => {
    setGameActive(true);
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    setCurrentWord(randomWord.word);
    setGuess('');
    toast({
      title: "ဂိမ်းစတင်ပြီး! 🎮",
      description: `Hint: ${wordList.find(w => w.word === randomWord.word)?.hint}`,
    });
  };

  const submitGuess = () => {
    if (guess.toUpperCase() === currentWord) {
      setScore(prev => prev + 15);
      toast({
        title: "မှန်ပါတယ်! 🎉",
        description: "15 points ရရှိပါပြီး",
      });
      setGameActive(false);
      setGuess('');
    } else {
      toast({
        title: "မမှန်ပါ 😅",
        description: "ထပ်စမ်းကြည့်ပါ",
      });
    }
  };

  const leaderboard = [
    { name: 'မင်းမင်း', score: 450, avatar: '🎮' },
    { name: 'သူဇာ', score: 380, avatar: '🎬' },
    { name: 'အောင်အောင်', score: 320, avatar: '⚽' },
    { name: 'သင်', score: score, avatar: '🎯' }
  ].sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-800/90 backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
            className="text-slate-400 hover:text-white"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Mini Games</h1>
          <div className="flex items-center space-x-2">
            <Trophy className="h-5 w-5 text-yellow-500" />
            <span className="text-yellow-500 font-bold">{score}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Game Selection */}
        {!selectedGame && (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">ဂိမ်းများ ရွေးချယ်ပါ</h2>
              
              <div className="grid gap-4">
                {games.map(game => (
                  <Card key={game.id} className="bg-slate-800/50 border-slate-700/50 cursor-pointer hover:bg-slate-700/50 transition-all"
                        onClick={() => setSelectedGame(game.id)}>
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-slate-600 rounded-xl flex items-center justify-center text-2xl">
                          {game.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-white font-bold text-lg">{game.name}</h3>
                          <p className="text-slate-400 text-sm mb-2">{game.description}</p>
                          
                          <div className="flex items-center space-x-4 text-xs">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                              +{game.points} Points
                            </Badge>
                            <div className="flex items-center space-x-1 text-slate-500">
                              <Users className="h-3 w-3" />
                              <span>{game.players}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-slate-500">
                              <Star className="h-3 w-3" />
                              <span>{game.difficulty}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                          <Play className="h-4 w-4 mr-1" />
                          ကစား
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Leaderboard */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  <span>Leaderboard</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((player, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index === 0 ? 'bg-yellow-500 text-black' :
                          index === 1 ? 'bg-gray-400 text-black' :
                          index === 2 ? 'bg-amber-600 text-white' :
                          'bg-slate-600 text-white'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                          {player.avatar}
                        </div>
                        <span className="text-white font-medium">{player.name}</span>
                      </div>
                      <div className="text-yellow-500 font-bold">{player.score}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Word Guess Game */}
        {selectedGame === 'word-guess' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedGame(null)}
                className="text-slate-400 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                နောက်သို့
              </Button>
              <h2 className="text-xl font-bold text-white">Guess the Word</h2>
              <div className="text-yellow-500 font-bold">Score: {score}</div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white text-center">စကားလုံးခန့်မှန်းခြင်း</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {!gameActive ? (
                  <div className="text-center">
                    <p className="text-slate-400 mb-4">ဂိမ်းစတင်ရန် အောက်ပါခလုတ်ကို နှိပ်ပါ</p>
                    <Button 
                      onClick={startWordGame}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Play className="h-4 w-4 mr-2" />
                      ဂိမ်းစတင်
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white mb-2">
                        {currentWord.split('').map((_, index) => '_ ').join('')}
                      </div>
                      <p className="text-slate-400">စာလုံး {currentWord.length} လုံး</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Input
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder="စကားလုံးရိုက်ထည့်ပါ..."
                        className="bg-slate-700/50 border-slate-600 text-white"
                        onKeyPress={(e) => e.key === 'Enter' && submitGuess()}
                      />
                      <Button 
                        onClick={submitGuess}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                      >
                        <Target className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Game Stats */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-blue-500/20">
                <CardContent className="p-4 text-center">
                  <Zap className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-blue-400 font-bold text-xl">{score}</p>
                  <p className="text-slate-400 text-sm">လက်ရှိ Score</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-green-500/20">
                <CardContent className="p-4 text-center">
                  <Trophy className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-green-400 font-bold text-xl">15</p>
                  <p className="text-slate-400 text-sm">Points/Win</p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Other Games */}
        {selectedGame && selectedGame !== 'word-guess' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={() => setSelectedGame(null)}
                className="text-slate-400 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                နောက်သို့
              </Button>
              <h2 className="text-xl font-bold text-white">
                {games.find(g => g.id === selectedGame)?.name}
              </h2>
            </div>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🚧</div>
                <h3 className="text-white font-bold text-xl mb-2">Coming Soon!</h3>
                <p className="text-slate-400">ဤဂိမ်းကို မကြာမီ ထည့်သွင်းပါမည်</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
