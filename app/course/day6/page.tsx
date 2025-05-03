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
      <CourseProgressHeader title="Day 6 Overview" currentDay={6} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 6</CardTitle>
              <CardDescription className="text-base font-medium">당첨 후 후기 포스팅 마스터</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 30분</span>
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
                      <span>효과적인 후기 포스팅 작성법 습득</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>브랜드와 독자 모두에게 호감을 얻는 리뷰 구성법 이해</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>재선정 확률을 높이는 후기 작성 노하우 습득</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      후기 포스팅 템플릿.docx
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      제품 사진 촬영 가이드.pdf
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
                  <CardTitle>체험단 당첨을 위한 필수 전략</CardTitle>
                  <CardDescription className="text-base">
                    체험단에 지속적으로 선정되기 위한 핵심 전략과 노하우를 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">체험단 선정의 핵심 요소</h3>
                    <p className="text-gray-600 mb-4">
                      체험단 담당자들이 블로거를 선정할 때 중요하게 보는 요소들을 알아봅시다:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-gray-600">
                      <li>
                        <span className="font-medium">블로그 프로필의 전문성</span> - 특정 분야에 대한 전문성이 드러나는
                        프로필
                      </li>
                      <li>
                        <span className="font-medium">포스팅 품질과 일관성</span> - 꾸준하고 양질의 콘텐츠 작성
                      </li>
                      <li>
                        <span className="font-medium">블로그 지수</span> - 방문자 수, 이웃 수, 포스팅 주기 등
                      </li>
                      <li>
                        <span className="font-medium">이전 체험단 리뷰 이력</span> - 성실한 리뷰 작성 이력
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-pink-600 mr-2" />
                      체험단 선정률 높이는 8가지 팁
                    </h4>
                    <div className="space-y-3">
                      <ChecklistItem
                        title="관련 분야 포스팅 미리 작성하기"
                        description="신청하려는 제품/서비스와 관련된 포스팅을 3-4개 이상 작성해두세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="프로필에 전문성 강조하기"
                        description="특정 분야에 대한 관심과 전문성을 프로필에 효과적으로 표현하세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="신청서 차별화하기"
                        description="복사/붙여넣기가 아닌, 해당 제품만의 특별한 리뷰 계획을 작성하세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="포스팅 주기 유지하기"
                        description="최소 주 2-3회 이상 꾸준한 포스팅으로 활성화된 블로그임을 보여주세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="사진 촬영 실력 어필하기"
                        description="기존 포스팅에서 고품질 사진 촬영 능력을 보여주세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="성의있는 컨텐츠 보여주기"
                        description="단순 정보 나열이 아닌, 실제 경험과 인사이트가 담긴 콘텐츠를 작성하세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="블로그 테마 일관성 유지하기"
                        description="산발적인 주제보다는 특정 분야에 집중된 전문성을 보여주세요."
                        checked={true}
                      />
                      <ChecklistItem
                        title="검색 노출 최적화하기"
                        description="키워드 선정과 활용으로 검색 노출이 잘 되는 블로그임을 증명하세요."
                        checked={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">효과적인 체험단 신청서 작성법</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="p-4 bg-green-50">
                          <h4 className="font-medium text-green-800">권장하는 작성 방식</h4>
                          <ul className="mt-2 space-y-2 text-sm">
                            <li>• 제품/서비스만의 특별한 점 언급</li>
                            <li>• 구체적인 리뷰 계획 제시</li>
                            <li>• 관련 경험이나 전문성 어필</li>
                            <li>• 차별화된 촬영 계획 포함</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="p-4 bg-red-50">
                          <h4 className="font-medium text-red-800">피해야 할 작성 방식</h4>
                          <ul className="mt-2 space-y-2 text-sm">
                            <li>• 단순 복사/붙여넣기 신청서</li>
                            <li>• 구체성 없는 모호한 계획</li>
                            <li>• 성의 없는 짧은 내용</li>
                            <li>• 과도한 감정 표현</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">신청서 작성 예시</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                      <div>
                        <h4 className="font-medium text-pink-600">좋은 예시</h4>
                        <div className="mt-2 p-4 bg-white rounded border text-sm space-y-2">
                          <p>
                            "안녕하세요. 3년차 뷰티 블로거입니다. 현재까지 50여개의 기초케어 제품을 리뷰해왔으며, 특히
                            민감성 피부를 위한 제품 리뷰에 전문성이 있습니다.
                          </p>
                          <p>이번 제품의 특별한 점인 저자극 포뮬러에 대해 다음과 같이 리뷰하고자 합니다:</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>전성분 분석 및 민감성 피부 적합성 테스트</li>
                            <li>2주간의 사용 기록 (아침/저녁 진행상황 사진 첨부)</li>
                            <li>기존 사용 제품과의 비교 분석</li>
                            <li>피부 타입별 추천 여부</li>
                          </ul>
                          <p>
                            매크로렌즈를 활용한 텍스처 클로즈업 촬영으로 제품의 특징을 상세히 보여드리겠습니다."
                          </p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-red-600">피해야 할 예시</h4>
                        <div className="mt-2 p-4 bg-white rounded border text-sm">
                          <p>
                            "안녕하세요~ 이 제품 너무 좋아보여서 꼭 써보고 싶어요! 제품 받으면 열심히 리뷰 작성해드릴게요!
                            예쁘게 촬영해서 솔직한 후기 올리도록 하겠습니다. 선정해주시면 감사하겠습니다!"
                          </p>
                        </div>
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
                  <CardTitle>Day 6 과제 제출</CardTitle>
                  <CardDescription className="text-base">
                    체험 후 후기 포스팅 URL을 제출하거나, 아직 당첨 전이라면 후기 포스팅 계획안을 제출해주세요.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium mb-2">과제 안내</h3>
                        <p className="text-sm text-gray-600">아래 두 가지 옵션 중 하나를 선택하여 제출해주세요:</p>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600">
                          <li>
                            • <span className="font-medium">옵션 1:</span> 체험 후기 포스팅 URL 제출 - 이미 체험단에
                            당첨되어 후기를 작성한 경우
                          </li>
                          <li>
                            • <span className="font-medium">옵션 2:</span> 후기 포스팅 계획안 제출 - 아직 당첨 전이라면
                            향후 작성할 후기 계획 제출
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex space-x-4">
                          <Button
                            variant={assignmentType === "post" ? "default" : "outline"}
                            onClick={() => setAssignmentType("post")}
                            className={assignmentType === "post" ? "bg-pink-600 hover:bg-pink-700" : ""}
                          >
                            후기 포스팅 URL 제출
                          </Button>
                          <Button
                            variant={assignmentType === "plan" ? "default" : "outline"}
                            onClick={() => setAssignmentType("plan")}
                            className={assignmentType === "plan" ? "bg-pink-600 hover:bg-pink-700" : ""}
                          >
                            후기 포스팅 계획안 제출
                          </Button>
                        </div>

                        {assignmentType === "post" ? (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="postUrl">후기 포스팅 URL</Label>
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
                              <p className="text-xs text-muted-foreground">
                                네이버, 티스토리 등 블로그 포스팅 URL을 입력해주세요.
                              </p>
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
                        ) : (
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="title">계획 중인 포스팅 제목</Label>
                              <Input
                                id="title"
                                placeholder="예: [체험단] 브랜드A 신제품 파운데이션 솔직 리뷰"
                                value={formData.title}
                                onChange={(e) => handleInputChange("title", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="subheadings">계획 중인 소제목들</Label>
                              <Textarea
                                id="subheadings"
                                placeholder="예: 1. 제품 소개 및 첫인상&#10;2. 사용감 및 지속력&#10;3. 장단점 분석&#10;4. 총평 및 추천"
                                rows={4}
                                value={formData.subheadings}
                                onChange={(e) => handleInputChange("subheadings", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="photoPlans">계획 중인 사진 구성</Label>
                              <Textarea
                                id="photoPlans"
                                placeholder="예: 1. 제품 외관 및 패키지 사진&#10;2. 사용 전/후 비교 사진&#10;3. 제품 발색 사진&#10;4. 사용 중인 모습"
                                rows={4}
                                value={formData.photoPlans}
                                onChange={(e) => handleInputChange("photoPlans", e.target.value)}
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="additionalNotes">추가 계획 사항 (선택사항)</Label>
                              <Textarea
                                id="additionalNotes"
                                placeholder="추가로 계획 중인 내용이나 질문이 있다면 자유롭게 작성해주세요."
                                rows={3}
                                value={formData.additionalNotes}
                                onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                              />
                            </div>
                          </div>
                        )}
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
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
