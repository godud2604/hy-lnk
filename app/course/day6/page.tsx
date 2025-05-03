"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Clock,
  Download,
  FileText,
  ImageIcon,
  LinkIcon,
  Send,
  Upload,
  TrendingUp,
  BarChart2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/hooks/use-toast"
import CourseProgressHeader from "@/components/course-progress-header"
import ChecklistItem from "@/components/checklist-item"

export default function Day6Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [assignmentType, setAssignmentType] = useState("plan")
  const [formData, setFormData] = useState({
    postUrl: "",
    title: "",
    subheadings: "",
    photoPlans: "",
    additionalNotes: "",
    file: null as File | null,
    weeklyPlan: "",
    timeAllocation: "",
    communicationPlan: "",
    aiUsage: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }))
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    // 실제 구현에서는 API 호출로 대체
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "과제가 성공적으로 제출되었습니다",
        description: "24시간 이내에 피드백을 받아보실 수 있습니다.",
      })
    }, 1500)
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="Day 6: 블로그 지수 올리는 루틴" currentDay={6} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 6</CardTitle>
              <CardDescription className="text-base font-medium">블로그 지수 올리는 루틴</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 45분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    6/7 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 지수 개념 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>주간 루틴 계획 세우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>소통 전략 수립하기</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="learn" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
                학습하기
              </TabsTrigger>
              <TabsTrigger value="assignment" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
                과제 제출
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learn" className="mt-0">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>블로그 지수 관리와 루틴</CardTitle>
                  <CardDescription className="text-base">
                    효과적인 블로그 운영을 위한 루틴을 만들어봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 블로그 지수 이해하기 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">📊 블로그 지수란?</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">주요 지표</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">방문자 수</span>
                              <p className="text-gray-600">일일/주간/월간 방문자 추이</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <BarChart2 className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">조회수</span>
                              <p className="text-gray-600">게시글별 조회 통계</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">공감/댓글</span>
                              <p className="text-gray-600">독자 반응과 소통 지표</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">지수 상승 요인</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 정기적인 포스팅</li>
                          <li>• 꾸준한 이웃 소통</li>
                          <li>• 질 좋은 콘텐츠</li>
                          <li>• 검색 유입률</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 주간 루틴 가이드 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">📅 추천 주간 루틴</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">요일별 포스팅</h4>
                        <div className="mt-3 space-y-3">
                          <div className="bg-green-50 p-3 rounded">
                            <p className="font-medium mb-2">월요일</p>
                            <ul className="text-sm space-y-1">
                              <li>• 체험단 후기 작성</li>
                              <li>• 신규 체험단 신청</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 p-3 rounded">
                            <p className="font-medium mb-2">화요일</p>
                            <ul className="text-sm space-y-1">
                              <li>• 일상 이야기</li>
                              <li>• 이웃 블로그 방문</li>
                            </ul>
                          </div>
                          <div className="bg-purple-50 p-3 rounded">
                            <p className="font-medium mb-2">수요일</p>
                            <ul className="text-sm space-y-1">
                              <li>• 키워드 포스팅</li>
                              <li>• 트렌드 분석</li>
                            </ul>
                          </div>
                          <div className="bg-pink-50 p-3 rounded">
                            <p className="font-medium mb-2">목요일</p>
                            <ul className="text-sm space-y-1">
                              <li>• 블로그 꿀팁</li>
                              <li>• 방문 답방</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded">
                            <p className="font-medium mb-2">금요일</p>
                            <ul className="text-sm space-y-1">
                              <li>• 주말 계획</li>
                              <li>• 이웃 소통</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">시간대별 전략</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 오전 9-11시: 신규 포스팅</li>
                          <li>• 점심 12-2시: 이웃 방문</li>
                          <li>• 저녁 8-10시: 댓글 소통</li>
                          <li>• 자정 11-1시: 체험단 신청</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 소통 전략 */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💬 소통 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-yellow-700">이웃 소통 방법</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">진정성 있는 댓글</span>
                              <p className="text-gray-600">게시글을 읽고 구체적인 피드백 남기기</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">정기적인 방문</span>
                              <p className="text-gray-600">관심 있는 블로거 정기 방문</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">답방 필수</span>
                              <p className="text-gray-600">방문한 이웃 꼭 답방하기</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-orange-700">효율적인 소통 팁</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 비슷한 주제의 블로거와 소통</li>
                          <li>• 하루 최소 10개 블로그 방문</li>
                          <li>• 주제별 이웃 그룹 만들기</li>
                          <li>• 소통 시간대 정하기</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* AI 활용 팁 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💡 AI 활용 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-700">ChatGPT로 루틴 최적화</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-pink-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">AI 프롬프트:</p>
                            <p className="text-sm italic text-gray-600">
                              "블로그 지수 상승을 위한 주간 계획표 만들어줘.
                              내 블로그 주제와 시간 여유를 고려해서."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">GPT로 아이디어 생성</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 매일 쓸만한 글 주제 추천</li>
                          <li>• 카테고리별 컨텐츠 계획</li>
                          <li>• 시즌별 특별 포스팅 아이디어</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment" className="mt-0">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>Day 6 과제</CardTitle>
                  <CardDescription className="text-base">
                    나만의 블로그 운영 루틴을 만들어보세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="weekly-plan">주간 포스팅 계획</Label>
                        <Textarea
                          id="weekly-plan"
                          placeholder="요일별로 어떤 주제의 글을 쓸지 계획을 세워주세요"
                          value={formData.weeklyPlan}
                          onChange={(e) => handleInputChange("weeklyPlan", e.target.value)}
                          className="min-h-[200px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time-allocation">시간 배분 계획</Label>
                        <Textarea
                          id="time-allocation"
                          placeholder="하루 중 언제 어떤 블로그 활동을 할지 계획해주세요"
                          value={formData.timeAllocation}
                          onChange={(e) => handleInputChange("timeAllocation", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="communication-plan">소통 전략</Label>
                        <Textarea
                          id="communication-plan"
                          placeholder="이웃 소통을 어떻게 할지 계획을 세워주세요"
                          value={formData.communicationPlan}
                          onChange={(e) => handleInputChange("communicationPlan", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ai-usage">AI 활용 계획</Label>
                        <Textarea
                          id="ai-usage"
                          placeholder="블로그 운영에 AI를 어떻게 활용할 계획인지 설명해주세요"
                          value={formData.aiUsage}
                          onChange={(e) => handleInputChange("aiUsage", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.weeklyPlan || !formData.timeAllocation}
                        className="w-full"
                      >
                        과제 제출하기
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">과제가 성공적으로 제출되었습니다!</h3>
                      <p className="text-gray-600 mb-6">24시간 이내에 피드백을 받으실 수 있습니다.</p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>다시 제출하기</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
