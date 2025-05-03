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
      <CourseProgressHeader title="Day 1: 블로그 개설 및 주제 설정" currentDay={1} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 1</CardTitle>
              <CardDescription className="text-base font-medium">블로그 개설 및 주제 설정</CardDescription>
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
                      <span>체험단에 유리한 블로그 환경 구축하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 주제 선정 및 프로필 설정하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체계적인 카테고리 구성하기</span>
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
                  <CardTitle>블로그 개설 및 주제 설정</CardTitle>
                  <CardDescription className="text-base">
                    체험단 심사에 유리한 블로그 환경을 만들어봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* Step 1: Understanding Blog Platforms */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 1: 블로그 플랫폼 선택하기</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-600 mb-2">네이버 블로그 추천 이유</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>체험단 선정에 가장 유리 (대부분의 체험단이 네이버 블로그 선호)</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>네이버 검색엔진 최적화로 높은 노출 가능</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <span>블로그 활동지수(블덱스) 제공으로 성장 관리 용이</span>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-600 mb-2">실제 개설 방법</h4>
                        <ol className="space-y-2 text-sm list-decimal pl-4">
                          <li>네이버 계정으로 로그인</li>
                          <li>블로그 홈 &gt; 블로그 개설하기 클릭</li>
                          <li>블로그 주소 설정 (체험단 주제와 연관된 주소 추천)</li>
                          <li>기본 정보 입력 후 개설 완료</li>
                        </ol>
                        <div className="mt-4 p-3 bg-yellow-50 rounded text-sm">
                          <p className="font-medium text-yellow-800">💡 주소 설정 팁</p>
                          <p className="text-yellow-800">체험단 주제와 관련된 키워드를 포함하면 좋습니다.</p>
                          <p className="text-sm text-yellow-600 mt-1">예: beauty_review, daily_food 등</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Setting Blog Theme */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 2: 블로그 주제 선정하기</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <h5 className="font-medium">뷰티/화장품</h5>
                            <p className="text-xs text-gray-500">체험단 비중 30%+</p>
                          </div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• 스킨케어</li>
                          <li>• 메이크업</li>
                          <li>• 헤어/바디</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <h5 className="font-medium">맛집/식품</h5>
                            <p className="text-xs text-gray-500">체험단 비중 25%+</p>
                          </div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• 맛집 리뷰</li>
                          <li>• 식품 체험</li>
                          <li>• 카페 탐방</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-center">
                            <h5 className="font-medium">라이프스타일</h5>
                            <p className="text-xs text-gray-500">체험단 비중 20%+</p>
                          </div>
                        </div>
                        <ul className="text-sm space-y-1">
                          <li>• 가전제품</li>
                          <li>• 생활용품</li>
                          <li>• 인테리어</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-6 bg-blue-50 rounded-lg p-4">
                      <h4 className="font-medium mb-2">주제 선정 체크리스트</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <ChecklistItem
                            title="관심과 전문성"
                            description="지속적으로 컨텐츠를 생산할 수 있는 분야인가요?"
                            checked={false}
                          />
                          <ChecklistItem
                            title="체험단 수요"
                            description="해당 분야의 체험단 모집이 많은가요?"
                            checked={false}
                          />
                        </div>
                        <div className="space-y-2">
                          <ChecklistItem
                            title="차별화 가능성"
                            description="나만의 특별한 관점이나 경험이 있나요?"
                            checked={false}
                          />
                          <ChecklistItem
                            title="발전 가능성"
                            description="장기적으로 성장시킬 수 있는 주제인가요?"
                            checked={false}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Profile Setup */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 3: 프로필 설정하기</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 shadow-sm">
                          <h4 className="font-medium text-blue-600 mb-2">필수 프로필 요소</h4>
                          <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-medium">프로필 사진</span>
                                <p className="text-gray-600">전문성을 보여줄 수 있는 이미지 선택</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-medium">소개글</span>
                                <p className="text-gray-600">블로그 주제와 전문성을 강조한 설명</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                              <div>
                                <span className="font-medium">카테고리</span>
                                <p className="text-gray-600">체계적으로 구성된 콘텐츠 분류</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="font-medium text-yellow-800 mb-2">프로필 작성 팁</h4>
                          <ul className="text-sm space-y-2 text-yellow-800">
                            <li>• 전문성이 드러나는 닉네임 사용</li>
                            <li>• 관련 자격증이나 경력 언급</li>
                            <li>• 구체적인 관심 분야 명시</li>
                            <li>• 정기적인 업데이트 약속</li>
                          </ul>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-600 mb-4">프로필 작성 예시</h4>
                        <div className="space-y-4">
                          <div className="border-l-4 border-green-200 pl-4">
                            <p className="text-sm italic">
                              "안녕하세요, 3년차 뷰티 블로거 '화장품 탐험가' 입니다. 
                              피부관리사 자격증을 보유하고 있으며, 민감성 피부를 위한 
                              스킨케어 제품을 주로 리뷰합니다. 10년 동안의 화장품 사용 
                              경험을 바탕으로 꼼꼼한 성분 분석과 사용감 리뷰를 
                              제공합니다. 매주 2-3회 새로운 제품 리뷰로 찾아뵙겠습니다."
                            </p>
                          </div>
                          <div className="border-l-4 border-blue-200 pl-4">
                            <p className="text-sm italic">
                              "맛있는 발견의 즐거움, 맛남맛집입니다. 
                              호텔조리학과 졸업 후 5년간의 외식 업계 경험을 바탕으로 
                              서울/경기 지역의 숨은 맛집을 소개합니다. 
                              주 3회 새로운 맛집 리뷰와 요리 레시피를 공유하고 있습니다."
                            </p>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-blue-50 rounded">
                          <p className="text-xs text-blue-800">
                            💡 위 예시들은 각각의 전문성, 경험, 포스팅 주기를 명확히 
                            보여주고 있어 체험단 선정에 유리합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Category Setup */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 4: 카테고리 구성하기</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-600 mb-3">뷰티 블로그 카테고리 예시</h4>
                        <div className="space-y-2">
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">스킨케어</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 기초 화장품</li>
                              <li>• 마스크팩</li>
                              <li>• 선크림</li>
                            </ul>
                          </div>
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">메이크업</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 베이스 메이크업</li>
                              <li>• 아이 메이크업</li>
                              <li>• 립 메이크업</li>
                            </ul>
                          </div>
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">체험단 리뷰</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 스킨케어 체험</li>
                              <li>• 메이크업 체험</li>
                              <li>• 신제품 체험</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-pink-600 mb-3">맛집 블로그 카테고리 예시</h4>
                        <div className="space-y-2">
                          <div className="p-2 bg-pink-50 rounded">
                            <p className="font-medium">지역별 맛집</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 서울 맛집</li>
                              <li>• 경기 맛집</li>
                              <li>• 부산 맛집</li>
                            </ul>
                          </div>
                          <div className="p-2 bg-pink-50 rounded">
                            <p className="font-medium">음식 종류</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 한식</li>
                              <li>• 일식</li>
                              <li>• 양식</li>
                            </ul>
                          </div>
                          <div className="p-2 bg-pink-50 rounded">
                            <p className="font-medium">체험단 방문</p>
                            <ul className="text-sm pl-4 mt-1">
                              <li>• 식당 체험</li>
                              <li>• 카페 체험</li>
                              <li>• 신상 맛집</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">카테고리 구성 체크리스트</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <ChecklistItem
                            title="체계적인 분류"
                            description="콘텐츠를 논리적으로 분류했나요?"
                            checked={true}
                          />
                          <ChecklistItem
                            title="검색 최적화"
                            description="검색하기 쉬운 카테고리명인가요?"
                            checked={true}
                          />
                        </div>
                        <div className="space-y-2">
                          <ChecklistItem
                            title="확장성"
                            description="향후 콘텐츠 확장을 고려했나요?"
                            checked={true}
                          />
                          <ChecklistItem
                            title="사용자 편의성"
                            description="방문자가 찾기 쉽게 구성했나요?"
                            checked={true}
                          />
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
