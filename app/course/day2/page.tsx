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
import ChecklistItem from "@/components/checklist-item"

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
                    체험단 심사에서 좋은 인상을 남길 수 있는 포스팅을 작성해봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* Step 1: Understanding Post Structure */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 1: 첫 포스팅의 기본 구조</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                        <h4 className="font-medium text-blue-600">필수 포함 요소</h4>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">매력적인 제목</span>
                              <p className="text-gray-600">주요 키워드 포함, 독자의 관심을 끄는 제목</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">고품질 이미지</span>
                              <p className="text-gray-600">최소 5장 이상의 잘 촬영된 사진</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">상세한 설명</span>
                              <p className="text-gray-600">300자 이상의 정보가 풍부한 본문</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-600 mb-3">포스팅 구조</h4>
                        <div className="space-y-3">
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">1. 도입부</p>
                            <p className="text-sm text-gray-600">주제 소개 및 글쓰기 계기</p>
                          </div>
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">2. 본문</p>
                            <p className="text-sm text-gray-600">3-4개의 소제목으로 구분된 상세 내용</p>
                          </div>
                          <div className="p-2 bg-purple-50 rounded">
                            <p className="font-medium">3. 마무리</p>
                            <p className="text-sm text-gray-600">총평 및 추천사항</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Image Composition */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 2: 이미지 구성하기</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-600 mb-3">사진 촬영 팁</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">밝은 조명</span>
                              <p className="text-gray-600">자연광을 활용하거나 밝은 실내에서 촬영</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">깔끔한 배경</span>
                              <p className="text-gray-600">산만하지 않은 깔끔한 배경 사용</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">다양한 각도</span>
                              <p className="text-gray-600">전체샷, 근접샷 등 다양한 구도 활용</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-600 mb-3">필수 사진 구성</h4>
                        <div className="space-y-2">
                          <div className="p-2 bg-blue-50 rounded">
                            <p className="font-medium">메인 이미지</p>
                            <p className="text-sm text-gray-600">주제를 대표하는 전체 컷</p>
                          </div>
                          <div className="p-2 bg-blue-50 rounded">
                            <p className="font-medium">디테일 이미지</p>
                            <p className="text-sm text-gray-600">중요 포인트를 보여주는 근접 촬영</p>
                          </div>
                          <div className="p-2 bg-blue-50 rounded">
                            <p className="font-medium">분위기 이미지</p>
                            <p className="text-sm text-gray-600">전체적인 상황이나 환경을 보여주는 컷</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Writing Content */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 3: 본문 작성하기</h3>
                    <div className="bg-white rounded-lg p-4 shadow-sm space-y-4">
                      <div className="border-l-4 border-pink-200 pl-4">
                        <h4 className="font-medium text-lg">[제주 브런치 카페] 바다뷰 맛집 '오션사이드'에서의 여유로운 아침</h4>
                        <p className="text-sm text-gray-500 mt-1">2025.05.03 | 카페 탐방</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h5 className="font-medium text-pink-600">도입부</h5>
                          <p className="text-sm text-gray-600">
                            "제주의 봄날, 에메랄드빛 바다를 바라보며 즐기는 브런치는 어떨까요? 
                            오늘은 제주 애월읍에 위치한, 바다뷰 맛집으로 유명한 '오션사이드'를 
                            방문했습니다. 특별한 아침을 찾는 제주 여행자들에게 완벽한 
                            브런치 카페를 소개해드릴게요."
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-pink-600">위치 및 분위기</h5>
                          <p className="text-sm text-gray-600">
                            "애월읍 해안도로 중간에 위치한 오션사이드는 통유리창 너머로 제주 
                            바다를 한눈에 담을 수 있는 카페입니다. 화이트톤의 모던한 인테리어와 
                            높은 천장이 개방감을 더해줍니다."
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-pink-600">메뉴 소개</h5>
                          <p className="text-sm text-gray-600">
                            "시그니처 메뉴인 '에그 베네딕트'(19,000원)는 촉촉한 잉글리시 머핀 위에 
                            수비드 에그와 홀란데이즈 소스가 조화를 이룹니다. 제주 당근으로 만든 
                            '당근 케이크'(8,000원)는 달콤함이 적절해 브런치와 잘 어울립니다."
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h5 className="font-medium text-pink-600">총평</h5>
                          <p className="text-sm text-gray-600">
                            "뛰어난 전망과 정성스러운 플레이팅, 그리고 맛까지 삼박자를 고루 갖춘 
                            브런치 카페입니다. 가격대가 다소 있지만, 특별한 아침을 즐기기에 충분히 
                            가치 있는 곳이라고 생각합니다. 제주 여행 중 인생 사진을 남기고 싶은 
                            분들께 강력 추천드립니다!"
                          </p>
                        </div>
                      </div>

                      <div className="text-sm text-gray-500 mt-4">
                        <p>주소: 제주특별자치도 제주시 애월읍 애월해안로 456</p>
                        <p>영업시간: 매일 09:00-20:00 (라스트오더 19:00)</p>
                        <p>주차: 건물 내 20대 가능</p>
                        <p>#제주카페 #애월카페 #제주브런치 #바다뷰 #오션뷰 #카페스타그램</p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Final Checklist */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">Step 4: 최종 체크리스트</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <ChecklistItem
                          title="이미지 품질"
                          description="고화질의 깔끔한 사진이 준비되었나요?"
                          checked={true}
                        />
                        <ChecklistItem
                          title="맞춤법 검사"
                          description="본문의 맞춤법을 검토했나요?"
                          checked={true}
                        />
                        <ChecklistItem
                          title="정보 정확성"
                          description="가격, 위치 등 정보가 정확한가요?"
                          checked={true}
                        />
                      </div>
                      <div className="space-y-3">
                        <ChecklistItem
                          title="태그 활용"
                          description="관련 키워드로 태그를 추가했나요?"
                          checked={true}
                        />
                        <ChecklistItem
                          title="가독성"
                          description="단락 구분이 잘 되어있나요?"
                          checked={true}
                        />
                        <ChecklistItem
                          title="완성도"
                          description="전체적인 글의 흐름이 자연스러운가요?"
                          checked={true}
                        />
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
