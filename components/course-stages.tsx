"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

const courseStages = [
  {
    day: "1일차",
    title: "블로그 개설 및 주제 설정",
    description: "체험단에 유리한 블로그 주제를 선정하고 기본 설정을 완료합니다.",
    mission: "블로그 URL 제출",
    content:
      "블로그 플랫폼 선택부터 프로필 설정, 카테고리 구성까지 체험단에 최적화된 블로그를 만드는 방법을 배웁니다. 뷰티, 맛집, 라이프스타일 중 자신에게 맞는 주제를 선정하는 방법도 알려드려요.",
    tips: [
      "네이버 블로그가 체험단에 가장 유리해요",
      "프로필 사진과 소개글은 전문성을 드러내는 것이 중요해요",
      "최소 5개 이상의 카테고리를 미리 구성해두세요",
    ],
  },
  {
    day: "2일차",
    title: "첫 포스팅 작성",
    description: "체험단 심사에 좋은 인상을 줄 수 있는 첫 포스팅을 작성합니다.",
    mission: "포스팅 링크 제출",
    content:
      "체험단 심사관이 보는 포스팅의 핵심 요소와 구성 방법을 배웁니다. 사진 촬영 팁, 글쓰기 방법, 포스팅 구성 등 실제 예시와 함께 알려드려요.",
    tips: [
      "최소 10장 이상의 고퀄리티 사진을 넣으세요",
      "글은 최소 500자 이상 작성하는 것이 좋아요",
      "소제목을 활용해 가독성을 높이세요",
    ],
  },
  {
    day: "3일차",
    title: "키워드 찾기",
    description: "체험단 당첨률을 높이는 키워드 선정과 활용법을 배웁니다.",
    mission: "키워드 기반 포스팅",
    content:
      "검색 노출에 유리한 키워드를 찾고 이를 포스팅에 자연스럽게 녹여내는 방법을 배웁니다. 네이버 검색 알고리즘을 고려한 키워드 배치 방법도 알려드려요.",
    tips: [
      "제목에 핵심 키워드를 반드시 포함하세요",
      "본문 첫 문단에 키워드를 자연스럽게 넣으세요",
      "연관 키워드를 함께 사용하면 효과적이에요",
    ],
  },
  {
    day: "4일차",
    title: "체험단 사이트 가입 + 신청",
    description: "주요 체험단 사이트 가입 및 효과적인 신청서 작성법을 배웁니다.",
    mission: "신청내역 제출",
    content:
      "인기 체험단 사이트 TOP 5와 각 사이트별 특징 및 신청 방법을 배웁니다. 합격률을 높이는 신청서 작성 노하우와 주의사항도 알려드려요.",
    tips: [
      "최소 3개 이상의 체험단 사이트에 가입하세요",
      "신청서는 구체적이고 성실하게 작성하세요",
      "자신의 블로그 장점을 어필하는 것이 중요해요",
    ],
  },
  {
    day: "5일차",
    title: "블로그 지수 관리",
    description: "체험단 선정에 중요한 블로그 지수를 효과적으로 관리하는 방법을 배웁니다.",
    mission: "블덱스 인증 제출",
    content:
      "네이버 블로그 지수(블덱스)의 구성 요소와 이를 높이는 방법을 배웁니다. 방문자 수, 조회수, 공감수를 늘리는 실전 전략을 알려드려요.",
    tips: [
      "매일 일정한 시간에 포스팅하는 습관을 들이세요",
      "다른 블로그와 소통하며 공감을 주고받으세요",
      "SNS를 활용해 블로그 유입을 늘리세요",
    ],
  },
  {
    day: "6일차",
    title: "후기 포스팅 작성법",
    description: "브랜드에게 좋은 인상을 주는 후기 포스팅 작성법을 배웁니다.",
    mission: "후기 포스팅 계획 or 실제 포스팅",
    content:
      "체험단 제품을 받은 후 브랜드와 독자 모두에게 호감을 얻는 후기 작성법을 배웁니다. 사진 촬영, 구성, 키워드 활용 등 총체적인 노하우를 알려드려요.",
    tips: [
      "제품의 장단점을 균형있게 서술하세요",
      "직접 사용한 경험을 구체적으로 작성하세요",
      "브랜드가 원하는 핵심 메시지를 포함하세요",
    ],
  },
]

export default function CourseStages() {
  const [activeTab, setActiveTab] = useState("1일차")

  const activeStage = courseStages.find((stage) => stage.day === activeTab) || courseStages[0]

  return (
    <div className="w-full">
      <Tabs defaultValue="1일차" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          {courseStages.map((stage) => (
            <TabsTrigger
              key={stage.day}
              value={stage.day}
              className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-800"
            >
              {stage.day}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="grid md:grid-cols-5 gap-6 items-start">
          {/* Timeline */}
          <div className="hidden md:block md:col-span-2">
            <div className="space-y-4">
              {courseStages.map((stage, index) => (
                <div
                  key={stage.day}
                  className={`flex items-start p-4 rounded-lg cursor-pointer transition-colors ${
                    stage.day === activeTab ? "bg-pink-50 border-l-4 border-pink-500" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab(stage.day)}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      stage.day === activeTab ? "bg-pink-500 text-white" : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {stage.day}: {stage.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{stage.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 ${stage.day === activeTab ? "text-pink-500" : "text-gray-300"}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <Card className="md:col-span-3 border-none shadow-lg">
            <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-t-lg">
              <Badge className="w-fit mb-2 bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">
                {activeStage.day}
              </Badge>
              <CardTitle className="text-2xl">{activeStage.title}</CardTitle>
              <CardDescription className="text-base">
                <span className="font-medium">오늘의 미션:</span> {activeStage.mission}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">학습 내용</h4>
                  <p className="text-gray-600">{activeStage.content}</p>
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-2">핵심 팁</h4>
                  <ul className="space-y-2">
                    {activeStage.tips.map((tip, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </div>
  )
}
