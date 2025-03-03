'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, CloudCog, LayoutGrid } from "lucide-react";

interface CampaignData {
  id: string;
  title: string;
  status: string;
  details: string;
  platform?: string;
   points?: string;
  progress?: string;
  type?: string;
}

export default function ChvuPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("in-progress");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/chvu/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '로그인 실패');
      }
      
      const data = await response.json();

      setCampaigns(data.campaigns);
      
      // Store campaigns in localStorage
      data.campaigns.forEach((campaign: any) => {
        localStorage.setItem(`chvu_campaign_${campaign.id}`, JSON.stringify(campaign));
      });
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };


  // Add useEffect to load campaigns from localStorage on component mount
  useEffect(() => {
    const storedCampaigns: CampaignData[] = [];
    // Check all localStorage keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      // If the key matches our campaign pattern
      if (key && key.startsWith('chvu_campaign_')) {
        try {
          const campaignData = JSON.parse(localStorage.getItem(key) || '');
          if (campaignData) {
            storedCampaigns.push(campaignData);
          }
        } catch (error) {
          console.error('Error parsing campaign data from localStorage:', error);
        }
      }
    }
    
    // Update campaigns state if we found stored campaigns
    if (storedCampaigns.length > 0) {
      setCampaigns(storedCampaigns);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto py-6">
        <h1 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          체험뷰 대시보드
        </h1>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Login Section */}
        {campaigns.length === 0 && (
          <Card className="bg-gray-900 border-gray-800 mb-8">
            <CardHeader>
              <CardTitle className="text-center">체험뷰 로그인</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="userId" className="text-sm">아이디</label>
                    <Input
                      id="userId"
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="체험뷰 아이디 입력"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm">비밀번호</label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호 입력"
                      className="bg-gray-800 border-gray-700"
                      required
                    />
                  </div>
                  
                  {error && (
                    <div className="text-red-400 text-sm py-2">
                      {error}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    disabled={isLoading}
                  >
                    {isLoading ? "로그인 중..." : "로그인"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Campaign Dashboard */}
        {campaigns.length > 0 && (
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LayoutGrid className="h-5 w-5" />내 캠페인
              </CardTitle>
              <CardDescription className="text-gray-400">현재 진행 중인 체험단 캠페인 목록입니다</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="in-progress" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-gray-800">
                  <TabsTrigger
                    value="in-progress"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500"
                  >
                    체험중
                  </TabsTrigger>
                  <TabsTrigger value="completed">완료됨</TabsTrigger>
                  <TabsTrigger value="all">전체</TabsTrigger>
                </TabsList>
                <TabsContent value="in-progress" className="mt-4">
                  <div className="grid gap-4">
                    {campaigns.map((campaign) => (
                      <div key={campaign.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <Badge variant="outline" className="mb-2 bg-blue-500/10 text-blue-400 border-blue-500/20">
                              {campaign.platform || "Blog"}
                            </Badge>
                            <h3 className="font-medium text-lg">{campaign.title}</h3>
                          </div>
                          <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">{campaign.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">진행률:</span>
                            <span className="font-medium">{campaign.progress || "0/0"}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-400">포인트:</span>
                            <span className="font-medium">{campaign.points || "0P"}</span>
                          </div>
                        </div>

                        {campaign.progress && (
                          <div className="mt-3">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>진행도</span>
                              <span>
                                {campaign.progress.split("/")[0]}/{campaign.progress.split("/")[1]}
                              </span>
                            </div>
                            <Progress
                              value={Math.min(
                                (Number.parseInt(campaign.progress.split("/")[0]) /
                                  Number.parseInt(campaign.progress.split("/")[1])) *
                                  100,
                                100,
                              )}
                              className="h-2 bg-gray-700"
                            />
                          </div>
                        )}

                        <div className="mt-4 pt-3 border-t border-gray-700">
                          <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                            {campaign.type || "구매형체험단"}
                          </Badge>
                          <p className="text-gray-300 text-sm mt-2">{campaign.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="completed">
                  <div className="text-center py-8 text-gray-400">
                    <p>완료된 체험단이 없습니다.</p>
                  </div>
                </TabsContent>
                <TabsContent value="all">
                  <div className="text-center py-8 text-gray-400">
                    <p>현재 진행 중인 체험단만 표시됩니다.</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
} 