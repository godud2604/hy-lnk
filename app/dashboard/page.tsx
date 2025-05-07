"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, FileText, MessageCircle, Star, User, Send } from "lucide-react"
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
import { Separator } from "@/components/ui/separator"
import { toast } from "@/hooks/use-toast"

export default function MyPage() {
  const { user } = useAuth()
  const [courseProgress, setCourseProgress] = useState({
    currentDay: 0,
    totalDays: 6,
    completedDays: 0,
    lastActivity: "",
    pendingFeedback: false,
    feedbackReceived: false,
    feedbackContent: "",
    hasPaidCourse: false,
    userInfo: {
      name: "",
      email: "",
      membershipType: "",
    }
  })

  const baseModules = [
    { day: 1, title: "블로그 개설부터 완성까지" },
    { day: 2, title: "블로그 글쓰기의 기초" },
    { day: 3, title: "방문자 수 올리는 상위노출 전략" },
    { day: 4, title: "체험단 신청하는 법 A to Z" },
    { day: 5, title: "신뢰도 높은 후기 작성법" },
    { day: 6, title: "블로그 지수 올리는 루틴" },
  ]
  
  const courseModules: { day: number; status: string; title: string; feedback?: boolean; feedbackText?: string; }[] = _.map(baseModules, (module) => {
    return {
      ...module,
      status:
        !courseProgress.hasPaidCourse && module.day > 1 
          ? "locked" 
        : module.day < courseProgress.currentDay
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
             module.day === 1 && !courseProgress.hasPaidCourse ? "무료 체험 가능" :
             "이전 단계를 완료하세요"}
          </p>
        </div>
      </CardContent>
      <CardFooter className="justify-end pt-0">
        <Button 
          variant={module.status === "locked" && !(module.day === 1 && !courseProgress.hasPaidCourse) ? "outline" : "default"}
          disabled={module.status === "locked" && !(module.day === 1 && !courseProgress.hasPaidCourse)}
          asChild
        >
          <Link href={`/course/day${module.day}`}>
            {module.day === 1 && !courseProgress.hasPaidCourse ? "무료체험하기" : "시작하기"}
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
          currentDay: data.currentDay ?? 0,
          totalDays: data.totalDays ?? 6,
          completedDays: data.completedDays ?? 0,
          lastActivity: data.lastActivity ?? "",
          pendingFeedback: data.pendingFeedback ?? false,
          feedbackReceived: data.feedbackReceived ?? false,
          feedbackContent: data.feedbackContent ?? "",
          hasPaidCourse: data.hasPaid ?? false,
          userInfo: {
            name: data.displayName ?? user.displayName ?? "사용자",
            email: user.email ?? "",
            membershipType: data.membershipType ?? "무료 회원",
          }
        })
      }
    }

    fetchUserProgress()
  }, [user])

  const progress = courseProgress.hasPaidCourse 
    ? (courseProgress.completedDays / courseProgress.totalDays) * 100 
    : 0

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">마이페이지</h1>
          <p className="text-muted-foreground mt-1">내 학습 현황과 개인정보를 관리할 수 있어요.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* 첫 번째 열: 사용자 정보 */}
        <div className="space-y-6">
          {/* 내 정보 카드 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>내 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center">
                  <User className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-medium">{courseProgress.userInfo.name}</h3>
                  <p className="text-sm text-muted-foreground">{courseProgress.userInfo.email}</p>
                  <div className="flex items-center mt-1">
                    <Star className={cn(
                      "h-4 w-4",
                      courseProgress.hasPaidCourse ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    )} />
                    <span className="text-sm ml-1">
                      {courseProgress.hasPaidCourse ? "프리미엄 회원" : "무료 회원"}
                    </span>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="mt-2">
                <h4 className="font-medium text-sm mb-3">내 학습 상태</h4>
                {courseProgress.hasPaidCourse ? (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>전체 진행률</span>
                        <span className="font-medium">{Math.round(progress)}%</span>
                      </div>
                      <Progress value={progress} className="h-2" />
                    </div>
                    <div className="flex items-center justify-between bg-pink-50 rounded-lg p-3 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-pink-600 mr-2" />
                        <span>현재 단계</span>
                      </div>
                      {courseProgress.currentDay > 0 ? (
                        <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">
                          Day {courseProgress.currentDay}
                        </Badge>
                      ) : (
                        <Badge variant="outline">시작 전</Badge>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      아직 수강 중인 커리큘럼이 없습니다. 1일차 무료 체험을 시작해보세요!
                    </p>
                    <Button 
                      className="mt-3 w-full bg-blue-600 hover:bg-blue-700" 
                      asChild
                    >
                      <Link href="/course/day1">
                        1일차 무료 체험하기
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 전문가 피드백 카드 */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>전문가 피드백</CardTitle>
              <CardDescription>
                제출한 과제에 대한 전문가의 피드백을 확인해보세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {courseProgress.pendingFeedback ? (
                <div className="w-full bg-yellow-50 text-yellow-800 rounded-lg p-4 text-sm">
                  <div className="flex items-center font-medium mb-2">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>피드백 대기 중</span>
                  </div>
                  <p>제출한 과제에 대한 피드백이 곧 도착할 예정입니다.</p>
                  <p className="mt-2 text-xs text-yellow-700">일반적으로 24시간 이내에 전달됩니다.</p>
                </div>
              ) : courseProgress.feedbackReceived ? (
                <div className="w-full bg-green-50 text-green-800 rounded-lg p-4 text-sm">
                  <div className="flex items-center font-medium mb-2">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span>피드백 도착</span>
                  </div>
                  <div className="p-3 bg-white/70 rounded border border-green-100 mt-2">
                    <p>{courseProgress.feedbackContent}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <MessageCircle className="h-12 w-12 text-gray-300 mb-2" />
                  <h3 className="text-base font-medium text-gray-600">아직 피드백이 없습니다</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    과제를 완료하고 제출하면 전문가의 피드백을 받을 수 있어요.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* 두 번째~세 번째 열: 코스 모듈 */}
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>6일만에 완성하는 블로그 커리큘럼</CardTitle>
              <CardDescription>
                블로그 초보자를 위한 단계별 학습을 진행해보세요. 매일 새로운 스킬을 배우고 실습할 수 있습니다.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative flex flex-col space-y-3 mt-3 px-2 before:absolute before:left-5 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200">
                {courseModules.map((module, index) => (
                  <div key={module.day} className={cn(
                    "relative flex items-start pl-12 transition-opacity",
                    module.status === "locked" && "opacity-70"
                  )}>
                    {/* 타임라인 점 */}
                    <div className={cn(
                      "absolute left-4 -translate-x-1/2 w-5 h-5 rounded-full border-2 z-10 flex items-center justify-center",
                      module.status === "completed" ? "bg-green-100 border-green-500" : 
                      module.status === "in-progress" ? "bg-pink-100 border-pink-500" : 
                      "bg-gray-100 border-gray-300"
                    )}>
                      {module.status === "completed" ? (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      ) : module.status === "in-progress" ? (
                        <Clock className="h-3 w-3 text-pink-600" />
                      ) : (
                        <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
                      )}
                    </div>
                    
                    {/* 카드 콘텐츠 */}
                    <Card className={cn(
                      "flex-1 transition-all shadow-sm hover:shadow-md",
                      module.status === "completed" ? "border-l-2 border-l-green-500" : 
                      module.status === "in-progress" ? "border-l-2 border-l-pink-500" : 
                      "border-l-2 border-l-gray-200"
                    )}>
                      <div className="p-3 grid grid-cols-[1fr,auto] gap-3 items-center">
                        {/* 왼쪽 영역: 텍스트 정보 */}
                        <div>
                          <div className="flex items-center gap-2">
                            <Badge className="h-5 px-2" variant={
                              module.status === "completed" ? "default" :
                              module.status === "in-progress" ? "secondary" :
                              "outline"
                            }>
                              <span className="text-xs font-medium">Day {module.day}</span>
                            </Badge>
                            <h4 className="font-medium text-sm">{module.title}</h4>
                          </div>
                          
                          {/* 진행 상태 아이콘으로 표시 - 개선된 버전 */}
                          <div className="mt-2">
                            {module.status === "completed" ? (
                              <div className="flex flex-col space-y-1.5">
                                <div className="flex items-center">
                                  <div className="flex items-center bg-green-100 text-green-700 rounded-full px-2 py-0.5">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    <span className="text-xs font-medium">과제 제출 완료</span>
                                  </div>
                                  <span className="text-xs text-gray-500 ml-2">
                                    {courseProgress.lastActivity && `${courseProgress.lastActivity.split('T')[0]} 제출`}
                                  </span>
                                </div>
                                {module.feedback ? (
                                  <div className="flex items-center">
                                    <div className="flex items-center bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">
                                      <MessageCircle className="w-3 h-3 mr-1" />
                                      <span className="text-xs font-medium">피드백 완료</span>
                                    </div>
                                    <button className="ml-2 text-xs text-blue-600 hover:text-blue-800 underline font-medium" 
                                      onClick={() => {
                                        // 피드백 내용 모달 열기 기능
                                        toast({
                                          title: "피드백 보기",
                                          description: module.feedbackText || "멘토 피드백: 잘 작성된 과제입니다. 특히 카테고리 구성이 체계적이네요!",
                                        })
                                      }}>
                                      피드백 보기
                                    </button>
                                  </div>
                                ) : (
                                  <div className="px-2 py-0.5 text-xs text-gray-500">
                                    전문가 피드백이 곧 도착할 예정입니다
                                  </div>
                                )}
                              </div>
                            ) : module.status === "in-progress" ? (
                              <div className="flex flex-col space-y-1.5">
                                {courseProgress.pendingFeedback ? (
                                  <div className="flex items-center">
                                    <div className="flex items-center bg-yellow-100 text-yellow-700 rounded-full px-2 py-0.5">
                                      <Clock className="w-3 h-3 mr-1" />
                                      <span className="text-xs font-medium">피드백 대기중</span>
                                    </div>
                                    <div className="flex items-center ml-2 text-xs text-gray-500">
                                      <span>예상 도착: 24시간 이내</span>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex items-center">
                                    <div className="flex items-center bg-pink-100 text-pink-700 rounded-full px-2 py-0.5">
                                      <FileText className="w-3 h-3 mr-1" />
                                      <span className="text-xs font-medium">학습 진행중</span>
                                    </div>
                                    <div className="ml-2">
                                      <Button
                                        variant="ghost"
                                        size="sm"
                                        className="h-6 px-2 text-xs text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                                        asChild
                                      >
                                        <Link href={`/course/day${module.day}?tab=assignment`}>
                                          과제 제출하기
                                          <Send className="w-3 h-3 ml-1" />
                                        </Link>
                                      </Button>
                                    </div>
                                  </div>
                                )}
                                <div className="flex items-center">
                                  <div className="w-full max-w-32 bg-gray-200 rounded-full h-1">
                                    <div 
                                      className="bg-pink-500 h-1 rounded-full" 
                                      style={{ 
                                        width: courseProgress.pendingFeedback ? '80%' : '40%' 
                                      }}
                                    ></div>
                                  </div>
                                  <span className="text-xs text-gray-500 ml-2">
                                    {courseProgress.pendingFeedback ? '학습 80% 완료' : '학습 40% 완료'}
                                  </span>
                                </div>
                              </div>
                            ) : module.day === 1 && !courseProgress.hasPaidCourse ? (
                              <div className="flex items-center">
                                <div className="flex items-center bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">
                                  <span className="text-xs font-medium">무료체험 가능</span>
                                </div>
                                <div className="ml-2">
                                  <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-600 text-[10px] h-5">
                                    신규회원 혜택
                                  </Badge>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center">
                                <div className="flex items-center bg-gray-100 text-gray-500 rounded-full px-2 py-0.5">
                                  <span className="text-xs font-medium">이전 단계 완료 필요</span>
                                </div>
                                <div className="ml-2 text-xs text-gray-500">
                                  {module.day > 1 && !courseProgress.hasPaidCourse 
                                    ? '구매 후 이용 가능' 
                                    : `Day ${module.day-1} 완료 후 진행`}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* 오른쪽 영역: 버튼 */}
                        {module.day === 1 && (
                        <div>
                          <Button 
                            variant={module.status === "locked" && !(module.day === 1 && !courseProgress.hasPaidCourse) ? "outline" : "default"}
                            asChild
                            size="sm"
                            className={cn(
                              "text-xs px-3 font-medium min-w-20",
                              module.status === "completed" ? "bg-green-500 hover:bg-green-600" :
                              module.status === "in-progress" ? "bg-pink-500 hover:bg-pink-600" : ""
                            )}
                          >
                            <Link href={`/course/day${module.day}`}>
                              {module.day === 1 && !courseProgress.hasPaidCourse ? "체험하기" : "시작하기"}
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </Link>
                          </Button>
                        </div>

                        )}
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
              
              {!courseProgress.hasPaidCourse && (
                <div className="mt-8 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg border border-pink-100">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg text-pink-800">모든 커리큘럼 이용하기</h3>
                      <p className="text-sm text-pink-700 mt-1">
                        전체 강의와 전문가 피드백을 받아보세요.
                      </p>
                    </div>
                    <Button className="bg-pink-600 hover:bg-pink-700" asChild>
                        <Link
                        href="https://docs.google.com/forms/d/1sjSUhF5Vlv0VdoOcloakd6dUot8dTyhKrv65gtH1xNs/edit" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        >
                        사전 신청하기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
