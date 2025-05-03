"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import ChecklistItem from "@/components/checklist-item"
import CourseProgressHeader from "@/components/course-progress-header"

export default function Day4Course() {
  const [activeTab, setActiveTab] = useState("learn")
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAssignmentSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <CourseProgressHeader title="체험단 사이트 가입 + 신청 실습" currentDay={4} totalDays={6} />

      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h3 className="text-lg font-bold mb-4">4일차 학습 목표</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>주요 체험단 사이트 가입하기</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>체험단 신청 방법 이해하기</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>체험단 선정 확률 높이는 방법 배우기</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>실제 체험단 신청 실습하기</span>
              </li>
            </ul>

            <h3 className="text-lg font-bold mb-4">다운로드 자료</h3>
            <div className="space-y-3 mb-6">
              <Button variant="outline" className="w-full justify-start">
                <Download className="mr-2 h-4 w-4" />
                체험단 사이트 리스트
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                체험단 신청서 작성 가이드
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                체험단 선정 노하우
              </Button>
            </div>

            <div className="flex justify-between mt-8">
              <Button variant="outline" asChild>
                <Link href="/course/day3">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  이전 단계
                </Link>
              </Button>
              <Button asChild>
                <Link href="/course/day5">
                  다음 단계
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:w-3/4">
          <Tabs defaultValue="learn" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="learn">학습하기</TabsTrigger>
              <TabsTrigger value="assignment">과제 제출</TabsTrigger>
            </TabsList>

            <TabsContent value="learn" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">주요 체험단 사이트 소개</h2>
                  <p className="mb-4">
                    체험단 활동을 시작하기 위해서는 다양한 체험단 사이트에 가입하는 것이 중요합니다. 아래는 추천하는
                    주요 체험단 사이트입니다:
                  </p>

                  <div className="space-y-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-bold text-blue-700">1. 위블로그</h3>
                      <p>국내 최대 규모의 체험단 사이트로, 다양한 카테고리의 제품과 서비스를 체험할 수 있습니다.</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h3 className="font-bold text-purple-700">2. 레뷰</h3>
                      <p>식품, 뷰티, 생활용품 등 다양한 제품 체험 기회가 많은 사이트입니다.</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h3 className="font-bold text-green-700">3. 체험뷰</h3>
                      <p>방문형 체험단이 많아 맛집, 카페, 숙소 등의 체험 기회가 많습니다.</p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-lg">
                      <h3 className="font-bold text-amber-700">4. 리뷰플레이스</h3>
                      <p>초보 블로거도 선정 확률이 높은 체험단 사이트입니다.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">체험단 신청 방법</h2>
                  <p className="mb-4">체험단 신청은 각 사이트마다 약간의 차이가 있지만, 기본적인 절차는 비슷합니다:</p>

                  <ol className="list-decimal pl-5 space-y-3 mb-6">
                    <li>체험단 사이트에 로그인합니다.</li>
                    <li>관심 있는 체험단 모집 공고를 찾습니다.</li>
                    <li>신청서 양식에 맞게 정보를 입력합니다.</li>
                    <li>블로그 정보와 체험 후기 작성 계획을 상세히 작성합니다.</li>
                    <li>신청 완료 후 선정 결과를 기다립니다.</li>
                  </ol>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                    <h3 className="font-bold text-yellow-700">중요 팁!</h3>
                    <p>신청서 작성 시 성의 있고 구체적인 계획을 작성하는 것이 선정 확률을 높이는 핵심입니다.</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">체험단 선정 확률 높이는 방법</h2>

                  <div className="space-y-4 mb-6">
                    <ChecklistItem
                      title="블로그 꾸미기"
                      description="프로필, 소개글, 카테고리 등을 깔끔하게 정리하여 신뢰도를 높입니다."
                      checked={true}
                    />
                    <ChecklistItem
                      title="관련 포스팅 미리 작성하기"
                      description="신청하려는 제품/서비스와 관련된 포스팅을 미리 작성해두면 선정 확률이 높아집니다."
                      checked={true}
                    />
                    <ChecklistItem
                      title="구체적인 후기 계획 작성하기"
                      description="어떤 내용으로, 어떻게 후기를 작성할지 구체적인 계획을 제시합니다."
                      checked={true}
                    />
                    <ChecklistItem
                      title="꾸준한 포스팅 활동"
                      description="블로그 활동이 꾸준하다는 것을 보여주는 것이 중요합니다."
                      checked={true}
                    />
                    <ChecklistItem
                      title="신청서 맞춤화하기"
                      description="각 체험단마다 신청서를 맞춤화하여 작성하는 것이 중요합니다."
                      checked={true}
                    />
                  </div>

                  <div className="bg-softblue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-softblue-700 mb-2">실습 과제</h3>
                    <p>
                      오늘 배운 내용을 바탕으로 최소 2개의 체험단 사이트에 가입하고, 관심 있는 체험단에 1개 이상
                      신청해보세요.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="assignment">
              <Card>
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
