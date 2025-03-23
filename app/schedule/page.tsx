import Link from "next/link"
import { ArrowLeft, Calendar, Clock, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SchedulePage() {
  // 실제 구현 시 데이터베이스에서 가져온 데이터를 사용
  const events = [
    {
      id: 1,
      title: "식품 브랜드 A 신제품 체험단",
      company: "A 식품",
      deadline: "2023-07-10",
      applicationStart: "2023-06-25",
      category: "식품",
      compensation: "제품 + 10만원",
      status: "신청중",
      requirements: "인스타그램 팔로워 1,000명 이상",
      details: "신제품 출시 기념 체험단 모집. 총 10명 선발 예정.",
    },
    {
      id: 2,
      title: "여름 뷰티 아이템 인스타그램 체험단",
      company: "B 코스메틱",
      deadline: "2023-07-15",
      applicationStart: "2023-06-30",
      category: "뷰티",
      compensation: "제품 + 5만원",
      status: "신청중",
      requirements: "인스타그램 팔로워 3,000명 이상",
      details: "여름 신제품 라인업 체험 및 리뷰. 총 5명 선발 예정.",
    },
    {
      id: 3,
      title: "가전제품 유튜브 리뷰어 모집",
      company: "C 전자",
      deadline: "2023-07-20",
      applicationStart: "2023-07-01",
      category: "가전",
      compensation: "제품 제공 (10만원 상당)",
      status: "곧 시작",
      requirements: "유튜브 구독자 500명 이상",
      details: "신형 공기청정기 리뷰 영상 제작. 총 3명 선발 예정.",
    },
    {
      id: 4,
      title: "여행 액세서리 블로그 체험단",
      company: "D 트래블",
      deadline: "2023-07-25",
      applicationStart: "2023-07-05",
      category: "여행",
      compensation: "제품 + 8만원",
      status: "곧 시작",
      requirements: "월 방문자 1,000명 이상의 블로그 운영자",
      details: "여행용 스마트 가방 및 액세서리 체험. 총 5명 선발 예정.",
    },
    {
      id: 5,
      title: "키즈 완구 인스타그램 체험단",
      company: "E 토이즈",
      deadline: "2023-07-30",
      applicationStart: "2023-07-10",
      category: "키즈",
      compensation: "제품 제공 (5만원 상당)",
      status: "곧 시작",
      requirements: "육아 관련 인스타그램 계정 운영자",
      details: "신규 교육용 완구 체험 및 리뷰. 총 10명 선발 예정.",
    },
    {
      id: 6,
      title: "홈트레이닝 기구 유튜브 체험단",
      company: "F 피트니스",
      deadline: "2023-08-05",
      applicationStart: "2023-07-15",
      category: "스포츠/피트니스",
      compensation: "제품 + 15만원",
      status: "예정",
      requirements: "피트니스 관련 콘텐츠 제작자",
      details: "혁신적인 홈트레이닝 기구 체험 및 리뷰. 총 3명 선발 예정.",
    },
  ]

  const categories = ["전체", "식품", "뷰티", "가전", "여행", "키즈", "스포츠/피트니스"]
  const statuses = ["전체", "신청중", "곧 시작", "예정", "마감"]

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">체험단 일정</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">필터:</span>
        </div>

        <div className="flex flex-wrap gap-4">
          <Select defaultValue="전체">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="카테고리" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="전체">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="상태" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select defaultValue="마감임박순">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="정렬" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="마감임박순">마감임박순</SelectItem>
              <SelectItem value="최신등록순">최신등록순</SelectItem>
              <SelectItem value="보상금액순">보상금액순</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="전체" className="mb-8">
        <TabsList className="mb-4">
          {statuses.map((status) => (
            <TabsTrigger key={status} value={status}>
              {status}
            </TabsTrigger>
          ))}
        </TabsList>

        {statuses.map((status) => (
          <TabsContent key={status} value={status}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events
                .filter((event) => status === "전체" || event.status === status)
                .map((event) => (
                  <Card key={event.id} className="flex flex-col h-full">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <Badge variant={event.status === "신청중" ? "default" : "outline"} className="mb-2">
                          {event.status}
                        </Badge>
                        <Badge variant="outline">{event.category}</Badge>
                      </div>
                      <CardTitle className="line-clamp-2 text-base">{event.title}</CardTitle>
                      <CardDescription>{event.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3 pt-0 text-sm">
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>신청마감: {event.deadline}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground mb-3">
                        <Clock className="mr-2 h-4 w-4" />
                        <span>신청시작: {event.applicationStart}</span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium">보상:</span> {event.compensation}
                        </div>
                        <div>
                          <span className="font-medium">지원조건:</span> {event.requirements}
                        </div>
                        <div className="line-clamp-2 text-muted-foreground">{event.details}</div>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto pt-3">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href={`/schedule/${event.id}`}>
                          상세 정보 <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

