"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import ChecklistItem from "@/components/checklist-item"
import CourseProgressHeader from "@/components/course-progress-header"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Day4Course() {
  const [activeTab, setActiveTab] = useState("learn")
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAssignmentSubmitted(true)
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="체험단 사이트 가입 + 신청 실습" currentDay={4} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 4</CardTitle>
              <CardDescription className="text-base font-medium">체험단 사이트 가입 + 신청 실습</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 60분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    4단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>주요 체험단 사이트 가입하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 신청 방법 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>체험단 선정 확률 높이는 방법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>실제 체험단 신청 실습하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      체험단 사이트 리스트
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      체험단 신청서 작성 가이드
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      체험단 선정 노하우
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day3">
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        이전
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day5">
                        다음
                        <ChevronRight className="h-4 w-4 ml-2" />
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
              <TabsTrigger value="assignment" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800">
                과제 제출
              </TabsTrigger>
            </TabsList>

            <TabsContent value="learn" className="mt-0">
              <Card className="border-none shadow-md">
                <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
                  <CardTitle>체험단 신청의 모든 것</CardTitle>
                  <CardDescription className="text-base">
                    트래픽 기준 TOP 체험단 사이트별 특징과 신청 노하우를 알아봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 체험단 사이트 소개 섹션 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">인기 체험단 사이트 TOP 5</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">1. 리뷰노트 (435,000회)</h4>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium">특징</p>
                              <ul className="mt-1 text-gray-600 space-y-1">
                                <li>• 국내 최대 규모</li>
                                <li>• 다양한 카테고리</li>
                                <li>• 신규 블로거 진입 장벽 낮음</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">2. 레뷰 (172,000회)</h4>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium">특징</p>
                              <ul className="mt-1 text-gray-600 space-y-1">
                                <li>• 식품/뷰티 전문</li>
                                <li>• 고가 제품 체험 기회 많음</li>
                                <li>• 선정 확률 중간</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">3. 리뷰플레이스 (67,700회)</h4>
                        <div className="mt-2 space-y-2 text-sm">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium">특징</p>
                              <ul className="mt-1 text-gray-600 space-y-1">
                                <li>• 초보 블로거 친화적</li>
                                <li>• 다양한 지역 업체</li>
                                <li>• 빠른 선정 결과</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 체험단 신청 전략 섹션 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">체험단 신청 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">1. 신청서 작성 팁</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">친근하고 자연스러운 톤</span>
                              <p className="text-gray-600">
                                예시: "안녕하세요? 월급이 적으신가요? 블로그 체험단으로
                                부수입을 만들어보세요!"
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">구체적인 리뷰 계획</span>
                              <p className="text-gray-600">촬영 계획, 콘텐츠 구성, 홍보 방안 등 상세히 기술</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">차별화 포인트</span>
                              <p className="text-gray-600">본인만의 특별한 리뷰 방식이나 전문성 어필</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">2. 신청 시기 전략</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 새벽 시간대 신청 경쟁 낮음 (새벽 1-4시)</li>
                          <li>• 월요일 오전 신규 모집 공고 많음</li>
                          <li>• 계절성 제품은 1-2개월 전 미리 신청</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">3. 업체별 맞춤 전략</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>• 식당/카페: 사진 촬영 실력 강조</li>
                          <li>• 뷰티: 피부 타입/관련 지식 언급</li>
                          <li>• 숙소: 여행 콘텐츠 제작 경험 강조</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 실전 신청서 작성 예시 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">실전 신청서 작성 예시</h3>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-pink-700">✅ 좋은 예시</h4>
                          <div className="mt-2 p-4 bg-pink-50 rounded-lg text-sm">
                            <p className="italic">
                              "안녕하세요, 3년차 카페 리뷰어 '커피탐험가'입니다.
                              DSLR과 미러리스 카메라로 매장의 분위기를 가장 아름답게
                              담아내는 것이 제 리뷰의 특징입니다. 
                              
                              촬영 계획:
                              1. 오픈 직후 햇살 가득한 매장 전경
                              2. 시그니처 메뉴 상세 컷 (탑뷰/측면)
                              3. 디저트 플레이팅 연출컷
                              
                              홍보 계획:
                              - 인스타그램 스토리 3회 이상 공유
                              - 맛집 카페 채널 공유
                              - 블로그 상단 고정 1주일"
                            </p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-red-700">❌ 나쁜 예시</h4>
                          <div className="mt-2 p-4 bg-red-50 rounded-lg text-sm">
                            <p className="italic">
                              "체험하고 싶어요! 꼭 선정해주세요 ㅠㅠ 
                              열심히 리뷰 쓸게요! 예쁘게 찍어서 많이 홍보해드릴게요~"
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
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">4일차 과제 제출</h2>

                  {assignmentSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">과제가 성공적으로 제출되었습니다!</h3>
                      <p className="text-gray-600 mb-6">24시간 이내에 피드백을 받으실 수 있습니다.</p>
                      <Button onClick={() => setAssignmentSubmitted(false)}>다시 제출하기</Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="sites">가입한 체험단 사이트 (최소 2개)</Label>
                        <Input id="sites" placeholder="예: 위블로그, 레뷰" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="application">신청한 체험단 정보</Label>
                        <Textarea
                          id="application"
                          placeholder="체험단 제목, 사이트명, 신청 날짜를 적어주세요."
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="strategy">신청 시 사용한 전략</Label>
                        <Textarea
                          id="strategy"
                          placeholder="체험단 신청 시 어떤 전략을 사용했는지 설명해주세요."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="screenshot">체험단 신청 스크린샷 (선택사항)</Label>
                        <Input id="screenshot" type="file" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="questions">질문이나 어려웠던 점</Label>
                        <Textarea
                          id="questions"
                          placeholder="체험단 신청 과정에서 어려웠던 점이나 질문이 있다면 작성해주세요."
                          className="min-h-[100px]"
                        />
                      </div>

                      <Button type="submit" className="w-full">
                        과제 제출하기
                      </Button>
                    </form>
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
