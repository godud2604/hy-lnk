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
import { toast } from "@/hooks/use-toast"
import CourseProgressHeader from "@/components/course-progress-header"

export default function Day2Page() {
  const [activeTab, setActiveTab] = useState("learn")
  const [formData, setFormData] = useState({
    postUrl: "",
    reflection: "",
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
      <CourseProgressHeader title="Day 2: 첫 번째 포스팅 작성" currentDay={2} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 2</CardTitle>
              <CardDescription className="text-base font-medium">첫 번째 포스팅 작성</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 45분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    2/6 단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 심사에 좋은 인상을 줄 수 있는 첫 포스팅 작성하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>효과적인 포스팅 구성 방법 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>고품질 사진 촬영 및 활용 방법 배우기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      포스팅 구성 템플릿.docx
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      사진 촬영 가이드.pdf
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day1">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Day 1
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day3">
                        Day 3
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
                  <CardTitle>첫 번째 포스팅 작성</CardTitle>
                  <CardDescription className="text-base">
                    체험단 심사에 좋은 인상을 줄 수 있는 첫 포스팅을 작성해봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">첫 포스팅의 중요성</h3>
                    <p className="text-gray-600 mb-4">
                      체험단 심사 시 블로그의 첫인상을 결정하는 것은 바로 포스팅입니다. 초반 포스팅은 내용의 깊이보다
                      꾸준한 기록과 성실함을 보여주는 것이 중요합니다.
                    </p>
                    <div className="bg-pink-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium mb-2">핵심 포인트</h4>
                      <p className="text-sm text-gray-600">
                        첫 포스팅은 완벽하지 않아도 괜찮습니다. 사진 3장 이상, 300자 이상의 글이면 충분합니다. 중요한
                        것은 <span className="font-medium">시작하는 것</span>입니다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">포스팅 주제 선정</h3>
                    <p className="text-gray-600 mb-4">
                      첫 포스팅은 자신이 편안하게 작성할 수 있는 주제로 선택하는 것이 좋습니다. 복잡한 리뷰보다는
                      일상적인 경험을 담은 글로 시작해보세요.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <img src="/cafe-visit-post.png" alt="카페 방문 포스팅" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">카페 방문</h5>
                          <p className="text-xs text-gray-500 mt-1">
                            최근 방문한 카페의 분위기, 메뉴, 맛 등을 소개하는 글
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img
                          src="/product-review-post.png"
                          alt="제품 리뷰 포스팅"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">제품 리뷰</h5>
                          <p className="text-xs text-gray-500 mt-1">
                            최근 구매한 제품의 사용 경험과 장단점을 소개하는 글
                          </p>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <img src="/daily-life-post.png" alt="일상 기록 포스팅" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">일상 기록</h5>
                          <p className="text-xs text-gray-500 mt-1">주말 나들이, 요리, 취미 활동 등 일상을 담은 글</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">💡 추천 주제</h4>
                      <p className="text-sm text-gray-600">
                        블로그 주제와 연관된 내용으로 선택하되, 너무 어렵게 생각하지 마세요. 예를 들어 뷰티 블로그라면
                        '오늘의 메이크업', 맛집 블로그라면 '동네 맛집 탐방' 등이 좋은 시작점입니다.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">효과적인 포스팅 구성</h3>
                    <p className="text-gray-600 mb-4">
                      체험단 심사관이 보는 포스팅의 핵심 요소와 구성 방법을 알아봅시다. 잘 구성된 포스팅은 읽기 쉽고
                      정보 전달력이 높습니다.
                    </p>

                    <div className="border rounded-lg overflow-hidden mb-4">
                      <div className="bg-pink-50 p-3 border-b">
                        <h4 className="font-medium">포스팅 구성 요소</h4>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">매력적인 제목</span>
                              <p className="text-gray-600 mt-0.5">
                                호기심을 자극하고 내용을 명확히 알려주는 제목을 작성하세요.
                                <br />
                                예: "[서울 강남] 분위기 좋은 카페 OOO에서 여유로운 오후"
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">인트로 (도입부)</span>
                              <p className="text-gray-600 mt-0.5">
                                방문 계기, 기대했던 점 등을 간략히 소개하며 글을 시작하세요.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">본문 (소제목 활용)</span>
                              <p className="text-gray-600 mt-0.5">
                                소제목을 활용해 내용을 구분하고, 각 부분에 관련 사진을 첨부하세요.
                                <br />
                                예: "카페 외관 및 분위기", "주문한 메뉴", "맛과 가격", "총평"
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">마무리</span>
                              <p className="text-gray-600 mt-0.5">
                                전체 경험을 요약하고 추천 여부, 다음 방문 계획 등을 언급하며 마무리하세요.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">포스팅 길이 가이드</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 최소 300자 이상, 이상적으로는 500-1000자 정도가 적당합니다.</li>
                        <li>• 너무 짧으면 정보가 부족하고, 너무 길면 읽기 어려울 수 있습니다.</li>
                        <li>• 문단은 2-3문장으로 짧게 나누어 가독성을 높이세요.</li>
                        <li>• 소제목을 활용해 내용을 구분하면 읽기 쉬워집니다.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">사진 촬영 및 활용 팁</h3>
                    <p className="text-gray-600 mb-4">
                      포스팅의 퀄리티를 결정하는 중요한 요소는 바로 사진입니다. 고품질 사진은 글의 신뢰도를 높이고
                      독자의 관심을 끌 수 있습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-green-50 p-3 border-b">
                          <h4 className="font-medium">사진 촬영 팁</h4>
                        </div>
                        <div className="p-3">
                          <ul className="space-y-1 text-sm">
                            <li>• 자연광을 활용하면 색감이 더 선명하게 표현됩니다.</li>
                            <li>• 배경이 지저분하지 않도록 주의하세요.</li>
                            <li>• 다양한 각도에서 촬영하여 여러 모습을 보여주세요.</li>
                            <li>• 스마트폰 카메라도 충분하지만, 밝은 곳에서 촬영하세요.</li>
                            <li>• 흔들림을 방지하기 위해 양손으로 안정적으로 잡으세요.</li>
                          </ul>
                        </div>
                      </div>

                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-green-50 p-3 border-b">
                          <h4 className="font-medium">사진 구성 팁</h4>
                        </div>
                        <div className="p-3">
                          <ul className="space-y-1 text-sm">
                            <li>• 최소 3장, 이상적으로는 5-10장의 사진을 포함하세요.</li>
                            <li>• 전체 모습과 세부 모습을 모두 담아주세요.</li>
                            <li>• 맛집이라면: 외관, 내부, 메뉴판, 음식, 디테일 샷</li>
                            <li>• 제품이라면: 패키지, 제품 전체, 텍스처, 사용 모습</li>
                            <li>• 사진마다 간단한 설명을 추가하면 더 좋습니다.</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">사진 편집 앱 추천</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        간단한 편집으로도 사진의 퀄리티를 높일 수 있습니다. 아래 앱들을 활용해보세요:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• VSCO: 자연스러운 필터와 편집 기능</li>
                        <li>• Snapseed: 세부적인 보정이 가능한 무료 앱</li>
                        <li>• Lightroom Mobile: 전문적인 편집이 가능한 앱</li>
                        <li>• Foodie: 음식 사진에 특화된 카메라 앱</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">포스팅 예시</h3>
                    <p className="text-gray-600 mb-4">
                      아래는 카페 방문 포스팅의 간단한 예시입니다. 구성과 흐름을 참고하세요.
                    </p>

                    <div className="border rounded-lg p-4 space-y-4">
                      <div>
                        <h4 className="font-medium">[서울 강남] 분위기 좋은 카페 '커피 오아시스'에서 여유로운 오후</h4>
                        <p className="text-sm text-gray-500 mt-1">2023.07.15 | 카페 탐방</p>
                      </div>

                      <div className="text-sm text-gray-600 space-y-3">
                        <p>
                          안녕하세요! 오늘은 강남역 근처에서 발견한 숨은 보석 같은 카페를 소개해드리려고 합니다. 회사
                          미팅 후 잠시 들른 '커피 오아시스'는 번화가 속 작은 휴식처 같은 곳이었어요.
                        </p>

                        <p className="text-pink-600">[카페 외관 및 내부 사진]</p>

                        <h5 className="font-medium">☕ 카페 위치 및 분위기</h5>
                        <p>
                          강남역 3번 출구에서 도보 5분 거리에 위치한 이 카페는 외관부터 시선을 사로잡았어요. 통유리창과
                          녹색 식물들로 장식된 입구가 특히 인상적이었습니다. 내부는 우드톤의 따뜻한 인테리어와 곳곳에
                          배치된 식물들이 편안한 분위기를 만들어냅니다.
                        </p>

                        <p className="text-pink-600">[메뉴판 및 주문한 음료 사진]</p>

                        <h5 className="font-medium">☕ 메뉴 및 가격</h5>
                        <p>
                          아메리카노 5,500원, 카페라떼 6,000원으로 강남 지역 치고는 양호한 가격대를 유지하고 있어요.
                          시그니처 메뉴인 '오아시스 라떼'(7,000원)를 주문했는데, 바닐라와 헤이즐넛의 달콤함이 어우러진
                          맛이 일품이었습니다. 디저트로는 수제 티라미수(6,500원)를 함께 즐겼어요.
                        </p>

                        <p className="text-pink-600">[음료와 디저트 클로즈업 사진]</p>

                        <h5 className="font-medium">☕ 맛과 서비스</h5>
                        <p>
                          오아시스 라떼는 달콤하면서도 커피 본연의 맛을 잘 살린 균형 잡힌 맛이었어요. 티라미수는 촉촉한
                          식감과 진한 마스카포네 치즈 맛이 인상적이었습니다. 직원분들도 친절하게 메뉴를 추천해주시고
                          자리까지 안내해주셔서 기분 좋게 방문할 수 있었어요.
                        </p>

                        <h5 className="font-medium">☕ 총평</h5>
                        <p>
                          바쁜 강남 한복판에서 잠시 휴식을 취하기 좋은 카페였습니다. 맛있는 음료와 디저트, 편안한
                          분위기까지 모두 만족스러웠어요. 다음에는 다른 시그니처 메뉴도 시도해보고 싶네요. 강남에서
                          여유로운 시간을 보내고 싶으신 분들께 추천드립니다!
                        </p>

                        <p>
                          <span className="text-gray-500">주소: 서울시 강남구 강남대로 123</span>
                          <br />
                          <span className="text-gray-500">영업시간: 매일 10:00-22:00</span>
                        </p>

                        <p>#강남카페 #강남역카페 #커피오아시스 #분위기좋은카페 #카페탐방 #디저트맛집 #서울카페</p>
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
                  <CardTitle>Day 2 과제 제출</CardTitle>
                  <CardDescription className="text-base">첫 번째 포스팅을 작성하고 URL을 제출해주세요.</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">과제 안내</h3>
                        <p className="text-sm text-gray-600">아래 항목을 작성하여 제출해주세요:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>• 첫 번째 포스팅 URL</li>
                          <li>• 포스팅을 작성하면서 느낀 점 (2-3줄)</li>
                          <li>• 포스팅 스크린샷 (선택사항)</li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="postUrl">포스팅 URL</Label>
                          <div className="flex">
                            <div className="bg-muted rounded-l-md flex items-center px-3 border border-r-0 border-input">
                              <LinkIcon className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <Input
                              id="postUrl"
                              placeholder="https://blog.naver.com/yourblog/post123456"
                              value={formData.postUrl}
                              onChange={(e) => handleInputChange("postUrl", e.target.value)}
                              className="rounded-l-none"
                            />
                          </div>
                          <p className="text-xs text-muted-foreground">작성한 포스팅의 URL을 입력해주세요.</p>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="reflection">포스팅을 작성하면서 느낀 점</Label>
                          <Textarea
                            id="reflection"
                            placeholder="포스팅을 작성하면서 어려웠던 점, 배운 점, 다음에 개선하고 싶은 점 등을 자유롭게 작성해주세요."
                            rows={3}
                            value={formData.reflection}
                            onChange={(e) => handleInputChange("reflection", e.target.value)}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="file">포스팅 스크린샷 (선택사항)</Label>
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
                      disabled={isSubmitting || !formData.postUrl || !formData.reflection}
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
