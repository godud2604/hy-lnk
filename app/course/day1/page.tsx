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
                    체험단에 유리한 블로그 환경을 구축하고 주제를 선정해봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">블로그는 신뢰를 쌓는 공간</h3>
                    <p className="text-gray-600 mb-4">
                      체험단 활동에서 블로그는 단순한 글쓰기 공간이 아닌, 브랜드와 독자에게 신뢰를 주는 공간입니다.
                      프로필, 주제, 디자인이 첫인상을 결정하며, 이는 체험단 선정에 큰 영향을 미칩니다.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-2">핵심 포인트</h4>
                      <p className="text-sm text-gray-600">
                        처음에는 완벽하게 하기보다 <span className="font-medium">시작하는 것</span>이 더 중요합니다.
                        기본적인 설정을 마치고 꾸준히 개선해 나가세요.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">블로그 플랫폼 선택</h3>
                    <p className="text-gray-600 mb-4">
                      체험단 활동에는 네이버 블로그가 가장 유리합니다. 국내 최대 포털 사이트인 네이버는 검색 노출과
                      체험단 선정에 유리한 환경을 제공합니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-green-50 p-3 border-b">
                          <h4 className="font-medium">네이버 블로그 장점</h4>
                        </div>
                        <div className="p-3">
                          <ul className="space-y-1 text-sm">
                            <li>• 국내 최대 검색 엔진 네이버와 연동</li>
                            <li>• 대부분의 체험단이 네이버 블로그 선호</li>
                            <li>• 블로그 지수(블덱스) 측정 가능</li>
                            <li>• 사용자 친화적인 인터페이스</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-blue-50 p-3 border-b">
                          <h4 className="font-medium">티스토리 장점</h4>
                        </div>
                        <div className="p-3">
                          <ul className="space-y-1 text-sm">
                            <li>• 더 자유로운 디자인 커스터마이징</li>
                            <li>• 광고 수익화에 유리</li>
                            <li>• 전문적인 이미지 구축 가능</li>
                            <li>• 구글 검색 노출에 유리</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💡 추천</h4>
                      <p className="text-sm text-gray-600">
                        체험단 활동이 주 목적이라면 네이버 블로그를 선택하세요. 이미 다른 플랫폼에서 활동 중이라면,
                        네이버 블로그를 추가로 개설하는 것도 좋은 전략입니다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">블로그 주제 선정</h3>
                    <p className="text-gray-600 mb-4">
                      체험단에 유리한 블로그는 명확한 주제가 있는 블로그입니다. 너무 다양한 주제를 다루기보다는 1-2개의
                      주제에 집중하는 것이 좋습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <img src="/beauty-blog-theme.png" alt="뷰티 블로그 테마" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">뷰티/화장품</h5>
                          <p className="text-xs text-gray-500 mt-1">
                            화장품, 스킨케어, 메이크업 등 뷰티 관련 체험단이 가장 많습니다.
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img src="/food-blog-theme.png" alt="맛집 블로그 테마" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">맛집/식품</h5>
                          <p className="text-xs text-gray-500 mt-1">
                            맛집 방문, 식품 리뷰 등 먹거리 관련 체험단도 인기가 많습니다.
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img
                          src="/lifestyle-blog-theme.png"
                          alt="라이프스타일 블로그 테마"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">라이프스타일</h5>
                          <p className="text-xs text-gray-500 mt-1">
                            가전, 생활용품, 인테리어 등 다양한 제품 리뷰가 가능합니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">주제 선정 팁</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 자신이 관심 있고 지속적으로 콘텐츠를 생산할 수 있는 주제를 선택하세요.</li>
                        <li>• 너무 좁은 주제보다는 확장 가능성이 있는 주제가 좋습니다.</li>
                        <li>• 경쟁이 심한 주제라면 차별화 포인트를 생각해보세요.</li>
                        <li>• 체험단 모집이 많은 분야를 고려하세요 (뷰티, 식품, 가전 등).</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">프로필 설정</h3>
                    <p className="text-gray-600 mb-4">
                      프로필은 블로그 방문자와 체험단 담당자에게 보여지는 첫인상입니다. 전문성과 신뢰감을 줄 수 있는
                      프로필을 설정하세요.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-4">
                      <div className="bg-pink-50 p-3 border-b">
                        <h4 className="font-medium">효과적인 프로필 구성 요소</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">프로필 사진</span>
                              <p className="text-gray-600 mt-0.5">
                                얼굴이 나온 사진이나 블로그 주제와 연관된 이미지를 사용하세요.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">닉네임</span>
                              <p className="text-gray-600 mt-0.5">
                                블로그 주제와 연관되거나 기억하기 쉬운 닉네임을 사용하세요.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">소개글</span>
                              <p className="text-gray-600 mt-0.5">
                                블로그 주제, 운영 목적, 전문 분야 등을 간결하게 작성하세요.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">대표 글 설정</span>
                              <p className="text-gray-600 mt-0.5">
                                퀄리티 높은 글을 대표 글로 설정하여 첫인상을 좋게 만드세요.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">프로필 작성 예시</h4>
                      <div className="text-sm text-gray-600 border-l-2 border-green-300 pl-3 italic">
                        "안녕하세요, 30대 직장인 뷰티 블로거 '화장품 탐험가' 입니다. 민감성 피부를 위한 스킨케어 제품과
                        데일리 메이크업 팁을 주로 소개합니다. 10년간의 화장품 사용 경험을 바탕으로 솔직하고 디테일한
                        리뷰를 작성하고 있어요. 함께 나에게 맞는 화장품을 찾아가요! 💄✨"
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">카테고리 구성</h3>
                    <p className="text-gray-600 mb-4">
                      체계적인 카테고리 구성은 블로그의 전문성을 높이고 방문자의 탐색을 돕습니다. 최소 5개 이상의
                      카테고리를 구성하��� 것이 좋습니다.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-4">
                      <div className="bg-blue-50 p-3 border-b">
                        <h4 className="font-medium">카테고리 구성 예시 (뷰티 블로그)</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">스킨케어</span> - 기초 화장품, 마스크팩, 선크림 등
                          </li>
                          <li>
                            <span className="font-medium">메이크업</span> - 베이스, 아이, 립 메이크업 등
                          </li>
                          <li>
                            <span className="font-medium">헤어/바디</span> - 샴푸, 바디워시, 핸드크림 등
                          </li>
                          <li>
                            <span className="font-medium">체험단 리뷰</span> - 체험단으로 받은 제품 리뷰
                          </li>
                          <li>
                            <span className="font-medium">뷰티 팁</span> - 메이크업 팁, 스킨케어 루틴 등
                          </li>
                          <li>
                            <span className="font-medium">신제품 소개</span> - 새롭게 출시된 제품 정보
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-blue-50 p-3 border-b">
                        <h4 className="font-medium">카테고리 구성 예시 (맛집 블로그)</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2 text-sm">
                          <li>
                            <span className="font-medium">지역별 맛집</span> - 서울, 경기, 부산 등 지역별 분류
                          </li>
                          <li>
                            <span className="font-medium">음식 종류</span> - 한식, 양식, 중식, 일식, 디저트 등
                          </li>
                          <li>
                            <span className="font-medium">가격대</span> - 가성비 맛집, 프리미엄 레스토랑 등
                          </li>
                          <li>
                            <span className="font-medium">체험단 방문</span> - 체험단으로 방문한 맛집 리뷰
                          </li>
                          <li>
                            <span className="font-medium">홈쿠킹</span> - 집에서 만든 요리, 레시피 등
                          </li>
                          <li>
                            <span className="font-medium">식품 리뷰</span> - 마트, 편의점 신상품 리뷰
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t pt-6">
                  <Button onClick={() => setActiveTab("assignment")}>
                    과제 제출하러 가기
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
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
