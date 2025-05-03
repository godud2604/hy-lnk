"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Clock, BarChart2, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ChecklistItem from "@/components/checklist-item"
import CourseProgressHeader from "@/components/course-progress-header"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Day5Course() {
  const [activeTab, setActiveTab] = useState("learn")
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAssignmentSubmitted(true)
  }

  return (
    <div className="container py-8 md:py-12">
      <CourseProgressHeader title="블로그 지수 관리 + 블덱스 활용" currentDay={5} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 5</CardTitle>
              <CardDescription className="text-base font-medium">블로그 지수 관리 + 블덱스 활용</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm">예상 학습 시간: 45분</span>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                    5단계
                  </Badge>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">학습 목표</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 지수의 중요성 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 지수 향상 방법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블덱스 도구 활용법 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 성장 전략 수립하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 지수 체크리스트
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블덱스 활용 가이드
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 성장 전략 템플릿
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">이전/다음 단계</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day4">
                        <ChevronLeft className="h-4 w-4 mr-2" />
                        이전
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/course/day6">
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
                  <CardTitle>블로그 지수 관리와 블덱스 활용</CardTitle>
                  <CardDescription className="text-base">
                    체험단 선정을 위한 블로그 지수 관리와 성장 전략을 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">블로그 지수란?</h2>
                      <p className="mb-4">
                        블로그 지수는 블로그의 영향력과 활동성을 나타내는 지표입니다. 체험단 선정에 중요한 역할을 하며,
                        블로그의 가치를 평가하는 기준이 됩니다.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h3 className="font-bold text-blue-700 flex items-center">
                            <BarChart2 className="mr-2 h-5 w-5" />
                            방문자 수
                          </h3>
                          <p>일일 방문자 수와 누적 방문자 수는 블로그 영향력의 기본 지표입니다.</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h3 className="font-bold text-green-700 flex items-center">
                            <TrendingUp className="mr-2 h-5 w-5" />
                            이웃 수
                          </h3>
                          <p>블로그 이웃 수는 블로그의 인기도와 신뢰도를 나타냅니다.</p>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <h3 className="font-bold text-purple-700">콘텐츠 품질</h3>
                          <p>포스팅의 길이, 이미지 수, 구성 등 콘텐츠의 품질도 중요한 지표입니다.</p>
                        </div>
                        <div className="p-4 bg-amber-50 rounded-lg">
                          <h3 className="font-bold text-amber-700">포스팅 주기</h3>
                          <p>꾸준한 포스팅 활동은 블로그 지수 향상에 필수적입니다.</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <h3 className="font-bold text-yellow-700">알아두세요!</h3>
                        <p>
                          네이버 블로그의 경우 '블로그 활동 지수'라는 공식 지표가 있으며, 이는 체험단 선정에 직접적인 영향을
                          미칩니다.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">블로그 지수 향상 방법</h2>

                      <div className="space-y-4 mb-6">
                        <ChecklistItem
                          title="꾸준한 포스팅"
                          description="주 3-4회 이상 꾸준히 포스팅하는 것이 중요합니다."
                          checked={false}
                        />
                        <ChecklistItem
                          title="양질의 콘텐츠 작성"
                          description="단순한 글보다는 정보가 풍부하고 유용한 콘텐츠를 작성하세요."
                          checked={true}
                        />
                        <ChecklistItem
                          title="이웃 소통 활성화"
                          description="다른 블로그를 방문하고 댓글을 남기며 소통하세요."
                          checked={true}
                        />
                        <ChecklistItem
                          title="SEO 최적화"
                          description="검색 엔진에 잘 노출되도록 키워드를 적절히 활용하세요."
                          checked={true}
                        />
                        <ChecklistItem
                          title="다양한 콘텐츠 형식 활용"
                          description="텍스트, 이미지, 동영상 등 다양한 형식의 콘텐츠를 활용하세요."
                          checked={true}
                        />
                      </div>

                      <div className="relative h-64 w-full mb-6 rounded-lg overflow-hidden">
                        <Image src="/blog-growth-chart.png" alt="블로그 성장 그래프" fill className="object-cover" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold mb-4">블덱스(BlogDex) 활용법</h2>
                      <p className="mb-4">
                        블덱스는 블로그 분석 및 관리를 위한 강력한 도구입니다. 블로그 성장을 위해 효과적으로 활용해보세요.
                      </p>

                      <div className="space-y-6 mb-6">
                        <div className="border rounded-lg p-4">
                          <h3 className="font-bold text-lg mb-2">1. 블로그 현황 분석</h3>
                          <p className="mb-2">블덱스를 통해 내 블로그의 현재 상태를 객관적으로 분석할 수 있습니다.</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>방문자 통계 확인</li>
                            <li>인기 게시물 분석</li>
                            <li>유입 키워드 확인</li>
                          </ul>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-bold text-lg mb-2">2. 경쟁 블로그 분석</h3>
                          <p className="mb-2">같은 주제의 인기 블로그를 분석하여 성공 전략을 배울 수 있습니다.</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>인기 블로거의 콘텐츠 전략 파악</li>
                            <li>효과적인 키워드 활용법 학습</li>
                            <li>콘텐츠 구성 및 형식 벤치마킹</li>
                          </ul>
                        </div>

                        <div className="border rounded-lg p-4">
                          <h3 className="font-bold text-lg mb-2">3. 키워드 연구</h3>
                          <p className="mb-2">효과적인 키워드 선정으로 검색 노출을 극대화할 수 있습니다.</p>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>인기 검색어 및 연관 키워드 발굴</li>
                            <li>경쟁이 적은 틈새 키워드 찾기</li>
                            <li>시즌별 트렌드 키워드 활용</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-2">실습 과제</h3>
                        <p>블덱스를 활용하여 자신의 블로그를 분석하고, 향후 3개월간의 블로그 성장 전략을 수립해보세요.</p>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment" className="mt-0">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">5일차 과제 제출</h2>

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
                        <Label htmlFor="blog-stats">현재 블로그 지수 현황</Label>
                        <Textarea
                          id="blog-stats"
                          placeholder="방문자 수, 이웃 수, 포스팅 수 등 현재 블로그 지수 현황을 작성해주세요."
                          className="min-h-[100px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="blog-analysis">블덱스를 활용한 블로그 분석 결과</Label>
                        <Textarea
                          id="blog-analysis"
                          placeholder="블덱스로 분석한 내 블로그의 강점과 약점을 작성해주세요."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="growth-strategy">3개월 블로그 성장 전략</Label>
                        <Textarea
                          id="growth-strategy"
                          placeholder="향후 3개월간 블로그 지수를 향상시키기 위한 구체적인 전략을 작성해주세요."
                          className="min-h-[200px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="screenshot">블로그 지수 스크린샷 (선택사항)</Label>
                        <Input id="screenshot" type="file" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="questions">질문이나 어려운 점</Label>
                        <Textarea
                          id="questions"
                          placeholder="블로그 지수 관리나 블덱스 활용에 관해 질문이나 어려운 점이 있다면 작성해주세요."
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
