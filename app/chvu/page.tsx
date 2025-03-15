'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// helper: 문자열 "25.03.08"를 Date 객체로 변환 (20XX년으로 가정)
function parseReviewDeadline(deadlineStr: string): Date | null {
  const parts = deadlineStr.split(".");
  if(parts.length !== 3) return null;
  const [yy, mm, dd] = parts;
  const year = parseInt(yy) + 2000; // 두 자리 연도를 2000년대 기준으로 변환
  const month = parseInt(mm) - 1;   // JavaScript Date에서는 월이 0부터 시작
  const day = parseInt(dd);
  return new Date(year, month, day);
}

interface CampaignData {
  id: string;
  title: string;
  status: string;
  details: string;
  platform?: string;
  points?: string;
  progress?: string;
  type?: string;
  full_text?: string;
}

export default function ChvuPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<CampaignData[]>([]);
  const [error, setError] = useState("");
  const [expandedCampaign, setExpandedCampaign] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('/api/chvu_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '로그인 실패');
      }
      
      const data = await response.json();
      setCampaigns(data.campaigns);
      
    } catch (err: Error | unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 localStorage에서 캠페인 데이터 로드
  useEffect(() => {
    const storedCampaigns: CampaignData[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
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
    if (storedCampaigns.length > 0) {
      setCampaigns(storedCampaigns);
    }
  }, []);

  // 토글 핸들러: 클릭 시 해당 캠페인의 full_text 보이기/숨기기
  const handleToggleFullText = (campaignId: string) => {
    if (expandedCampaign === campaignId) {
      setExpandedCampaign(null);
    } else {
      setExpandedCampaign(campaignId);
    }
  };

  // 오늘 날짜 (시간은 00:00:00 기준)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // 전체 리뷰 기간 (예시로 30일)
  const totalReviewDays = 30;

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
              <CardTitle className="text-center text-white">체험뷰 로그인</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="userId" className="text-sm text-white">아이디</label>
                    <Input
                      id="userId"
                      type="text"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      placeholder="체험뷰 아이디 입력"
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm text-white">비밀번호</label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호 입력"
                      className="bg-gray-800 border-gray-700 "
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
            <CardContent>
              <Tabs defaultValue="in-progress" className="w-full">
                <TabsContent value="in-progress" className="mt-4">
                  <div className="grid gap-4">
                    {campaigns.map((campaign) => {
                      let reviewDeadlineStr: string | null = null;
                      let daysRemaining: number | null = null;
                      let progressPercentage: number | null = null;
                      if(campaign.full_text) {
                        const match = campaign.full_text.match(/리뷰마감일\s*[:\-]?\s*(\d{2}\.\d{2}\.\d{2})/);
                        if(match && match[1]) {
                          reviewDeadlineStr = match[1];
                          const reviewDeadlineDate = parseReviewDeadline(reviewDeadlineStr);
                          if(reviewDeadlineDate) {
                            // 차이를 일(day) 단위로 계산
                            const diffTime = reviewDeadlineDate.getTime() - today.getTime();
                            daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                            // progress: 남은 일수 기준으로 진행률 계산 (전체 기간이 totalReviewDays일)
                            if(daysRemaining >= totalReviewDays) {
                              progressPercentage = 0;
                            } else if(daysRemaining <= 0) {
                              progressPercentage = 100;
                            } else {
                              progressPercentage = Math.round((1 - daysRemaining / totalReviewDays) * 100);
                            }
                          }
                        }
                      }
                      
                      return (
                        <div key={campaign.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <Badge variant="outline" className="mb-2 bg-blue-500/10 text-blue-400 border-blue-500/20">
                                {campaign.platform || "Blog"}
                              </Badge>
                              <h3 className="font-medium text-lg text-white">{campaign.title}</h3>
                              
                            </div>
                            
                            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500">{campaign.status}</Badge>
                          </div>

                          {/* 리뷰마감일 정보가 추출되었다면 UI 표시 */}
                          {reviewDeadlineStr && daysRemaining !== null && progressPercentage !== null && (
                            <div className="mt-4">
                              <div className="flex justify-between text-xs text-gray-400 mb-2">
                                <span>리뷰 마감일: {reviewDeadlineStr}</span>
                                {daysRemaining > 0 ? <span>{daysRemaining}일</span>: <span className="text-red-400">남은 기간: 마감됨</span>}
                              </div>
                              <Progress 
                                value={progressPercentage} 
                                className="h-2 bg-gray-500" 
                              />
                            </div>
                          )}

                          {campaign.progress && (
                            <div className="">
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
                            <p className="text-gray-300 text-sm">{campaign.details}</p>
                          </div>

                          {/* full_text 토글 버튼 */}
                          {campaign.full_text && (
                            <div className="mt-4">
                              <Button 
                                size="sm" 
                                onClick={() => handleToggleFullText(campaign.id)}
                                className="bg-gray-700 hover:bg-gray-600"
                              >
                                {expandedCampaign === campaign.id ? "숨기기" : "상세 내용 보기"}
                              </Button>
                              {expandedCampaign === campaign.id && (
                                <div className="mt-3 p-3 bg-gray-900 border border-gray-700 rounded">
                                  <pre className="whitespace-pre-wrap text-sm text-white">
                                    {campaign.full_text}
                                  </pre>
                                </div>
                              )}
                            </div>
                          )}


                        </div>
                      );
                    })}
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
