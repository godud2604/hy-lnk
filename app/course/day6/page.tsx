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
      <CourseProgressHeader title="체험단 상위노출 + 고급 전략" currentDay={6} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 6</CardTitle>
              <CardDescription className="text-base font-medium">체험단 상위노출 + 고급 전략</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 40분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    마지막 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>완벽한 블로그 포스팅 체크리스트 마스터하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>구글 SEO 전략 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>수익화 전략 수립하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3"></div>
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      체험단 신청서 템플릿.docx
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      블로그 프로필 최적화 가이드.pdf
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day5">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Day 5
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" disabled className="opacity-50">
                      Day 7
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
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
                  <CardTitle>포스팅 완성도를 높이는 고급 전략</CardTitle>
                  <CardDescription className="text-base">
                    체험단 리뷰의 품질을 높이고 장기적인 수익화까지 연결하는 방법을 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 포스팅 체크리스트 섹션 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">블로그 포스팅 필수 체크리스트</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-lg text-blue-700">1. 게시 전 필수 확인 사항</h4>
                        <div className="mt-3 space-y-2">
                          <ChecklistItem
                            title="모바일 화면 미리보기"
                            description="줄바꿈이 자연스러운지 확인"
                            checked={true}
                          />
                          <ChecklistItem
                            title="PC 화면 미리보기"
                            description="사진 크기와 정렬 상태 체크"
                            checked={true}
                          />
                          <ChecklistItem
                            title="썸네일 확인"
                            description="매력적이고 클릭을 유도하는 이미지 선택"
                            checked={true}
                          />
                          <ChecklistItem
                            title="카테고리 설정"
                            description="적절한 카테고리 지정 여부"
                            checked={true}
                          />
                          <ChecklistItem
                            title="공정위 문구"
                            description="체험단 글의 경우 상단에 필수 표기"
                            checked={true}
                          />
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-lg text-green-700">2. SEO 최적화 포인트</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">제목 최적화</span>
                              <p className="text-gray-600">
                                - 25자 이내로 작성
                                - 핵심 키워드 포함
                                - 특수문자 최소화
                                - 지역명 활용 (해당되는 경우)
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">본문 최적화</span>
                              <p className="text-gray-600">
                                - 최소 1200자 이상 작성
                                - 키워드 자연스러운 배치
                                - 동일 키워드 과다 반복 금지
                                - 이미지 5장 이상 첨부
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 구글 SEO 전략 섹션 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">구글 노출 극대화 전략</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-lg text-pink-700">구글 SEO의 장점</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 네이버보다 긴 콘텐츠 수명</li>
                          <li>• 글의 퀄리티가 좋으면 장기 노출 가능</li>
                          <li>• 해외 독자 유입 가능</li>
                          <li>• 광고 수익과 연계 용이</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">구글 검색등록 방법</h4>
                        <ol className="list-decimal pl-5 space-y-2 text-sm">
                          <li>Google Search Console 가입</li>
                          <li>블로그 소유권 인증</li>
                          <li>사이트맵 제출</li>
                          <li>URL 검사 도구 활용</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* 수익화 전략 섹션 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">블로그 수익화 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-lg text-blue-700">1. 여행 블로그 수익화 팁</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 비밀번호가 걸린 일정 파일 공유</li>
                          <li>• 파일 내 제휴 링크 삽입</li>
                          <li>• 스크랩/댓글 유도로 지수 상승</li>
                          <li>• 자연스러운 관련 포스팅 유입 연결</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-lg text-green-700">2. 제휴 마케팅 활용</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 여행 플랫폼 파트너 프로그램 가입</li>
                          <li>• 자연스러운 링크 삽입</li>
                          <li>• 포스팅별 맞춤 제휴 상품 연결</li>
                          <li>• 시즌별 프로모션 활용</li>
                        </ul>
                      </div>

                      <div className="bg-softblue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-softblue-700 mb-2">수익화 성공 사례</h4>
                        <p className="text-sm">
                          "6개월 동안 여행 포스팅 200건으로 월평균 30만원의 
                          안정적인 수익 창출. 체험단 활동과 제휴 마케팅의 
                          시너지 효과로 달성"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment" className="mt-0">
              <Card className="border-none shadow-md"></Card>
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>Day 6 과제 제출</CardTitle>
                  <CardDescription className="text-base">
                    배운 내용을 활용하여 나만의 블로그 운영 전략을 수립해보세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">과제 안내</h3>
                        <p className="text-sm text-gray-600">
                          지금까지 배운 내용을 토대로 장기적인 블로그 운영 계획을 세워보세요.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="seo-strategy">SEO 전략 계획</Label>
                          <Textarea
                            id="seo-strategy"
                            placeholder="네이버와 구글 SEO를 위한 구체적인 실행 계획을 작성해주세요."
                            className="min-h-[150px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="monetization-plan">수익화 계획</Label>
                          <Textarea
                            id="monetization-plan"
                            placeholder="체험단 활동과 연계한 수익화 전략을 구체적으로 작성해주세요."
                            className="min-h-[150px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="content-strategy">콘텐츠 제작 전략</Label>
                          <Textarea
                            id="content-strategy"
                            placeholder="포스팅 품질 관리와 효율적인 콘텐츠 제작 계획을 작성해주세요."
                            className="min-h-[150px]"
                          />
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
                    </div>)}
                </CardContent>
                {!isSubmitted && (
                  <CardFooter className="flex justify-between border-t pt-6">
                    <Button variant="outline" onClick={() => setActiveTab("learn")}>
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      학습 내용으로 돌아가기
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      disabled={
                        isSubmitting ||
                        (assignmentType === "post" && !formData.postUrl) ||
                        (assignmentType === "plan" && !formData.title)
                      }
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
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
