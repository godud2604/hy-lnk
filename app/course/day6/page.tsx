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
                  <CardTitle>당첨 후 후기 포스팅 마스터</CardTitle>
                  <CardDescription className="text-base">
                    체험단 당첨 후 브랜드와 독자 모두에게 호감을 얻는 후기 작성법을 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">후기 포스팅의 중요성</h3>
                    <p className="text-gray-600 mb-4">
                      후기 포스팅은 체험단 활동의 꽃이자 마무리입니다. 잘 작성된 후기는 다음과 같은 효과가 있습니다:
                    </p>
                    <ul className="space-y-2 pl-5 list-disc text-gray-600">
                      <li>
                        브랜드에게 좋은 인상을 주어 <span className="font-medium">재선정 확률이 높아집니다.</span>
                      </li>
                      <li>
                        독자들에게 <span className="font-medium">신뢰도 높은 정보</span>를 제공합니다.
                      </li>
                      <li>
                        블로그 <span className="font-medium">방문자 수와 체류 시간이 증가</span>합니다.
                      </li>
                      <li>
                        검색 노출이 잘 되어 <span className="font-medium">블로그 지수 상승</span>에 도움이 됩니다.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-medium flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-pink-600 mr-2" />
                      후기 포스팅 9가지 체크리스트
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      아래 9가지 항목을 모두 포함하면 완벽한 후기 포스팅이 완성됩니다!
                    </p>

                    {/* <div className="space-y-3">
                      <ChecklistItem title="업체명 + 체험 제품명 명확히 작성" description="검색 노출에 중요" checked={false}> 
                        제목과 본문 초반에 업체명과 제품명을 정확히 언급하세요. 검색 노출에 중요합니다.
                      </ChecklistItem>

                      <ChecklistItem title="체험 전 기대했던 부분 솔직하게 적기">
                        제품을 사용하기 전 어떤 점이 궁금했는지, 어떤 효과를 기대했는지 작성하세요.
                      </ChecklistItem>

                      <ChecklistItem title="실제 사용 후 모습 (착용/사용 전후 사진)">
                        제품 사용 전/후 비교 사진이나 실제 사용 모습을 담은 사진을 포함하세요.
                      </ChecklistItem>

                      <ChecklistItem title="본인의 한줄 요약 느낌">
                        전체 경험을 한 문장으로 요약하여 독자들이 빠르게 파악할 수 있게 해주세요.
                      </ChecklistItem>

                      <ChecklistItem title="추천할만한 포인트 2가지">
                        제품의 장점을 최소 2가지 이상 구체적으로 설명하세요.
                      </ChecklistItem>

                      <ChecklistItem title="아쉬운 점 1가지 (부드럽게 표현)">
                        너무 완벽한 리뷰보다는 작은 아쉬운 점을 언급하면 신뢰도가 높아집니다.
                      </ChecklistItem>

                      <ChecklistItem title="키워드 자연스럽게 10회 이상 활용">
                        주요 키워드를 본문에 자연스럽게 10회 이상 포함시켜 검색 노출을 높이세요.
                      </ChecklistItem>

                      <ChecklistItem title="포스팅 말미에 감사 멘트 + 재체험 희망">
                        체험 기회에 감사하다는 멘트와 함께 재체험 희망 의사를 표현하세요.
                      </ChecklistItem>

                      <ChecklistItem title="관련 해시태그 5개 이상 포함">
                        포스팅 하단에 관련 해시태그를 5개 이상 포함시켜 검색 노출을 높이세요.
                      </ChecklistItem>
                    </div> */}
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">샘플 이미지 구성</h3>
                    <p className="text-gray-600 mb-4">
                      효과적인 후기 포스팅을 위해 다음과 같은 이미지를 포함하는 것이 좋습니다:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white border rounded-lg overflow-hidden">
                        <img
                          src="/before-after-comparison.png"
                          alt="전/후 비교 사진"
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">전/후 비교 사진</h5>
                          <p className="text-xs text-gray-500">제품 사용 효과를 시각적으로 보여줍니다.</p>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg overflow-hidden">
                        <img src="/product-usage.png" alt="제품 사용 컷" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">제품 사용 컷</h5>
                          <p className="text-xs text-gray-500">실제 사용 모습을 담아 현실감을 높입니다.</p>
                        </div>
                      </div>

                      <div className="bg-white border rounded-lg overflow-hidden">
                        <img src="/visit-proof.png" alt="방문 인증샷" className="w-full h-40 object-cover" />
                        <div className="p-3">
                          <h5 className="font-medium text-sm">방문 인증샷 / 후기 메시지</h5>
                          <p className="text-xs text-gray-500">실제 체험 증명과 신뢰도를 높입니다.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">📸 사진 촬영 팁</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• 자연광에서 촬영하면 제품 색상이 가장 정확하게 표현됩니다.</li>
                        <li>• 같은 각도, 같은 조명에서 전/후 사진을 촬영하세요.</li>
                        <li>• 제품 패키지, 성분표, 사용법 등 상세 정보도 촬영하세요.</li>
                        <li>• 사진은 최소 10장 이상 포함하는 것이 좋습니다.</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-3">후기 포스팅 예시</h3>

                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="example1">
                        <AccordionTrigger className="font-medium">뷰티 제품 후기 포스팅 예시</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm">
                            <p className="font-medium">
                              제목: [체험단] 피부 결점 커버력 최강! 브랜드A 파운데이션 솔직 리뷰
                            </p>

                            <p className="text-gray-600">
                              안녕하세요, 오늘은 <span className="text-pink-600">브랜드A의 신제품 파운데이션</span>을
                              체험해볼 기회가 있어 솔직한 후기를 들고 왔습니다. 평소 커버력 있는 파운데이션을 찾고
                              있었는데, 이 제품이 정말 기대되더라고요.
                            </p>

                            <p className="text-gray-600">[제품 외관 및 패키지 사진]</p>

                            <p className="text-gray-600">
                              먼저 <span className="text-pink-600">브랜드A 파운데이션</span>의 패키지는 고급스러운
                              디자인으로 선물용으로도 좋을 것 같아요. 제품 용량은 30ml로 일반적인 파운데이션과 비슷한
                              양입니다.
                            </p>

                            <p className="text-gray-600">[사용 전 피부 사진]</p>

                            <p className="text-gray-600">
                              제 피부는 볼 부분에 붉은 기가 있고, 이마에 여드름 자국이 있는 편인데요. 과연{" "}
                              <span className="text-pink-600">브랜드A 파운데이션</span>이 이런 결점을 잘 커버해줄지 정말
                              궁금했어요.
                            </p>

                            <p className="text-gray-600">[사용 후 피부 사진]</p>

                            <p className="text-gray-600">
                              와우! 정말 놀라운 커버력이에요. 붉은 기와 여드름 자국이 자연스럽게 가려졌어요. 한 줄
                              요약하자면 "
                              <span className="font-medium">가볍게 발리면서도 커버력은 강한 파운데이션</span>"이라고 할
                              수 있겠네요.
                            </p>

                            <p className="text-gray-600">
                              <span className="font-medium">추천 포인트 2가지:</span>
                              <br />
                              1. 가볍게 발리면서도 놀라운 커버력을 제공합니다.
                              <br />
                              2. 10시간 이상 지속되어 수정 메이크업이 필요 없어요.
                            </p>

                            <p className="text-gray-600">
                              <span className="font-medium">아쉬운 점:</span>
                              <br />
                              색상 선택의 폭이 5가지로 조금 제한적인 점이 아쉬웠어요. 더 다양한 피부톤을 위한 색상이
                              추가되면 좋을 것 같습니다.
                            </p>

                            <p className="text-gray-600">
                              이번에 <span className="text-pink-600">브랜드A 파운데이션</span>을 체험할 수 있는 기회를
                              주셔서 정말 감사합니다. 앞으로도 브랜드A의 새로운 제품들을 체험해보고 싶네요! 여러분도
                              커버력 좋은 파운데이션을 찾고 계시다면{" "}
                              <span className="text-pink-600">브랜드A 파운데이션</span>을 추천드립니다.
                            </p>

                            <p className="text-gray-600">
                              #브랜드A #파운데이션 #커버력좋은파운데이션 #메이크업 #뷰티템 #체험단
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="example2">
                        <AccordionTrigger className="font-medium">맛집 방문 후기 포스팅 예시</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 text-sm">
                            <p className="font-medium">
                              제목: [서울 강남] 분위기 갑! 레스토랑B에서 즐긴 특별한 코스 요리
                            </p>

                            <p className="text-gray-600">
                              안녕하세요, 오늘은 <span className="text-pink-600">강남 레스토랑B</span>에 방문한 후기를
                              들고 왔습니다. 인스타그램에서 자주 보이던 곳이라 기대가 컸는데요, 과연 그 맛은 어땠을지
                              솔직하게 알려드릴게요!
                            </p>

                            <p className="text-gray-600">[레스토랑 외관 및 내부 사진]</p>

                            <p className="text-gray-600">
                              <span className="text-pink-600">레스토랑B</span>는 강남역에서 도보 5분 거리에 위치해 있어
                              접근성이 좋았어요. 내부는 모던한 인테리어로 데이트하기 좋은 분위기였습니다.
                            </p>

                            <p className="text-gray-600">[메뉴판 및 주문 음식 사진]</p>

                            <p className="text-gray-600">
                              이번에 <span className="text-pink-600">레스토랑B</span>에서는 시그니처 코스 요리를
                              주문했어요. 전채, 수프, 메인, 디저트로 구성된 풀코스였는데요, 한 줄 요약하자면 "
                              <span className="font-medium">맛과 비주얼 모두 만족스러운 프리미엄 다이닝</span>
                              "이었습니다.
                            </p>

                            <p className="text-gray-600">
                              <span className="font-medium">추천 포인트 2가지:</span>
                              <br />
                              1. 신선한 재료로 만든 요리들의 맛이 일품입니다.
                              <br />
                              2. 인스타그래머블한 플레이팅으로 사진 찍기 좋아요.
                            </p>

                            <p className="text-gray-600">
                              <span className="font-medium">아쉬운 점:</span>
                              <br />
                              주말에는 예약이 필수인데, 2주 전부터 예약해야 원하는 시간에 방문할 수 있어요.
                            </p>

                            <p className="text-gray-600">
                              이번에 <span className="text-pink-600">레스토랑B</span>를 방문할 수 있는 기회를 주셔서
                              정말 감사합니다. 다음에도 새로운 메뉴가 출시되면 꼭 다시 방문하고 싶네요! 특별한 날 맛있는
                              식사를 원하신다면 <span className="text-pink-600">강남 레스토랑B</span>를 추천드립니다.
                            </p>

                            <p className="text-gray-600">
                              #강남맛집 #레스토랑B #데이트코스 #프리미엄다이닝 #코스요리 #체험단
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
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
