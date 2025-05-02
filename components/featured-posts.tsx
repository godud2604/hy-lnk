import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: "체험단에 당첨되는 블로그는 다릅니다. 딱 3가지만 바꿔보세요",
      description: "프로필부터 신청 메시지까지, 체험단 당첨률을 높이는 실전 꿀팁을 알려드립니다. 검증된 방법으로 주 3-4건 당첨되는 노하우를 공개합니다.",
      category: "초보자 가이드",
      date: "2025-05-02",
      readTime: "10분",
      slug: "top-3-changes-for-selection",
    },
    {
      id: 2,
      title: "체험단 리뷰로 월 30만원 만드는 현실적인 방법",
      description: "체험단 외에도 기자단, 네이버 인플루언서 등 다양한 수익화 방법을 알려드립니다. 실제 수익 구조와 함께 단계별 성장 전략을 소개합니다.",
      category: "수익화",
      date: "2025-05-02",
      readTime: "15분",
      slug: "monthly-300k-guide",
    },
    {
      id: 3,
      title: "핸드폰만으로 완성하는 프리미엄급 후기 사진",
      description: "비싼 장비 없이도 고퀄리티 사진을 찍는 방법을 알려드립니다. 조명, 구도부터 무료 보정 앱 활용법까지 상세히 설명합니다.",
      category: "사진 팁",
      date: "2025-05-02",
      readTime: "8분",
      slug: "premium-photo-tips",
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

