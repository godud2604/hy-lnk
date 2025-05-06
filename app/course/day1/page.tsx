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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { toast } from "@/hooks/use-toast"
import CourseProgressHeader from "@/components/course-progress-header"
import ChecklistItem from "@/components/checklist-item"

export default function Day1Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    blogUrl: "",
    categories: "",
    introPost: "",
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
      <CourseProgressHeader title="Day 1: 블로그 개설부터 완성까지" currentDay={1} totalDays={7} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <div className="sticky top-24">
            <Card className="max-h-[calc(100vh-8rem)] overflow-y-auto">
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
                      블로그 세팅 운영 가이드.pdf
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 세팅을 도와주는 AI 활용법.docx
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
                  <CardTitle>블로그 개설과 기본 세팅</CardTitle>
                  <CardDescription className="text-base">
                    처음부터 차근차근 블로그를 만들어봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* Step 1: 블로그 개설 */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="step1" className="border-none">
                        <AccordionTrigger className="py-0 hover:no-underline">
                          <h3 className="text-xl font-medium">Step 1: 네이버 블로그 개설</h3>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">기본 개설 단계</h4>
                              <ul className="mt-3 space-y-2 text-sm">
                                <li className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                  <div>
                                    <span className="font-medium">네이버 로그인</span>
                                    <p className="text-gray-600">네이버 계정으로 로그인 후 블로그 개설 클릭</p>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                  <div>
                                    <span className="font-medium">블로그 주소 설정</span>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Step 2: 프로필 설정 */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="step2" className="border-none">
                        <AccordionTrigger className="py-0 hover:no-underline">
                          <h3 className="text-xl font-medium">Step 2: 프로필 설정</h3>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">기본 설정</h4>
                              <p className="text-sm text-gray-600 mt-2">관리 {`>`} 기본설정 {`>`} 기본 정보관리 {`>`} 블로그 정보에서 설정할 수 있습니다.</p>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">블로그 주제 선정</h4>
                              <div className="mt-3 space-y-2">
                                <div className="flex items-start">
                                  <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                  <div>
                                    <span className="font-medium">내 관심사 기반 선정</span>
                                    <p className="text-gray-600">관심도가 높은 주제를 선정하여 지속적인 컨텐츠 제작이 가능하도록 합니다.</p>
                                  </div>
                                </div>

                                
                                <div className="bg-yellow-50 p-3 rounded-lg mt-4">
                                  <p className="text-sm font-medium text-gray-800">TIP</p>
                                  <ul className="mt-2 space-y-2 text-sm text-gray-600">
                                    <li>• <span className="text-primary font-medium">하나의 주력 카테고리</span>를 정하고 전문성을 키우세요.</li>
                                    <li>• 선택한 카테고리에서 <span className="text-primary font-medium">꾸준히 양질의 콘텐츠</span>를 제작하세요.</li>
                                    <li>• 사진, 글쓰기 등 콘텐츠 제작 능력을 향상시키세요.</li>
                                    <li>• 댓글 소통과 이웃 맺기로 커뮤니티를 형성하세요.</li>
                                    <li>• 체험단 주최측은 <span className="text-primary font-medium">제품을 잘 설명할 수 있는 블로거</span>를 선호합니다.</li>
                                    <li>• 블로그 주제와 제목을 체험하고 싶은 분야와 연관되게 설정하면 선정 확률이 높아집니다.</li>
                                    <li>• 처음에는 "일상"으로 시작하고 점차 특정 분야로 발전시켜도 좋습니다.</li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">블로그 주제 선정</h4>
                              <div className="mt-3 space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">패션 / 뷰티 / 화장품 후기</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">체험단 당첨률 높음</span> / 협찬 기회 많음</li>
                                      <li>• 스킨케어, 메이크업 제품</li>
                                      <li>• 신제품 리뷰 기회 많음</li>
                                    </ul>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">육아 / 유아용품</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">엄마 인플루언서 수요 높음</span></li>
                                      <li>• 육아용품 체험 기회 많음</li>
                                      <li>• 장기적 콘텐츠 확보 가능</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">일상 / 브이로그</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">초보 블로거에게 적합</span></li>
                                      <li>• 다양한 주제 시도 가능</li>
                                      <li>• 자연스러운 제품 리뷰</li>
                                    </ul>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">전자기기 / 생활가전</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">체험단 수요 높음</span></li>
                                      <li>• 고가 제품 체험 기회</li>
                                      <li>• 상세한 리뷰 선호</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">반려동물</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">애견/애묘용품 체험단</span></li>
                                      <li>• 일상적인 콘텐츠 확보</li>
                                      <li>• 반려인 커뮤니티</li>
                                    </ul>
                                  </div>
                                  <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="font-medium text-sm text-gray-800 mb-2">맛집 / 음식</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      <li>• <span className="text-primary">지역 기반 확장 가능</span></li>
                                      <li>• 사진 촬영 용이</li>
                                      <li>• 맛집 체험단 기회</li>
                                    </ul>
                                  </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-800 mb-3">🧠 주제 선정 시 고려사항</h5>
                                  <ul className="space-y-2 text-sm text-gray-700">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span><span className="text-primary font-medium">꾸준한 관심과 콘텐츠 생산</span>이 가능한 주제인가?</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span><span className="text-primary font-medium">제품 리뷰나 체험단 연계</span>가 용이한가?</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span>이미지나 콘텐츠 수집이 쉬운 주제인가?</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">블로그 제목과 닉네임 설정</h4>
                              <div className="mt-3 space-y-4">
                                <div>
                                  <h5 className="text-sm font-medium mb-2">블로그 제목</h5>
                                  <div className="space-y-2">
                                    <div className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <div>
                                        <span className="font-medium">주제 연관성</span>
                                        <p className="text-gray-600">블로그의 주제와 연관된 키워드 포함</p>
                                      </div>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded-lg">
                                      <p className="text-sm font-medium text-gray-800 mb-2">제목 예시</p>
                                      <ul className="space-y-1 text-sm text-gray-600">
                                        <li>• <span className="text-primary">리뷰하는 지은</span> (리뷰 블로거)</li>
                                        <li>• <span className="text-primary">맛있는 일상의 기록</span> (맛집/요리 블로거)</li>
                                        <li>• <span className="text-primary">건강한 라이프 스타일</span> (건강/운동 블로거)</li>
                                        <li>• <span className="text-primary">육아맘의 솔직리뷰</span> (육아 블로거)</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>

                                <div>
                                  <h5 className="text-sm font-medium mb-2">닉네임</h5>
                                  <div className="flex items-start">
                                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                    <div>
                                      <span className="font-medium">블로그 컨셉과 일치</span>
                                      <p className="text-gray-600">예: 맛집탐험가, 뷰티로그, 육아하는집콕맘</p>
                                    </div>
                                  </div>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-800 mb-2">제목과 닉네임 설정 TIP</h5>
                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• <span className="text-primary font-medium">기억하기 쉽고 검색하기 좋은 이름</span> 선택</li>
                                    <li>• 전문성과 신뢰성을 담은 키워드 활용</li>
                                    <li>• 차별화된 특징을 담아내기</li>
                                    <li>• 향후 체험단 모집 시 해당 분야의 전문성 어필</li>
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-3 rounded-lg">
                                  <p className="text-sm text-gray-600">
                                    네이버 인플루언서들의 블로그를 벤치마킹하여 좋은 제목과 닉네임 아이디어를 얻어보세요.
                                  </p>
                                </div>
                              </div>
                            </div>
              
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">프로필 이미지</h4>
                              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                                <li>• 밝고 심플한 이미지 선택</li>
                                <li>• <span className="text-primary">전문성을 강조하기 위한 깔끔한 이미지</span> 사용</li>
                                <li>• 스노우앱 등 AI 툴을 활용한 프로필 사진 제작 추천</li>
                                <li>• 블로그 주제와 연관된 이미지</li>
                              </ul>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">프로필 설정 완성하기</h4>
                              <div className="space-y-4">
                                <div className="mt-2 p-4 bg-gray-50 rounded text-sm">
                                  <p className="italic text-gray-800 mb-3 font-medium">블로그 소개글 예시</p>
                                  <p className="italic text-gray-600">
                                    "안녕하세요! 일상과 후기 중심의 블로그입니다 ✨
                                    맛집, 뷰티 제품, 여행 등 다양한 경험을
                                    정직하고 솔직하게 기록하고 공유합니다.
                                    
                                    유튜브, 인스타그램, 틱톡 등 다양한 플랫폼에서도
                                    여러분과 소통하고 있어요! 😊
                                    
                                    📱 Instagram: @your_instagram
                                    🎥 YouTube: (채널명)
                                    ✨ TikTok: @your_tiktok
                                    
                                    ✉️ 협찬/제휴 문의: example@email.com"
                                  </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-800 mb-2">멀티 플랫폼 활동의 장점</h5>
                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li>• <span className="text-primary font-medium">광고주/체험단 운영자들의 높은 선호도</span></li>
                                    <li>• 다양한 플랫폼을 통한 콘텐츠 확산 가능</li>
                                    <li>• <span className="text-primary">체험단 선정 확률 상승</span></li>
                                    <li>• 브랜드 협업 기회 증가</li>
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-800 mb-2">💡 AI 활용 팁</h5>
                                  <p className="text-sm text-gray-600 mb-2">
                                    ChatGPT를 활용하여 멀티 플랫폼 활동을 강조하는 소개글을 작성해보세요:
                                  </p>
                                  <div className="bg-white p-3 rounded text-sm">
                                    <p className="italic text-gray-600">
                                      "내가 블로그, 인스타그램, 유튜브, 틱톡도 같이 하고 있다는 걸 강조해서 소개글을 작성해줘. 친근한 말투로!"
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* Step 3: 카테고리 구성 */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="step3" className="border-none">
                        <AccordionTrigger className="py-0 hover:no-underline">
                          <h3 className="text-xl font-medium">Step 3: 카테고리 구성</h3>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">카테고리 구성 방법</h4>
                              <div className="mt-3">
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                  <p className="text-sm text-gray-700">
                                    카테고리는 블로그의 성격과 운영 방향을 보여주는 <span className="text-primary font-medium">중요한 요소</span>입니다.
                                    처음에는 기본적인 카테고리로 시작하고, 블로그 성장에 따라 세분화하여 발전시켜 나가세요.
                                  </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                  <div className="space-y-2">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                      <p className="font-medium text-sm text-gray-800 mb-2">기본 카테고리</p>
                                      <ul className="space-y-2 text-sm text-gray-600">
                                        <li>• 공지사항</li>
                                        <li>• 일상</li>
                                        <li>• <span className="text-primary">제품 리뷰</span></li>
                                        <li>• <span className="text-primary">방문 후기</span></li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg p-4 shadow-sm">
                              <h4 className="font-medium text-gray-800">카테고리 설정 TIP</h4>
                              <div className="mt-3 space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span>주제별로 명확하게 구분하여 <span className="text-primary font-medium">방문자가 찾기 쉽게</span> 구성하기</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span>너무 많은 카테고리는 피하고, <span className="text-primary font-medium">핵심 주제 중심</span>으로 설정</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span><span className="text-primary font-medium">체험단/협찬 포스팅을 위한 별도 카테고리</span> 만들기</span>
                                    </li>
                                    <li className="flex items-start">
                                      <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                                      <span>내 주제의 인기 인플루언서 블로그를 벤치마킹하여 효과적인 카테고리 구조 참고하기</span>
                                    </li>
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h5 className="font-medium text-gray-800 mb-2">💡 카테고리 활용 예시</h5>
                                  <div className="space-y-3 text-sm text-gray-600">
                                    <p className="font-medium">맛집 블로거의 경우:</p>
                                    <ul className="space-y-1 ml-4">
                                      <li>• 공지사항</li>
                                      <li>• 일상</li>
                                      <li>• <span className="text-primary">맛집리뷰 - 서울</span></li>
                                      <li>• <span className="text-primary">맛집리뷰 - 경기</span></li>
                                      <li>• 카페/디저트</li>
                                      <li>• 제품리뷰</li>
                                      <li>• 요리/레시피</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>

                  {/* 마무리 조언 */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">💝 마무리 조언</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700 mb-3">완벽보다는 꾸준함이 중요합니다!</h4>
                        
                        <div className="space-y-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <ul className="space-y-2 text-sm text-blue-700">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>처음부터 모든 것을 완벽하게 할 필요 없습니다</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                                <span>1일 1포스팅의 꾸준함이 실력 향상의 지름길입니다</span>
                              </li>
                            </ul>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-green-700">
                              완벽한 시작을 기다리다 보면 시작조차 하지 못할 수 있습니다. 
                              지금 시작하고, 매일 조금씩 발전하는 것이 성공의 비결입니다.
                              작은 실천이 모여 큰 변화를 만듭니다! ✨
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
                          <li>• 블로그 URL</li>
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
                          <Label htmlFor="keywords">관심 키워드 (2개 이상)</Label>
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
