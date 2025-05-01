"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, FileText, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import useAuth from "@/hooks/useAuth"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import _ from "lodash"


export default function DashboardPage() {
  const { user } = useAuth()
  const [courseProgress, setCourseProgress] = useState({
    currentDay: 1,
    totalDays: 6,
    completedDays: 0,
    lastActivity: "",
    pendingFeedback: false,
  })


  const baseModules = [
    { day: 1, title: "블로그 개설 및 주제 설정" },
    { day: 2, title: "첫 번째 포스팅 작성" },
    { day: 3, title: "키워드 선정 및 상위노출 연습" },
    { day: 4, title: "체험단 사이트 가입 + 신청 실습" },
    { day: 5, title: "블로그 지수 관리 + 블덱스 활용" },
    { day: 6, title: "당첨 후기 포스팅 마스터"},
  ]
  
  // Lodash map으로 status 설정
  const courseModules: { day: number; status: string; title: string; feedback?: boolean; feedbackText?: string; }[] = _.map(baseModules, (module) => {
    return {
      ...module,
      status:
        module.day < courseProgress.currentDay
          ? "completed"
          : module.day === courseProgress.currentDay
          ? "in-progress"
          : "locked",
    }
  })

  useEffect(() => {
    if (!user) return

    const fetchUserProgress = async () => {
      const userRef = doc(db, "users", user.uid)
      const userSnap = await getDoc(userRef)

      if (userSnap.exists()) {
        const data = userSnap.data()
        setCourseProgress({
          currentDay: data.currentDay ?? 1,
          totalDays: data.totalDays ?? 6,
          completedDays: data.completedDays ?? 0,
          lastActivity: data.lastActivity ?? "",
          pendingFeedback: data.pendingFeedback ?? false,
        })
      }
    }

    fetchUserProgress()
  }, [user])

  const progress = (courseProgress.completedDays / courseProgress.totalDays) * 100

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">내 학습 대시보드</h1>
          <p className="text-muted-foreground mt-1">6일 체험단 마스터 과정의 진행 상황을 확인하고 관리하세요.</p>
        </div>
        <div className="flex items-center gap-2">
          {/* <Button variant="outline" asChild>
            <Link href="/community">커뮤니티 방문</Link>
          </Button> */}
          <Button className="bg-pink-600 hover:bg-pink-700" asChild>
            <Link href={`/course/day${courseProgress.currentDay}`}>학습 계속하기</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 왼쪽 사이드바 */}
        <div className="space-y-6">
          {/* 진행 상황 카드 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>학습 진행 상황</CardTitle>
              <CardDescription>6일 체험단 마스터 과정</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>전체 진행률</span>
                    <span className="font-medium">{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-muted-foreground">완료한 단계</div>
                    <div className="text-xl font-bold mt-1">
                      {courseProgress.completedDays}/{courseProgress.totalDays}
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <div className="text-muted-foreground">마지막 활동</div>
                    <div className="text-xl font-bold mt-1">{courseProgress.lastActivity}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-pink-50 rounded-lg p-3 text-sm">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span>현재 단계</span>
                  </div>
                  <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">
                    Day {courseProgress.currentDay}
                  </Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              {courseProgress.pendingFeedback ? (
                <div className="w-full bg-yellow-50 text-yellow-800 rounded-lg p-3 text-sm">
                  <div className="font-medium mb-1">피드백 대기 중</div>
                  <p>제출한 과제에 대한 피드백이 곧 도착할 예정입니다.</p>
                </div>
              ) : (
                <Button className="w-full bg-pink-600 hover:bg-pink-700" asChild>
                  <Link href={`/course/day${courseProgress.currentDay}`}>
                    학습 계속하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>

          {/* 수강생 정보 카드 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>내 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <span className="text-xl font-bold text-pink-600">JK</span>
                </div>
                <div>
                  <h3 className="font-medium">김지은</h3>
                  <p className="text-sm text-muted-foreground">jieun@example.com</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1">프리미엄 회원</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <h4 className="font-medium text-sm mb-2">내 블로그 정보</h4>
                <p className="text-sm text-muted-foreground mb-1">블로그 URL:</p>
                <a
                  href="https://blog.naver.com/jieun_kim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-pink-600 hover:underline"
                >
                  https://blog.naver.com/jieun_kim
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="md:col-span-2 space-y-6">
          {/* 코스 모듈 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>코스 모듈</CardTitle>
              <CardDescription>각 단계별 진행 상황과 피드백을 확인하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseModules.map((module: { day: number; status: string; title: string; feedback?: boolean; feedbackText?: string; }) => (
                  <div
                    key={module.day}
                    className={`border rounded-lg overflow-hidden ${
                      module.status === "in-progress" ? "border-pink-200" : "border-gray-200"
                    } ${module.status === "locked" ? "cursor-not-allowed opacity-75" : ""}`}
                  >
                    <div
                      className={`p-4 flex items-start justify-between ${
                        module.status === "in-progress"
                          ? "bg-pink-50"
                          : module.status === "completed"
                            ? "bg-green-50"
                            : "bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                            module.status === "completed"
                              ? "bg-green-500 text-white"
                              : module.status === "in-progress"
                                ? "bg-pink-500 text-white"
                                : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {module.status === "completed" ? <CheckCircle className="h-5 w-5" /> : module.day}
                        </div>
                        <div>
                          <h3 className="font-medium">
                            Day {module.day}: {module.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {module.status === "completed"
                              ? "완료됨"
                              : module.status === "in-progress"
                                ? "진행 중"
                                : "잠김"}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant={module.status === "locked" ? "outline" : "default"}
                        size="sm"
                        disabled={module.status === "locked"}
                        className={module.status === "in-progress" ? "bg-pink-600 hover:bg-pink-700" : ""}
                        asChild
                      >
                        {module.status === "locked" ? (
                          <span className="cursor-not-allowed">잠김</span>
                        ) : (
                          <Link href={`/course/day${module.day}`}>
                            {module.status === "completed" ? "다시 보기" : "계속하기"}
                          </Link>
                        )}
                      </Button>
                    </div>

                    {module.feedback && (
                      <div className="p-4 border-t border-gray-200 bg-white">
                        <h4 className="text-sm font-medium mb-2">멘토 피드백:</h4>
                        <p className="text-sm text-gray-600">{module.feedbackText}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 추천 자료 */}
          {/* <Card>
            <CardHeader className="pb-2">
              <CardTitle>추천 자료</CardTitle>
              <CardDescription>학습에 도움이 되는 추가 자료를 확인하세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">2023 인기 체험단 키워드 모음</h3>
                    <p className="text-sm text-muted-foreground mb-3">검색량이 많은 체험단 관련 키워드 TOP 100</p>
                    <Button variant="outline" size="sm" className="w-full">
                      다운로드
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
                    <FileText className="h-10 w-10 text-white" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium mb-1">체험단 신청서 작성 템플릿</h3>
                    <p className="text-sm text-muted-foreground mb-3">합격률을 높이는 신청서 작성 가이드</p>
                    <Button variant="outline" size="sm" className="w-full">
                      다운로드
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  )
}
