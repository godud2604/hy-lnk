"use client"

import type React from "react"

import { useState, useEffect } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import CourseProgressHeader from "@/components/course-progress-header"
import ChecklistItem from "@/components/checklist-item"
import { useRouter } from "next/navigation"

export default function Day2Page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    postUrl: "",
    title: "",
    structure: "",
    aiUsage: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [hasPaid, setHasPaid] = useState(false)

  // Simulate getting user payment status
  useEffect(() => {
    // In a real app, this would fetch from your backend or auth context
    // For now, we'll just simulate a free user
    setHasPaid(false)
    
    // Show payment required message
    if (!hasPaid) {
      showPaymentRequiredAlert()
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const showPaymentRequiredAlert = () => {
    toast({
      title: "결제가 필요합니다",
      description: "더 학습하시려면 결제가 필요합니다.",
      variant: "destructive",
    })
    
    // Show payment prompt
    if (window.confirm("더 학습하시려면 결제가 필요합니다. 결제 페이지로 이동하시겠습니까?")) {
      router.push('/curriculum') // Redirect to payment page
    } else {
      router.push('/course/day1') // If they cancel, go back to day1
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      toast({
        title: "과제가 성공적으로 제출되었습니다",
        description: "24시간 이내에 피드백을 받아보실 수 있습니다.",
      })
    }, 1500)
  }

  // Redirect unpaid users or show content to paid users
  if (!hasPaid) {
    return null; // Return null because the useEffect will handle the redirect
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="Day 2: 블로그 글쓰기 기초" currentDay={2} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 2</CardTitle>
              <CardDescription className="text-base font-medium">블로그 글쓰기의 기초</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 50분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    2/7 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 글쓰기 기본 구조 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>글쓰기 기본 공식 습득하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>실제 글 작성해보기</span>
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
                  <CardTitle>블로그 글쓰기 구조와 공식</CardTitle>
                  <CardDescription className="text-base">
                    독자들의 관심을 끄는 블로그 글쓰기의 기본을 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✍️ 글쓰기 구조 기본 공식</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">제목 작성</h4>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">제목 공식</span>
                              <p className="text-gray-600">키워드 포함 + 흥미 유발 요소</p>
                              <div className="mt-2 bg-blue-50 p-3 rounded">
                                <p className="text-sm italic">
                                  [강남 맛집] 점심특선으로 가성비 갑! 파스타 맛집 리뷰
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">본문 구성</h4>
                        <ul className="mt-3 space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">도입부</span>
                              <p className="text-gray-600">개인 경험 또는 궁금증으로 시작</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">본문</span>
                              <p className="text-gray-600">설명 + 후기 + 사진</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">마무리</span>
                              <p className="text-gray-600">요약 + 추천 + 공정위 문구</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">🔍 글쓰기 실전 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">사진 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 3장 이상의 사진 필수 첨부</li>
                          <li>• 밝고 선명한 사진 선택</li>
                          <li>• 다양한 각도에서 촬영</li>
                          <li>• 본문 중간중간 자연스럽게 배치</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">가독성 높이기</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 소제목으로 내용 구분하기</li>
                          <li>• 한 문단 당 2-3줄로 제한</li>
                          <li>• 중요 내용은 굵은 글씨 강조</li>
                          <li>• 글머리 기호 활용하기</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">자연스러운 글쓰기</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 대화하듯 편안한 톤 유지</li>
                          <li>• 과도한 존댓말 피하기</li>
                          <li>• 개인적인 경험 공유하기</li>
                          <li>• 독자와 공감대 형성하기</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💡 AI 활용 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-orange-700">ChatGPT 활용하기</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-orange-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">ChatGPT 프롬프트 예시:</p>
                            <p className="text-sm italic text-gray-600">
                              "[제품명] 후기 블로그 글을 구성해줘. 
                              도입, 본문, 마무리로 나누고 자연스럽게 말하듯 써줘."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-yellow-700">GPTs 활용하기</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• "후기용 블로그 초안 생성기" GPT 활용</li>
                          <li>• 1차 초안 빠르게 생성</li>
                          <li>• 개인적인 경험과 생각 추가</li>
                          <li>• 자연스러운 문장으로 다듬기</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✨ 글쓰기 예시</h3>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-pink-700">✅ 좋은 예시</h4>
                          <div className="mt-2 p-4 bg-pink-50 rounded-lg text-sm">
                            <p className="font-medium mb-2">[청담동 브런치 카페] 분위기 갑! 인스타감성 카페 방문기</p>
                            <div className="space-y-3">
                              <p className="text-gray-600">
                                요즘 청담동에 새로 생긴 카페들이 많더라구요! 
                                오늘은 인스타그램에서 화제가 되고 있는 '○○○' 카페를 
                                다녀왔습니다 😊
                              </p>
                              <p className="text-gray-600">
                                [위치 및 영업시간]
                                - 주소: 서울 강남구 청담동 ...
                                - 영업시간: 10:00 - 21:00
                                - 주차: 건물 내 2시간 무료
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-red-700">❌ 나쁜 예시</h4>
                          <div className="mt-2 p-4 bg-red-50 rounded-lg text-sm">
                            <p className="font-medium mb-2">카페 다녀왔어요!</p>
                            <p className="text-gray-600">
                              오늘 카페 갔다왔습니다~ 너무 맛있고 좋았어요 ㅎㅎ
                              또 가고 싶네요~ 다들 여기 한번 가보세요!
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
                  <CardTitle>Day 2 과제</CardTitle>
                  <CardDescription className="text-base">
                    배운 내용을 바탕으로 블로그 글을 작성하고 제출해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="post-url">작성한 글 URL</Label>
                        <Input
                          id="post-url"
                          placeholder="블로그 포스팅 URL을 입력해주세요"
                          value={formData.postUrl}
                          onChange={(e) => handleInputChange("postUrl", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="title">포스팅 제목</Label>
                        <Input
                          id="title"
                          placeholder="작성한 포스팅의 제목을 입력해주세요"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="structure">글 구조 설명</Label>
                        <Textarea
                          id="structure"
                          placeholder="도입-본문-마무리 구조를 어떻게 구성했는지 설명해주세요"
                          value={formData.structure}
                          onChange={(e) => handleInputChange("structure", e.target.value)}
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="ai-usage">AI 도구 활용 내역</Label>
                        <Textarea
                          id="ai-usage"
                          placeholder="글 작성에 AI 도구를 어떻게 활용했는지 설명해주세요"
                          value={formData.aiUsage}
                          onChange={(e) => handleInputChange("aiUsage", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.postUrl || !formData.title || !formData.structure}
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
