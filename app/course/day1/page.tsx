"use client"

import type React from "react"

import { useState } from "react"
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
import ChecklistItem from "@/components/checklist-item"

export default function Day1Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    blogUrl: "",
    blogTopic: "",
    keywords: "",
    file: null as File | null,
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
      <CourseProgressHeader title="Day 1: 체험단 특화 블로그 만들기" currentDay={1} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 1</CardTitle>
              <CardDescription className="text-base font-medium">체험단 특화 블로그 만들기</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 30분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    첫 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단에 유리한 블로그 플랫폼 선택하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 선정에 최적화된 블로그 주소 설정하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 리뷰어로서의 프로필 구성하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 주제 선정 가이드.pdf
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      프로필 작성 템플릿.docx
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      이전
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day2">
                        Day 2
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 메인 콘텐츠 */}
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
                  <CardTitle>체험단 특화 블로그 설정</CardTitle>
                  <CardDescription className="text-base">
                    체험단 선정에 유리한 블로그 환경을 조성해봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* Step 1: Platform Selection */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 1: 블로그 플랫폼 선택</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-600 mb-2">네이버 블로그 추천 이유</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>체험단 사이트 선호도 1위 (90% 이상이 네이버 블로그 선호)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>블로그 지수(블덱스) 제공으로 성장 관리 용이</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>다양한 체험단 사이트와의 호환성</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-600 mb-2">주요 체험단 사이트</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <p className="font-medium text-purple-700">리뷰노트 (435,000회)</p>
                            <p className="text-gray-600">국내 최대 규모의 체험단 사이트</p>
                          </div>
                          <div>
                            <p className="font-medium text-purple-700">레뷰 (172,000회)</p>
                            <p className="text-gray-600">식품, 뷰티 체험 기회 다수</p>
                          </div>
                          <div>
                            <p className="font-medium text-purple-700">리뷰플레이스 (67,700회)</p>
                            <p className="text-gray-600">초보 블로거도 선정 확률 높음</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Blog Address Setup */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 2: 블로그 주소 설정하기</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-700 mb-3">효과적인 블로그 주소 설정 방법</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">주제 연관성</span>
                              <p className="text-gray-600">리뷰, 체험 등의 키워드 포함</p>
                              <p className="text-sm text-pink-600 mt-1">예: beauty_review, daily_food</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">전문성 표현</span>
                              <p className="text-gray-600">전문 분야나 특징을 드러내는 단어 활용</p>
                              <p className="text-sm text-pink-600 mt-1">예: skincare_expert, food_taster</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">기억하기 쉬운 주소</span>
                              <p className="text-gray-600">단순하고 직관적인 주소 선택</p>
                              <p className="text-sm text-pink-600 mt-1">예: seoul_cafe_review, beauty_daily</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Profile Setup */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 3: 프로필 설정하기</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-600 mb-3">필수 프로필 요소</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">프로필 닉네임</span>
                              <p className="text-gray-600">전문성이 드러나는 닉네임</p>
                              <p className="text-blue-600 text-xs mt-1">예: 화장품탐험가, 맛집헌터</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">소개글</span>
                              <p className="text-gray-600">전문성과 신뢰도를 강조한 소개</p>
                              <p className="text-blue-600 text-xs mt-1">- 관련 경험/자격증 언급</p>
                              <p className="text-blue-600 text-xs">- 포스팅 주기 명시</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">프로필 이미지</span>
                              <p className="text-gray-600">전문적이고 신뢰감 있는 이미지</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-600 mb-3">프로필 작성 예시</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-green-200 pl-4">
                            <p className="text-sm italic">
                              "4년차 뷰티 블로거 '화장품연구소장' 입니다.
                              화장품제조관리사 자격증을 보유하고 있으며,
                              민감성 피부를 위한 제품 리뷰를 전문적으로 
                              다룹니다. 매주 2-3회 정직한 리뷰로 찾아뵙겠습니다."
                            </p>
                          </div>
                          <div className="mt-4 bg-green-50 p-3 rounded">
                            <p className="text-xs text-green-800">
                              💡 위 예시는 구체적인 경력, 자격, 전문분야, 
                              포스팅 주기를 명시하여 신뢰도를 높입니다.
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
                  <CardTitle>Day 1 과제 제출</CardTitle>
                  <CardDescription className="text-base">
                    블로그 URL과 선정한 주제, 관심 키워드를 제출해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">과제 안내</h3>
                        <p className="text-sm text-gray-600">아래 항목을 작성하여 제출해주세요:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• 블로그 URL (네이버 블로그 또는 다른 플랫폼)</li>
                          <li>• 선정한 블로그 주제</li>
                          <li>• 관심 있는 키워드 3개 이상</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="blogUrl">블로그 URL</Label>
                          <Input
                            id="blogUrl"
                            placeholder="https://blog.naver.com/yourblog"
                            value={formData.blogUrl}
                            onChange={(e) => handleInputChange("blogUrl", e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">
                            네이버, 티스토리 등 블로그 주소를 입력해주세요.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="blogTopic">블로그 주제</Label>
                          <Input
                            id="blogTopic"
                            placeholder="예: 뷰티/화장품 리뷰, 맛집 탐방, 육아 일상 등"
                            value={formData.blogTopic}
                            onChange={(e) => handleInputChange("blogTopic", e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">블로그에서 주로 다룰 주제를 입력해주세요.</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="keywords">관심 키워드 (3개 이상)</Label>
                          <Textarea
                            id="keywords"
                            placeholder="예: 스킨케어, 선크림, 안티에이징, 민감성 피부"
                            rows={3}
                            value={formData.keywords}
                            onChange={(e) => handleInputChange("keywords", e.target.value)}
                          />
                          <p className="text-xs text-muted-foreground">
                            블로그에서 다루고 싶은 구체적인 키워드를 쉼표로 구분하여 입력해주세요.
                          </p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="file">블로그 스크린샷 (선택사항)</Label>
                          <div className="flex items-center justify-center border border-dashed border-input rounded-md p-6 bg-muted/50">
                            <div className="text-center">
                              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm font-medium mb-1">
                                {formData.file ? formData.file.name : "파일을 드래그하거나 클릭하여 업로드하세요"}
                              </p>
                              <p className="text-xs text-muted-foreground mb-3">PNG, JPG 파일 (최대 5MB)</p>
                              <Input
                                id="file"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => document.getElementById("file")?.click()}
                              >
                                파일 선택
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center space-y-4">
                      <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-medium">과제가 성공적으로 제출되었습니다!</h3>
                      <p className="text-gray-600 max-w-md mx-auto">
                        24시간 이내에 전문 멘토의 피드백을 받아보실 수 있습니다. 피드백이 도착하면 알림을 보내드릴게요.
                      </p>
                      <div className="pt-4">
                        <Button variant="outline" asChild>
                          <Link href="/dashboard">대시보드로 돌아가기</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
                {!isSubmitted && (
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline" onClick={() => setActiveTab("learn")}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      학습 내용으로 돌아가기
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting || !formData.blogUrl || !formData.blogTopic || !formData.keywords}
                      className="bg-pink-600 hover:bg-pink-700"
                    >
                      {isSubmitting ? (
                        <>제출 중...</>
                      ) : (
                        <>
                          과제 제출하기
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
