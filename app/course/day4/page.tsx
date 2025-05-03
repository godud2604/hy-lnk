"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import CourseProgressHeader from "@/components/course-progress-header"

export default function Day4Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    platform: "",
    product: "",
    application: "",
    strategy: "",
    aiUsage: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="Day 4: 체험단 신청하는 법 A to Z" currentDay={4} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 4</CardTitle>
              <CardDescription className="text-base font-medium">체험단 신청하는 법 A to Z</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 45분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    4/7 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 플랫폼별 특징 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>효과적인 신청서 작성법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 선정 확률 높이기</span>
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
                  <CardTitle>체험단 신청과 선정 전략</CardTitle>
                  <CardDescription className="text-base">
                    체험단 활동을 시작하기 위한 모든 것을 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 주요 체험단 플랫폼 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">🧾 주요 체험단 플랫폼</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">리뷰노트</h4>
                        <div className="mt-3 space-y-2">
                          <p className="text-sm font-medium">월 435,000회 방문</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 국내 최대 규모</li>
                            <li>• 다양한 카테고리</li>
                            <li>• 신규 블로거 진입 장벽 낮음</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">레뷰</h4>
                        <div className="mt-3 space-y-2">
                          <p className="text-sm font-medium">월 172,000회 방문</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 식품/뷰티 전문</li>
                            <li>• 고가 제품 체험 기회 많음</li>
                            <li>• 선정 확률 중간</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">리뷰플레이스</h4>
                        <div className="mt-3 space-y-2">
                          <p className="text-sm font-medium">월 67,700회 방문</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 초보 블로거 친화적</li>
                            <li>• 다양한 지역 업체</li>
                            <li>• 빠른 선정 결과</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 신청서 작성 전략 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✍️ 신청서 작성 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">기본 템플릿</h4>
                        <div className="mt-3 p-4 bg-green-50 rounded text-sm">
                          <p className="italic">
                            "안녕하세요! 사진과 글 모두 꼼꼼히 작성하는 블로거입니다.
                            신청 제품의 특성을 잘 이해하고 후기로 정성스럽게 남기겠습니다!"
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">구성 요소</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">자기소개</span>
                              <p className="text-gray-600">블로그 주제와 특징 간단히 소개</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">리뷰 계획</span>
                              <p className="text-gray-600">상세한 리뷰 작성 방식 설명</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">차별화 포인트</span>
                              <p className="text-gray-600">나만의 특별한 리뷰 방식이나 전문성</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 신청 시기 전략 */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">⏰ 신청 시기 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-orange-700">신청 타이밍</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 새벽 시간대 신청 경쟁 낮음 (새벽 1-4시)</li>
                          <li>• 월요일 오전 신규 모집 공고 많음</li>
                          <li>• 계절성 제품은 1-2개월 전 미리 신청</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-yellow-700">업체별 맞춤 전략</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 식당/카페: 사진 촬영 실력 강조</li>
                          <li>• 뷰티: 피부 타입/관련 지식 언급</li>
                          <li>• 숙소: 여행 콘텐츠 제작 경험 강조</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* AI 활용 팁 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💡 AI 활용 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-700">ChatGPT 활용</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-pink-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">ChatGPT 프롬프트:</p>
                            <p className="text-sm italic text-gray-600">
                              "블로그 체험단 신청 메시지를 자연스럽고 설득력 있게 써줘.
                              제품의 특성과 나의 강점을 잘 어필하도록."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">GPTs 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 자주 쓰는 신청 메시지 템플릿 자동화</li>
                          <li>• 업체별 맞춤형 신청서 생성</li>
                          <li>• 리뷰 계획 상세 구성</li>
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
                  <CardTitle>Day 4 과제</CardTitle>
                  <CardDescription className="text-base">
                    체험단 신청서를 작성하고 실제로 신청해보세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="platform">신청한 체험단 플랫폼</Label>
                        <Input
                          id="platform"
                          placeholder="예: 리뷰노트, 레뷰 등"
                          value={formData.platform}
                          onChange={(e) => handleInputChange("platform", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="product">신청한 제품/서비스</Label>
                        <Input
                          id="product"
                          placeholder="신청한 제품이나 서비스명을 입력해주세요"
                          value={formData.product}
                          onChange={(e) => handleInputChange("product", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="application">작성한 신청서 내용</Label>
                        <Textarea
                          id="application"
                          placeholder="실제 작성한 신청서 내용을 붙여넣어주세요"
                          value={formData.application}
                          onChange={(e) => handleInputChange("application", e.target.value)}
                          className="min-h-[200px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy">신청 전략 설명</Label>
                        <Textarea
                          id="strategy"
                          placeholder="어떤 전략으로 신청서를 작성했는지 설명해주세요"
                          value={formData.strategy}
                          onChange={(e) => handleInputChange("strategy", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ai-usage">AI 도구 활용 내역</Label>
                        <Textarea
                          id="ai-usage"
                          placeholder="신청서 작성에 AI를 어떻게 활용했는지 설명해주세요"
                          value={formData.aiUsage}
                          onChange={(e) => handleInputChange("aiUsage", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.platform || !formData.product || !formData.application}
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
