import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TipsPage() {
  // 실제 구현 시 데이터베이스나 CMS에서 가져온 데이터를 사용
  const tips = [
    {
      id: 1,
      title: "체험단 신청 시 합격률 높이는 5가지 방법",
      description: "체험단 신청서 작성부터 포트폴리오 준비까지, 합격률을 높이는 전문가의 팁을 공유합니다.",
      category: "초보 가이드",
      date: "2023-05-15",
      readTime: "5분",
      slug: "increase-acceptance-rate",
    },
    {
      id: 2,
      title: "인스타그램 체험단 리뷰 작성법 완벽 가이드",
      description: "인스타그램에서 높은 인게이지먼트를 얻는 체험단 리뷰 작성 노하우를 알아봅니다.",
      category: "콘텐츠 제작",
      date: "2023-06-02",
      readTime: "8분",
      slug: "instagram-review-guide",
    },
    {
      id: 3,
      title: "체험단 일정 관리를 위한 자동화 툴 TOP 5",
      description: "체험단 일정을 효율적으로 관리하고 마감일을 놓치지 않게 도와주는 자동화 도구를 소개합니다.",
      category: "자동화 툴",
      date: "2023-06-20",
      readTime: "6분",
      slug: "schedule-automation-tools",
    },
    {
      id: 4,
      title: "체험단 수익 극대화를 위한 애필리에이트 마케팅 전략",
      description: "체험단 활동과 애필리에이트 마케팅을 결합해 수익을 두 배로 늘리는 방법을 알아봅니다.",
      category: "수익화",
      date: "2023-07-05",
      readTime: "10분",
      slug: "affiliate-marketing-strategy",
    },
    {
      id: 5,
      title: "유튜브 체험단 콘텐츠로 구독자 늘리는 방법",
      description: "체험단 제품을 활용한 유튜브 콘텐츠로 구독자와 수익을 함께 늘리는 전략을 공유합니다.",
      category: "콘텐츠 제작",
      date: "2023-07-10",
      readTime: "7분",
      slug: "youtube-review-strategy",
    },
    {
      id: 6,
      title: "체험단 리뷰어를 위한 세금 신고 가이드",
      description: "체험단 활동으로 발생하는 수익에 대한 세금 신고 방법과 주의사항을 알아봅니다.",
      category: "법률/세금",
      date: "2023-07-15",
      readTime: "9분",
      slug: "tax-guide-for-reviewers",
    },
  ]

  const categories = ["전체", "초보 가이드", "콘텐츠 제작", "자동화 툴", "수익화", "법률/세금"]

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">체험단 꿀팁</h1>
      </div>

      <Tabs defaultValue="전체" className="mb-8">
        <TabsList className="mb-4 flex flex-wrap h-auto">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="mb-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tips
                .filter((tip) => category === "전체" || tip.category === category)
                .map((tip) => (
                  <Card key={tip.id} className="flex flex-col h-full">
                    <CardHeader className="flex flex-col space-y-1.5">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs font-normal">
                          {tip.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{tip.readTime} 읽기</span>
                      </div>
                      <CardTitle className="line-clamp-2 mt-2">{tip.title}</CardTitle>
                      <CardDescription className="line-clamp-3">{tip.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto pt-4">
                      <Link
                        href={`/tips/${tip.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary"
                      >
                        자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
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

