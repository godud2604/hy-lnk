"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Download, FileText, Send, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"
import CourseProgressHeader from "@/components/course-progress-header"

export default function Day3Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    keyword: "",
    postUrl: "",
    keywordResearch: "",
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
      <CourseProgressHeader title="Day 3: 황금 키워드 찾기 + SEO 최적화" currentDay={3} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 3</CardTitle>
              <CardDescription className="text-base font-medium">황금 키워드 찾기 + SEO 최적화</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 50분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    3/6 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>효과적인 키워드 리서치 방법 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>검색 상위노출을 위한 SEO 전략 수립</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 최적화 요소 이해하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      인기 키워드 리스트.xlsx
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      키워드 분석 가이드.pdf
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day2">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Day 2
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day4">
                        Day 4
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
                  <CardTitle>효과적인 키워드 전략</CardTitle>
                  <CardDescription className="text-base">
                    체험단 선정률을 높이는 키워드 전략과 SEO 최적화 방법을 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 황금 키워드 찾기 섹션 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">황금 키워드의 조건</h3>
                    <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 검색량은 많지만 경쟁이 적은 키워드</li>
                        <li>• 블로그 주제와의 높은 연관성</li>
                        <li>• 트렌드 성장세에 있는 키워드</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700 mb-3">황금 키워드 찾기 전략</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">롱테일 키워드 활용</span>
                              <p className="text-gray-600">
                                2-3개 단어로 구성된 구체적인 키워드
                                <br />
                                예: '화장품' → '민감성 피부 화장품 추천'
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">지역명 활용</span>
                              <p className="text-gray-600">
                                지역 특화 키워드로 경쟁 낮추기
                                <br />
                                예: '맛집' → '강남역 파스타 맛집'
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">시즌 키워드</span>
                              <p className="text-gray-600">
                                계절/이벤트 연계 키워드
                                <br />
                                예: '여름 자외선 차단제 추천'
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-3">키워드 분석 도구 활용</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• 네이버 검색어 트렌드</li>
                          <li>• 구글 트렌드</li>
                          <li>• 네이버 연관 검색어</li>
                          <li>• 블로그 내 인기 검색어 분석</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* SEO 최적화 섹션 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">검색 최적화 (SEO) 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">1. 제목 최적화</h4>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">제목 작성 원칙</span>
                              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                                <li>• 25자 이내로 작성</li>
                                <li>• 핵심 키워드 포함</li>
                                <li>• 특수문자 최소화</li>
                                <li>• 지역명/브랜드명 활용</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">2. 본문 최적화</h4>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">본문 작성 원칙</span>
                              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                                <li>• 1200자 이상 작성</li>
                                <li>• 키워드 자연스럽게 배치</li>
                                <li>• 단락 구분 명확히</li>
                                <li>• 이미지 5장 이상 첨부</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">3. 검색 노출 최적화</h4>
                        <div className="mt-3 space-y-2">
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>상위노출이 잘 되는 시간대에 포스팅 (오전 10-11시, 저녁 8-10시)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>적절한 태그 활용 (10-15개)</span>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span>이미지 파일명에 키워드 포함</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 실전 예시 섹션 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">실전 키워드 분석 예시</h3>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="space-y-4">
                        <div className="border-b pb-2">
                          <div className="flex justify-between items-center text-sm font-medium">
                            <span>키워드</span>
                            <div className="flex gap-4">
                              <span>월 검색량</span>
                              <span>발행량</span>
                              <span>평가</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center text-sm">
                            <span>"강남역 브런치 맛집"</span>
                            <div className="flex gap-4">
                              <span>15,000</span>
                              <span>250</span>
                              <span className="text-green-600">좋음</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <span>"민감성 피부 선크림"</span>
                            <div className="flex gap-4">
                              <span>8,000</span>
                              <span>120</span>
                              <span className="text-green-600">매우 좋음</span>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-sm">
                            <span>"브런치 카페"</span>
                            <div className="flex gap-4">
                              <span>25,000</span>
                              <span>1,500</span>
                              <span className="text-red-600">경쟁 높음</span>
                            </div>
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
                  <CardTitle>Day 3 과제: 키워드 선정 및 활용</CardTitle>
                  <CardDescription className="text-base">
                    배운 내용을 바탕으로 키워드를 선정하고 포스팅에 활용해보세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-green-100 p-3 mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">과제가 성공적으로 제출되었습니다</h3>
                      <p className="text-gray-500 mb-6 max-w-md">
                        24시간 이내에 피드백을 받아보실 수 있습니다. 다음 학습을 계속 진행해주세요.
                      </p>
                      <Button asChild>
                        <Link href="/course/day4">
                          다음 학습으로 이동
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="keyword">선정한 키워드</Label>
                        <Input
                          id="keyword"
                          placeholder="예: 가을 니트 코디 추천"
                          value={formData.keyword}
                          onChange={(e) => handleInputChange("keyword", e.target.value)}
                        />
                        <p className="text-xs text-gray-500">배운 내용을 바탕으로 선정한 키워드를 입력해주세요.</p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="keywordResearch">키워드 선정 이유 및 분석</Label>
                        <Textarea
                          id="keywordResearch"
                          placeholder="이 키워드를 선정한 이유와 검색량, 경쟁도 등을 분석해주세요."
                          className="min-h-[100px]"
                          value={formData.keywordResearch}
                          onChange={(e) => handleInputChange("keywordResearch", e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="postUrl">키워드를 활용한 포스팅 URL</Label>
                        <Input
                          id="postUrl"
                          placeholder="https://blog.naver.com/yourblog/123456789"
                          value={formData.postUrl}
                          onChange={(e) => handleInputChange("postUrl", e.target.value)}
                        />
                        <p className="text-xs text-gray-500">
                          선정한 키워드를 활용하여 작성한 포스팅의 URL을 입력해주세요.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="file">키워드 분석 자료 첨부 (선택사항)</Label>
                        <div className="flex items-center justify-center border-2 border-dashed border-gray-200 rounded-lg p-6">
                          <label
                            htmlFor="file"
                            className="flex flex-col items-center justify-center w-full cursor-pointer"
                          >
                            <Upload className="h-8 w-8 text-gray-400 mb-2" />
                            <span className="text-sm font-medium mb-1">파일을 끌어다 놓거나 클릭하세요</span>
                            <span className="text-xs text-gray-500">
                              {formData.file ? formData.file.name : "PNG, JPG, PDF 파일 (최대 10MB)"}
                            </span>
                            <input
                              id="file"
                              type="file"
                              className="hidden"
                              accept=".png,.jpg,.jpeg,.pdf"
                              onChange={handleFileChange}
                            />
                          </label>
                        </div>
                      </div>

                      <Button
                        className="w-full"
                        onClick={handleSubmit}
                        disabled={!formData.keyword || !formData.keywordResearch || !formData.postUrl || isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="animate-spin mr-2">⏳</span> 제출 중...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" /> 과제 제출하기
                          </>
                        )}
                      </Button>
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
