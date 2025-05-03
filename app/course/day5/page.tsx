"use client"

import type React from "react"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Clock, BarChart2, TrendingUp, CheckCircle } from "lucide-react"
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
      <CourseProgressHeader title="블로그 성장 전략 + 수익화" currentDay={5} totalDays={6} />

      <div className="grid md:grid-cols-3 gap-8 mt-8">
        {/* 사이드바 */}
        <div className="md:col-span-1">
          <Card>
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <CardTitle className="text-xl">Day 5</CardTitle>
              <CardDescription className="text-base font-medium">블로그 성장 전략 + 수익화</CardDescription>
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
                      <span>블로그 성장 전략 이해하기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>블로그 수익화 방법 배우기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>효율적인 콘텐츠 제작 전략 익히기</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-4 w-4 text-pink-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>수익화 성공 사례 분석하기</span>
                    </li>
                  </ul>
                </div>

                <Separator />

                <div className="space-y-3">
                  <h3 className="font-medium">다운로드 자료</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 성장 전략 체크리스트
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      블로그 수익화 가이드
                      <Download className="h-4 w-4 ml-auto" />
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start text-sm">
                      <FileText className="h-4 w-4 mr-2" />
                      콘텐츠 제작 전략 템플릿
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
                  <CardTitle>블로그 수익화를 위한 성장 전략</CardTitle>
                  <CardDescription className="text-base">
                    블로그 수익을 늘리기 위한 실전 성장 전략을 배워봅시다.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-8">
                  {/* 수익화 전략 섹션 */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">체험단 활동을 통한 수익화 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">파일 공유를 통한 수익화</h4>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">비밀번호가 걸린 일정 파일 공유</span>
                              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                                <li>1. 일정 엑셀 파일 작성</li>
                                <li>2. 내부에 제휴 링크 삽입</li>
                                <li>3. 비밀번호 설정</li>
                                <li>4. 댓글/스크랩 시 비밀번호 공유</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-purple-700">제휴 마케팅 활용</h4>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">마이리얼트립 제휴 프로그램</span>
                              <ul className="mt-1 space-y-1 text-sm text-gray-600">
                                <li>• 파트너 가입 및 링크 생성</li>
                                <li>• 여행 포스팅에 자연스러운 링크 삽입</li>
                                <li>• 월 평균 30만원 수익 달성 가능</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 콘텐츠 전략 섹션 */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">효율적인 콘텐츠 제작 전략</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-green-700">AI 활용 포스팅 작성</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <span className="font-medium">15분 포스팅 작성법</span>
                              <ol className="mt-1 space-y-1 text-gray-600">
                                <li>1. 잘 작성된 글 템플릿 준비</li>
                                <li>2. GPTs로 블로그 스타일 변환</li>
                                <li>3. Claude로 내용 보완</li>
                                <li>4. 미드저니로 이미지 생성</li>
                              </ol>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-blue-700">포스팅 최종 점검</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li>1. 모바일 화면 줄바꿈 확인</li>
                          <li>2. PC 화면 사진 정렬 확인</li>
                          <li>3. 썸네일 지정 확인</li>
                          <li>4. 카테고리 설정 확인</li>
                          <li>5. 공정위 문구 포함 확인</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 수익화 성공 사례 */}
                  <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">수익화 성공 사례</h3>
                    
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="space-y-4">
                        <div className="border-l-4 border-pink-200 pl-4">
                          <h4 className="font-medium text-lg">6개월 간의 블로그 수익화 여정</h4>
                          <div className="mt-2 space-y-2 text-sm text-gray-600">
                            <p>• 여행 포스팅 200건 작성</p>
                            <p>• 마이리얼트립 CPA + 원고료로 195만원 달성</p>
                            <p>• 월 평균 30만원의 안정적인 수익 창출</p>
                            <p>• 여행 인플루언서 없이도 수익화 성공</p>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">성공 요인 분석</h4>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• 일정 파일 공유로 블로그 지수 상승</li>
                            <li>• 자연스러운 제휴 링크 배치</li>
                            <li>• 꾸준한 포스팅 업로드</li>
                            <li>• AI 도구를 활용한 효율적인 작성</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 실전 팁 */}
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
                    <h3 className="text-xl font-medium mb-4">실전 성장 팁</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <h4 className="font-medium text-orange-700">지속 가능한 성장을 위한 조언</h4>
                        <ul className="mt-3 space-y-2 text-sm">
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>"부담 갖지 말고 시작하세요. 처음부터 완벽할 필요 없습니다."</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>"AI 도구를 활용해 작성 시간을 단축하세요."</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                            <span>"체험단과 제휴 마케팅을 적절히 조합하세요."</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium text-yellow-800 mb-2">주의사항</h4>
                        <ul className="space-y-1 text-sm text-yellow-800">
                          <li>• 무분별한 제휴 링크 사용 자제</li>
                          <li>• AI 생성 콘텐츠 과다 의존 주의</li>
                          <li>• 체험단 리뷰의 진정성 유지</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment" className="mt-0">
              <Card className="border-none shadow-md">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">5일차 과제</h2>

                  {!assignmentSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="growth-strategy">성장 전략 수립</Label>
                        <Textarea
                          id="growth-strategy"
                          placeholder="앞으로 3개월 간의 구체적인 블로그 성장 계획을 작성해주세요."
                          className="min-h-[200px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="income-plan">수익화 계획</Label>
                        <Textarea
                          id="income-plan"
                          placeholder="체험단 활동과 제휴 마케팅을 활용한 수익화 계획을 상세히 작성해주세요."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="content-strategy">콘텐츠 제작 전략</Label>
                        <Textarea
                          id="content-strategy"
                          placeholder="AI 도구 활용 계획을 포함한 효율적인 콘텐츠 제작 전략을 작성해주세요."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full">과제 제출하기</Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-green-600 mb-2">과제가 성공적으로 제출되었습니다!</h3>
                      <p className="text-gray-600 mb-6">24시간 이내에 피드백을 받으실 수 있습니다.</p>
                      <Button onClick={() => setAssignmentSubmitted(false)}>다시 제출하기</Button>
                    </div>
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
