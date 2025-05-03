"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Clock, BarChart2, TrendingUp, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ChecklistItem from "@/components/checklist-item"
import CourseProgressHeader from "@/components/course-progress-header"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Day5Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    postUrl: "",
    structure: "",
    trustElements: "",
    photos: "",
    aiUsage: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="Day 5: 신뢰도 높은 후기 작성법" currentDay={5} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 5</CardTitle>
              <CardDescription className="text-base font-medium">신뢰도 높은 후기 작성법</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 50분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    5/7 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>신뢰도 높은 후기 작성법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 후기 구조 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>실제 후기 작성해보기</span>
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
                  <CardTitle>신뢰도 높은 후기 작성하기</CardTitle>
                  <CardDescription className="text-base">
                    독자들이 신뢰할 수 있는 후기 작성법을 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 후기 글 기본 구조 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✅ 후기 글 기본 구조</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">1. 제품 소개와 기대 포인트</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 체험단으로 선정된 제품 정보</li>
                          <li>• 제품 선택 이유나 기대 포인트</li>
                          <li>• 사용해본 경험이 있다면 언급</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">2. 실제 사용 후기</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 객관적인 사용 경험 서술</li>
                          <li>• 장단점 균형있게 작성</li>
                          <li>• 구체적인 사용감 설명</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">3. 마무리와 추천</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 전체적인 사용 만족도</li>
                          <li>• 추천하는 대상/상황</li>
                          <li>• 공정위 문구 포함</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 신뢰도를 높이는 요소들 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💫 신뢰도를 높이는 요소들</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">사진/영상 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">실제 사용 장면</span>
                              <p className="text-gray-600">제품 사용하는 모습 담기</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">디테일 샷</span>
                              <p className="text-gray-600">제품의 특징이 잘 보이는 사진</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">비교 사진</span>
                              <p className="text-gray-600">사용 전/후 비교가 가능한 사진</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">객관적 데이터 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 구체적인 수치 정보</li>
                          <li>• 사용 기간/횟수 명시</li>
                          <li>• 가격대 비교 정보</li>
                          <li>• 공식 제품 정보 인용</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 실전 작성 팁 */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✍️ 실전 작성 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-yellow-700">✅ 좋은 후기의 특징</h4>
                        <div className="mt-3 bg-yellow-50 p-3 rounded">
                          <ul className="space-y-2 text-sm">
                            <li>• 구체적인 사용 경험 포함</li>
                            <li>• 객관적인 시각 유지</li>
                            <li>• 장단점 균형있게 서술</li>
                            <li>• 실제 사진 충분히 첨부</li>
                            <li>• 독자 입장에서 필요한 정보 제공</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-red-700">❌ 피해야 할 점</h4>
                        <div className="mt-3 bg-red-50 p-3 rounded">
                          <ul className="space-y-2 text-sm">
                            <li>• 과도한 찬사나 홍보성 문구</li>
                            <li>• 근거 없는 주장</li>
                            <li>• 단순 제품 정보 나열</li>
                            <li>• 부족한 사진 첨부</li>
                            <li>• 성의 없는 간단 후기</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI 활용 팁 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💡 AI 활용 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-700">Claude 활용하기</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-pink-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">AI 프롬프트:</p>
                            <p className="text-sm italic text-gray-600">
                              "이 후기를 좀 더 고객 관점에서 자연스럽게 다듬어줘.
                              신뢰감 있게 작성해줘."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">ChatGPT 활용</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-purple-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">AI 프롬프트:</p>
                            <p className="text-sm italic text-gray-600">
                              "리얼 후기 스타일로 블로그 글을 써줘.
                              비교적 상세하게 사진 위치도 포함해서."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment" className="mt-0">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>Day 5 과제</CardTitle>
                  <CardDescription className="text-base">
                    체험단 후기를 작성하고 공유해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="post-url">작성한 후기 URL</Label>
                        <Input
                          id="post-url"
                          placeholder="작성한 후기 글의 URL을 입력해주세요"
                          value={formData.postUrl}
                          onChange={(e) => handleInputChange("postUrl", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="structure">후기 구조 설명</Label>
                        <Textarea
                          id="structure"
                          placeholder="후기를 어떤 구조로 작성했는지 설명해주세요"
                          value={formData.structure}
                          onChange={(e) => handleInputChange("structure", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="trust-elements">신뢰도를 높이기 위해 사용한 요소들</Label>
                        <Textarea
                          id="trust-elements"
                          placeholder="신뢰도를 높이기 위해 어떤 요소들을 활용했는지 설명해주세요"
                          value={formData.trustElements}
                          onChange={(e) => handleInputChange("trustElements", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="photos">첨부한 사진 설명</Label>
                        <Textarea
                          id="photos"
                          placeholder="어떤 사진들을 어떤 의도로 첨부했는지 설명해주세요"
                          value={formData.photos}
                          onChange={(e) => handleInputChange("photos", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ai-usage">AI 도구 활용 내역</Label>
                        <Textarea
                          id="ai-usage"
                          placeholder="후기 작성에 AI를 어떻게 활용했는지 설명해주세요"
                          value={formData.aiUsage}
                          onChange={(e) => handleInputChange("aiUsage", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.postUrl || !formData.structure}
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
