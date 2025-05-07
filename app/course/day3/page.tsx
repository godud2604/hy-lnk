"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, ChevronRight, Clock, Download, FileText, Send, Upload } from "lucide-react"
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
import { useRouter } from "next/navigation"

export default function Day3Page() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    keyword: "",
    postUrl: "",
    keywordResearch: "",
    file: null as File | null,
    research: "",
    title: "",
    placement: "",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }))
    }
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

  // Redirect unpaid users
  if (!hasPaid) {
    return null; // Return null because the useEffect will handle the redirect
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="Day 3: 방문자 수 올리는 상위노출 전략" currentDay={3} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 3</CardTitle>
              <CardDescription className="text-base font-medium">방문자 수 올리는 상위노출 전략</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 50분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    3/7 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>핵심 키워드 찾는 법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>상위노출 포스팅 방법 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>키워드 도구 활용법 배우기</span>
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
              <TabsTrigger
                value="assignment"
                className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800"
              >
                과제 제출
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learn" className="mt-0">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>키워드 중심의 글쓰기 전략</CardTitle>
                  <CardDescription className="text-base">
                    검색 유입을 늘리는 키워드 활용법을 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">🔑 핵심 개념 이해하기</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">키워드란?</h4>
                        <div className="mt-3 space-y-2">
                          <p className="text-sm text-gray-600">
                            키워드는 사람들이 검색할 때 사용하는 단어나 문구를 의미합니다.
                            블로그 글이 검색 결과 상위에 노출되려면 적절한 키워드 선정이 중요합니다.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">상위노출이란?</h4>
                        <div className="mt-3 space-y-2">
                          <p className="text-sm text-gray-600">
                            검색 결과 첫 페이지에 글이 노출되는 것을 의미합니다.
                            주로 상위 3개의 포스팅이 클릭률이 가장 높습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">🔍 키워드 찾는 방법</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">키워드 분석 도구</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 블랙키위 - 실시간 인기 키워드 확인</li>
                          <li>• 네이버 트렌드 - 키워드 검색량 추이</li>
                          <li>• 키워드마스터 - 연관 키워드 추천</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">지역 키워드 활용</h4>
                        <div className="mt-3">
                          <div className="bg-blue-50 p-3 rounded text-sm">
                            <p className="font-medium mb-2">키워드 조합 예시:</p>
                            <ul className="space-y-1 text-gray-600">
                              <li>• 홍대 + 맛집 + 추천</li>
                              <li>• 강남역 + 파스타 + 맛집</li>
                              <li>• 부산 + 카페 + 오션뷰</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">✍️ 제목 작성 예시</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-red-700 mb-3">❌ 피해야 할 제목</h4>
                        <div className="bg-red-50 p-3 rounded">
                          <p className="text-sm mb-2">오늘도 다녀온 후기</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 키워드가 없음</li>
                            <li>• 구체적이지 않음</li>
                            <li>• 검색 노출 어려움</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700 mb-3">✅ 추천하는 제목</h4>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-sm mb-2">[홍대 맛집 후기] 가성비 최고였던 파스타집!</p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• 지역명 포함</li>
                            <li>• 핵심 키워드 사용</li>
                            <li>• 구체적인 정보 제공</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💡 AI 활용 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-700">ChatGPT 활용</h4>
                        <div className="mt-3 space-y-4">
                          <div className="bg-pink-50 p-3 rounded">
                            <p className="text-sm font-medium mb-2">ChatGPT 프롬프트:</p>
                            <p className="text-sm italic text-gray-600">
                              "[제품/서비스] 후기 글 제목을 5개 제안해줘.
                              상위노출에 유리한 키워드 포함해서."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">Midjourney + GPT 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 썸네일 이미지 제작</li>
                          <li>• 클릭 유도 문구 생성</li>
                          <li>• 감성적인 이미지 연출</li>
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
                  <CardTitle>Day 3 과제</CardTitle>
                  <CardDescription className="text-base">
                    키워드를 활용한 포스팅을 작성하고 결과를 공유해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="target-keyword">선정한 메인 키워드</Label>
                        <Input
                          id="target-keyword"
                          placeholder="예: 강남역 브런치 맛집"
                          value={formData.keyword}
                          onChange={(e) => handleInputChange("keyword", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="keyword-research">키워드 선정 이유</Label>
                        <Textarea
                          id="keyword-research"
                          placeholder="선정한 키워드의 검색량, 경쟁도, 선정 이유를 설명해주세요"
                          value={formData.research}
                          onChange={(e) => handleInputChange("research", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="post-title">작성한 포스팅 제목</Label>
                        <Input
                          id="post-title"
                          placeholder="실제 작성한 포스팅의 제목을 입력해주세요"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="post-url">포스팅 URL</Label>
                        <Input
                          id="post-url"
                          placeholder="작성한 포스팅의 URL을 입력해주세요"
                          value={formData.postUrl}
                          onChange={(e) => handleInputChange("postUrl", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="keyword-placement">본문 내 키워드 배치 전략</Label>
                        <Textarea
                          id="keyword-placement"
                          placeholder="본문에서 키워드를 어떻게 자연스럽게 배치했는지 설명해주세요"
                          value={formData.placement}
                          onChange={(e) => handleInputChange("placement", e.target.value)}
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button
                        onClick={handleSubmit}
                        disabled={!formData.keyword || !formData.title || !formData.postUrl}
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
