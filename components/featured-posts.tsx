import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPosts() {
  // 실제 구현 시 데이터베이스나 CMS에서 가져온 데이터를 사용
  const featuredPosts = [
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
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredPosts.map((post) => (
        <Card
          key={post.id}
          className="flex flex-col h-full border-none shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
        >
          <CardHeader className="flex flex-col space-y-1.5">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="text-xs font-normal bg-lavender-50 text-primary border-lavender-200">
                {post.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{post.readTime} 읽기</span>
            </div>
            <CardTitle className="line-clamp-2 mt-2 text-lg font-bold">{post.title}</CardTitle>
            <CardDescription className="line-clamp-3 text-sm">{post.description}</CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto pt-4">
            <Link
              href={`/tips/${post.slug}`}
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/90"
            >
              자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

