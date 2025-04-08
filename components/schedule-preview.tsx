import Link from "next/link"
import { Calendar, Clock, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ExperienceLoginForm from "./experience-login-button"

export default function SchedulePreview() {
  // 실제 구현 시 데이터베이스에서 가져온 데이터를 사용
  const upcomingEvents = [
    {
      id: 1,
      title: "식품 브랜드 A 신제품 체험단",
      company: "A 식품",
      deadline: "2023-07-10",
      applicationStart: "2023-06-25",
      category: "식품",
      compensation: "제품 + 10만원",
      status: "신청중",
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
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {upcomingEvents.map((event) => (
          <Card
            key={event.id}
            className="flex flex-col h-full border-none shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden"
          >
            <ExperienceLoginForm />
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <Badge
                  variant={event.status === "신청중" ? "default" : "outline"}
                  className={`mb-2 ${event.status === "신청중" ? "bg-primary" : "bg-lavender-50 text-primary border-lavender-200"}`}
                >
                  {event.status}
                </Badge>
                <Badge variant="outline" className="bg-softpink-50 text-softpink-600 border-softpink-200">
                  {event.category}
                </Badge>
              </div>
              <CardTitle className="line-clamp-2 text-base font-heading">{event.title}</CardTitle>
              <CardDescription>{event.company}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3 pt-0 text-sm">
              <div className="flex items-center text-muted-foreground mb-1">
                <Calendar className="mr-2 h-4 w-4 text-primary" />
                <span>신청마감: {event.deadline}</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Clock className="mr-2 h-4 w-4 text-primary" />
                <span>신청시작: {event.applicationStart}</span>
              </div>
              <div className="mt-3 font-medium">보상: {event.compensation}</div>
            </CardContent>
            <CardFooter className="mt-auto pt-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-lavender-200 hover:bg-lavender-50 text-primary"
                asChild
              >
                <Link href={`/schedule/${event.id}`}>
                  상세 정2보 <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

