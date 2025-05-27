
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Shield, 
  Users,
  MessageCircle,
  Flag,
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  Crown,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";

const Admin = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<'dashboard' | 'users' | 'categories' | 'reports' | 'settings'>('dashboard');
  const [newCategory, setNewCategory] = useState('');

  const dashboardStats = [
    { label: 'Total Users', value: '1,247', icon: Users, color: 'blue' },
    { label: 'Active Chats', value: '89', icon: MessageCircle, color: 'green' },
    { label: 'Reports', value: '12', icon: Flag, color: 'red' },
    { label: 'Categories', value: '8', icon: Settings, color: 'purple' }
  ];

  const hobbieCategories = [
    { id: 1, name: 'Gaming', users: 345, active: true },
    { id: 2, name: 'Music', users: 289, active: true },
    { id: 3, name: 'Movies', users: 234, active: true },
    { id: 4, name: 'Reading', users: 167, active: true },
    { id: 5, name: 'Sports', users: 198, active: false },
    { id: 6, name: 'Travel', users: 156, active: true },
    { id: 7, name: 'Photography', users: 134, active: true },
    { id: 8, name: 'Cooking', users: 123, active: true }
  ];

  const recentUsers = [
    { id: 1, name: 'မင်းမင်း', email: 'min@email.com', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'သူဇာ', email: 'thuzar@email.com', status: 'active', joinDate: '2024-01-14' },
    { id: 3, name: 'အောင်အောင်', email: 'aung@email.com', status: 'suspended', joinDate: '2024-01-13' },
    { id: 4, name: 'မာမာ', email: 'mama@email.com', status: 'active', joinDate: '2024-01-12' }
  ];

  const reports = [
    { id: 1, reporter: 'မင်းမင်း', reported: 'သူဇာ', reason: 'Inappropriate content', status: 'pending', date: '2024-01-15' },
    { id: 2, reporter: 'အောင်အောင်', reported: 'မာမာ', reason: 'Spam messages', status: 'resolved', date: '2024-01-14' },
    { id: 3, reporter: 'သူဇာ', reported: 'မင်းမင်း', reason: 'Harassment', status: 'investigating', date: '2024-01-13' }
  ];

  const addCategory = () => {
    if (newCategory.trim()) {
      toast({
        title: "Category ထည့်သွင်းပြီး! ✅",
        description: `${newCategory} category ကို အောင်မြင်စွာ ထည့်သွင်းပြီးပါပြီး`,
      });
      setNewCategory('');
    }
  };

  const toggleCategoryStatus = (id: number) => {
    toast({
      title: "Category status ပြောင်းလဲပြီး",
      description: "Category၏ status ကို အောင်မြင်စွာ ပြောင်းလဲပြီးပါပြီး",
    });
  };

  const suspendUser = (name: string) => {
    toast({
      title: "User suspended",
      description: `${name} ကို ယာယီ ပိတ်ပင်ပြီးပါပြီး`,
    });
  };

  const resolveReport = (id: number) => {
    toast({
      title: "Report resolved",
      description: "Report ကို အောင်မြင်စွာ ဖြေရှင်းပြီးပါပြီး",
    });
  };

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
          <div className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-purple-500" />
            <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          </div>
          <Crown className="h-6 w-6 text-yellow-500" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg overflow-x-auto">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            { id: 'users', label: 'Users', icon: Users },
            { id: 'categories', label: 'Categories', icon: Settings },
            { id: 'reports', label: 'Reports', icon: Flag },
            { id: 'settings', label: 'Settings', icon: Settings }
          ].map(tab => (
            <Button
              key={tab.id}
              variant={selectedTab === tab.id ? 'default' : 'ghost'}
              className={`flex-1 min-w-fit ${selectedTab === tab.id ? 'bg-purple-500 text-white' : 'text-slate-400'}`}
              onClick={() => setSelectedTab(tab.id as any)}
            >
              <tab.icon className="h-4 w-4 mr-1" />
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {selectedTab === 'dashboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Dashboard</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {dashboardStats.map((stat, index) => (
                <Card key={index} className={`bg-gradient-to-r from-${stat.color}-500/10 to-${stat.color}-600/10 border-${stat.color}-500/20`}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${stat.color}-500/20 rounded-lg`}>
                        <stat.icon className={`h-6 w-6 text-${stat.color}-400`} />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">{stat.value}</p>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-white">New user မင်းမင်း joined</span>
                    <span className="text-slate-400 text-sm">2 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-white">Report submitted for inappropriate content</span>
                    <span className="text-slate-400 text-sm">4 hours ago</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <span className="text-white">Gaming category reached 345 users</span>
                    <span className="text-slate-400 text-sm">6 hours ago</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {selectedTab === 'users' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">User Management</h2>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
                <Plus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Recent Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUsers.map(user => (
                    <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center">
                          👤
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{user.name}</h3>
                          <p className="text-slate-400 text-sm">{user.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={`${
                          user.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {user.status}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button size="sm" variant="outline" className="border-slate-600 text-slate-400">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-600 text-red-400 hover:bg-red-500/20"
                            onClick={() => suspendUser(user.name)}
                          >
                            <AlertTriangle className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Categories Tab */}
        {selectedTab === 'categories' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Hobby Categories</h2>

            {/* Add New Category */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Add New Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Category အမည်ရိုက်ထည့်ပါ..."
                    className="bg-slate-700/50 border-slate-600 text-white"
                  />
                  <Button 
                    onClick={addCategory}
                    className="bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Categories List */}
            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Existing Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {hobbieCategories.map(category => (
                    <div key={category.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                          🏷️
                        </div>
                        <div>
                          <h3 className="text-white font-medium">{category.name}</h3>
                          <p className="text-slate-400 text-sm">{category.users} users</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge className={`${
                          category.active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                        }`}>
                          {category.active ? 'Active' : 'Inactive'}
                        </Badge>
                        <div className="flex space-x-1">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-slate-600 text-slate-400"
                            onClick={() => toggleCategoryStatus(category.id)}
                          >
                            {category.active ? 'Disable' : 'Enable'}
                          </Button>
                          <Button size="sm" variant="outline" className="border-slate-600 text-slate-400">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-600 text-red-400">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reports Tab */}
        {selectedTab === 'reports' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">User Reports</h2>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">Pending Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {reports.map(report => (
                    <div key={report.id} className="p-4 bg-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="text-white font-medium">
                            {report.reporter} reported {report.reported}
                          </h3>
                          <p className="text-slate-400 text-sm">{report.reason}</p>
                        </div>
                        <Badge className={`${
                          report.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          report.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {report.status}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500 text-sm">{report.date}</span>
                        {report.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-green-500 hover:bg-green-600"
                              onClick={() => resolveReport(report.id)}
                            >
                              Resolve
                            </Button>
                            <Button size="sm" variant="outline" className="border-slate-600 text-slate-400">
                              Investigate
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Settings Tab */}
        {selectedTab === 'settings' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">System Settings</h2>

            <Card className="bg-slate-800/50 border-slate-700/50">
              <CardHeader>
                <CardTitle className="text-white">App Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-white">Chat Duration (hours)</Label>
                    <Input 
                      defaultValue="24" 
                      className="bg-slate-700/50 border-slate-600 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Points per Chat</Label>
                    <Input 
                      defaultValue="5" 
                      className="bg-slate-700/50 border-slate-600 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Ad Reward Points</Label>
                    <Input 
                      defaultValue="10" 
                      className="bg-slate-700/50 border-slate-600 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label className="text-white">Game Win Points</Label>
                    <Input 
                      defaultValue="15" 
                      className="bg-slate-700/50 border-slate-600 text-white mt-1"
                    />
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500">
                  Save Settings
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
