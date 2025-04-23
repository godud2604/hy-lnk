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
      <CourseProgressHeader title="Day 3: 키워드 찾기 & 상위노출 연습" currentDay={3} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 3</CardTitle>
              <CardDescription className="text-base font-medium">키워드 찾기 & 상위노출 연습</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 40분</span>
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
                      <span>검색 노출에 유리한 키워드 선정 방법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>키워드 분석 도구 활용법 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>키워드를 활용한 포스팅 작성 연습하기</span>
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
                  <CardTitle>키워드 찾기 & 상위노출 연습</CardTitle>
                  <CardDescription className="text-base">
                    검색 노출에 유리한 키워드를 찾고 포스팅에 활용하는 방법을 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">키워드의 중요성</h3>
                    <p className="text-gray-600 mb-4">
                      블로그 포스팅에서 키워드는 검색 노출의 핵심입니다. 적절한 키워드를 선정하고 효과적으로 활용하면
                      검색 결과 상위에 노출될 확률이 높아집니다.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-2">핵심 포인트</h4>
                      <p className="text-sm text-gray-600">
                        노출되는 글은 키워드 전략이 절반입니다. 좋은 콘텐츠도 적절한 키워드 없이는 독자에게 도달하기
                        어렵습니다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">효과적인 키워드 찾기</h3>
                    <p className="text-gray-600 mb-4">
                      효과적인 키워드는 검색량은 많지만 경쟁이 적은 키워드입니다. 이런 키워드를 찾기 위한 도구와 방법을
                      알아봅시다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <img
                          src="/black-kiwi-keyword-tool.png"
                          alt="블랙키위 키워드 도구"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">블랙키위</h5>
                          <p className="text-xs text-gray-500 mt-1">네이버 검색 데이터 기반의 키워드 분석 도구</p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img
                          src="/naver-trend-interface.png"
                          alt="네이버 트렌드"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">네이버 트렌드</h5>
                          <p className="text-xs text-gray-500 mt-1">네이버 검색어 트렌드를 확인할 수 있는 공식 도구</p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img src="/blog-top-posts-analysis.png" alt="상위 글 분석" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">상위 글 분석</h5>
                          <p className="text-xs text-gray-500 mt-1">검색 결과 상위 글의 키워드 활용법 분석하기</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💡 키워드 선정 기준</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        이상적인 키워드는 <span className="font-medium">검색량은 많지만 경쟁이 적은</span> 키워드입니다.
                        아래 기준으로 키워드를 평가해보세요:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 월간 검색량: 최소 100회 이상</li>
                        <li>• 경쟁 정도: 블로그 발행량이 적을수록 좋음</li>
                        <li>• 관련성: 내 블로그 주제와 연관성이 높을수록 좋음</li>
                        <li>• 트렌드: 상승 추세에 있는 키워드가 유리함</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">황금 키워드 찾기</h3>
                    <p className="text-gray-600 mb-4">
                      황금 키워드란 검색량은 많지만 발행량이 적은 키워드를 말합니다. 이런 키워드를 활용하면 상위 노출
                      확률이 높아집니다.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-4">
                      <div className="bg-pink-50 p-3 border-b">
                        <h4 className="font-medium">황금 키워드 찾는 방법</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">롱테일 키워드 활용</span>
                              <p className="text-gray-600 mt-0.5">
                                단일 키워드보다 2-3개 단어로 구성된 구체적인 키워드가 경쟁이 적습니다.
                                <br />
                                예: '화장품' 대신 '민감성 피부 화장품 추천'
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">지역명 활용</span>
                              <p className="text-gray-600 mt-0.5">
                                지역명을 포함한 키워드는 경쟁이 적은 경우가 많습니다.
                                <br />
                                예: '맛집' 대신 '강남역 파스타 맛집'
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">시즌 키워드 활용</span>
                              <p className="text-gray-600 mt-0.5">
                                계절, 명절, 이벤트 등 시즌 관련 키워드는 특정 시기에 검색량이 급증합니다.
                                <br />
                                예: '여름 자외선 차단제 추천', '크리스마스 데이트 코스'
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">신제품/트렌드 키워드</span>
                              <p className="text-gray-600 mt-0.5">
                                새롭게 출시된 제품이나 최신 트렌드 관련 키워드는 초기에 경쟁이 적습니다.
                                <br />
                                예: '2023 신상 립스틱', '최신 트렌드 헤어스타일'
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">키워드 분석 예시</h4>
                      <div className="space-y-3 text-sm text-gray-600">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span className="font-medium">키워드</span>
                          <div className="flex gap-4">
                            <span className="font-medium">월 검색량</span>
                            <span className="font-medium">발행량</span>
                            <span className="font-medium">평가</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>화장품</span>
                          <div className="flex gap-4">
                            <span>50,000+</span>
                            <span>30,000+</span>
                            <span className="text-red-500">어려움</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>민감성 피부 화장품</span>
                          <div className="flex gap-4">
                            <span>5,000+</span>
                            <span>2,000+</span>
                            <span className="text-yellow-500">보통</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>지성 민감성 피부 수분크림 추천</span>
                          <div className="flex gap-4">
                            <span>1,200+</span>
                            <span>200+</span>
                            <span className="text-green-500">좋음</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">키워드 활용 전략</h3>
                    <p className="text-gray-600 mb-4">
                      키워드를 찾았다면, 이제 포스팅에 효과적으로 활용하는 방법을 알아봅시다. 키워드 배치와 밀도가
                      중요합니다.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-4">
                      <div className="bg-green-50 p-3 border-b">
                        <h4 className="font-medium">키워드 배치 전략</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">제목에 키워드 포함</span>
                              <p className="text-gray-600 mt-0.5">
                                포스팅 제목에 메인 키워드를 자연스럽게 포함시키세요. 가능하면 앞부분에 배치하는 것이
                                좋습니다.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">첫 문단에 키워드 포함</span>
                              <p className="text-gray-600 mt-0.5">
                                포스팅의 첫 문단에 메인 키워드를 자연스럽게 포함시키세요. 검색 엔진은 첫 문단을 중요하게
                                평가합니다.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">소제목에 키워드 활용</span>
                              <p className="text-gray-600 mt-0.5">
                                H2, H3 태그(소제목)에 키워드나 관련 키워드를 포함시키세요. 검색 엔진은 소제목을 중요하게
                                평가합니다.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">본문에 자연스럽게 반복</span>
                              <p className="text-gray-600 mt-0.5">
                                본문에 키워드를 자연스럽게 반복해서 사용하세요. 하지만 과도한 반복은 오히려 역효과를 낼
                                수 있습니다.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">이미지 파일명과 대체 텍스트</span>
                              <p className="text-gray-600 mt-0.5">
                                이미지 파일명과 대체 텍스트(alt 태그)에도 키워드를 포함시키세요. 검색 엔진은 이미지
                                정보도 분석합니다.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">키워드 밀도 가이드</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        키워드 밀도는 전체 텍스트 중 키워드가 차지하는 비율을 말합니다. 적절한 키워드 밀도를 유지하는
                        것이 중요합니다.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 이상적인 키워드 밀도: 전체 텍스트의 1-3%</li>
                        <li>• 1,000자 글에서 메인 키워드 사용 횟수: 약 10회 내외</li>
                        <li>• 과도한 키워드 반복은 스팸으로 인식될 수 있으니 주의</li>
                        <li>• 동의어, 유사어를 함께 사용하면 자연스러움</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">실전 연습: 키워드 활용 포스팅</h3>
                    <p className="text-gray-600 mb-4">
                      이제 배운 내용을 바탕으로 키워드를 활용한 포스팅을 작성해봅시다. 아래는 '가을 니트 코디 추천'
                      키워드를 활용한 포스팅 예시입니다.
                    </p>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-pink-50 p-3 border-b">
                        <h4 className="font-medium">포스팅 예시: 가을 니트 코디 추천</h4>
                      </div>
                      <div className="p-4 text-sm text-gray-600">
                        <p className="font-medium text-base mb-2">
                          [2023 가을 니트 코디 추천] 날씨 별 니트 스타일링 총정리
                        </p>
                        <p className="mb-3">
                          안녕하세요, 오늘은 선선해진 날씨에 맞춰 <strong>가을 니트 코디 추천</strong>을 준비해봤어요.
                          가을이 되면 니트는 필수 아이템인데요, 다양한 스타일링 방법과 함께 날씨별{" "}
                          <strong>가을 니트 코디</strong>를 소개해드릴게요.
                        </p>
                        <p className="font-medium mb-1">1. 쌀쌀한 가을 아침을 위한 두꺼운 니트 코디</p>
                        <p className="mb-3">
                          아침저녁으로 쌀쌀해지는 가을, 두꺼운 니트는 필수입니다. <strong>가을 니트 코디</strong>의
                          기본은 단색 니트와 청바지의 조합인데요...
                        </p>
                        <p className="font-medium mb-1">2. 일교차 큰 날씨를 위한 니트 레이어드</p>
                        <p className="mb-3">
                          가을은 일교차가 큰 계절이죠. <strong>가을 니트 코디</strong>에서 레이어드는 실용적이면서도
                          스타일리시한 방법입니다...
                        </p>
                        <p className="font-medium mb-1">3. 가을 데이트를 위한 니트 원피스 코디</p>
                        <p className="mb-3">
                          데이트나 특별한 모임이 있다면 <strong>가을 니트 원피스 코디</strong>를 추천해요. 편안하면서도
                          여성스러운 느낌을 줄 수 있어요...
                        </p>
                        <p className="italic text-xs mt-4">
                          * 위 예시에서 메인 키워드인 '가을 니트 코디 추천'이 제목에 포함되어 있고, 본문에서는 '가을
                          니트 코디'가 자연스럽게 반복되고 있습니다. 또한 소제목에서도 키워드와 관련된 내용을 다루고
                          있습니다.
                        </p>
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
