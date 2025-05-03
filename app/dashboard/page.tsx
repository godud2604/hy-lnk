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
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const { user } = useAuth()
  const [courseProgress, setCourseProgress] = useState({
    currentDay: 1,
    totalDays: 7,
    completedDays: 0,
    lastActivity: "",
    pendingFeedback: false,
  })

  const baseModules = [
    { day: 1, title: "블로그 개설부터 완성까지" },
    { day: 2, title: "블로그 글쓰기의 기초" },
    { day: 3, title: "방문자 수 올리는 상위노출 전략" },
    { day: 4, title: "체험단 신청하는 법 A to Z" },
    { day: 5, title: "신뢰도 높은 후기 작성법" },
    { day: 6, title: "블로그 지수 올리는 루틴" },
    { day: 7, title: "수익형 블로그 첫걸음" },
  ]
  
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

  interface ModuleProps {
    day: number;
    status: string;
    title: string;
    feedback?: boolean;
    feedbackText?: string;
  }

  const ProgressCard = ({ module }: { module: ModuleProps }) => (
    <Card className={cn(
      "relative overflow-hidden transition-all",
      module.status === "completed" ? "bg-green-50" : 
      module.status === "in-progress" ? "bg-pink-50" : 
      "bg-gray-50"
    )}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant={
            module.status === "completed" ? "default" :
            module.status === "in-progress" ? "secondary" :
            "outline"
          }>
            Day {module.day}
          </Badge>
          <span className="text-sm text-muted-foreground">
            {module.status === "completed" ? "완료" :
             module.status === "in-progress" ? "진행중" :
             "잠김"}
          </span>
        </div>
        <CardTitle className="text-lg">{module.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Progress value={
            module.status === "completed" ? 100 :
            module.status === "in-progress" ? 50 :
            0
          } />
          <p className="text-sm text-muted-foreground">
            {module.status === "completed" ? "과제 제출 완료" :
             module.status === "in-progress" ? "학습 진행중" :
             "이전 단계를 완료하세요"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-end pt-0">
        <Button 
          variant={module.status === "locked" ? "outline" : "default"}
          disabled={module.status === "locked"}
          asChild
        >
          <Link href={`/course/day${module.day}`}>
            시작하기
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )

  useEffect(() => {
    if (!user) return

    const fetchUserProgress = async () => {
      const userRef = doc(db, "users", user.uid)
      const userSnap = await getDoc(userRef)

      if (userSnap.exists()) {
        const data = userSnap.data()
        setCourseProgress({
          currentDay: data.currentDay ?? 1,
          totalDays: data.totalDays ?? 7,
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
          <p className="text-muted-foreground mt-1">7일 블로그 초보자 입문 과정의 진행 상황을 확인하고 관리하세요.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-pink-600 hover:bg-pink-700" asChild>
            <Link href={`/course/day${courseProgress.currentDay}`}>학습 계속하기</Link>
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>학습 진행 상황</CardTitle>
              <CardDescription>7일 블로그 초보자 입문 과정</CardDescription>
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

        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>코스 모듈</CardTitle>
              <CardDescription>
                블로그 초보자를 위한 단계별 학습을 진행해보세요. 매일 새로운 스킬을 배우고 실습할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {courseModules.map((module) => (
                  <ProgressCard key={module.day} module={module} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
