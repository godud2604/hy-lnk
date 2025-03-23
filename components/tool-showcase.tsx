import Link from "next/link"
import { ArrowRight, ExternalLink, Star } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ToolsShowcase() {
  // 실제 구현 시 데이터베이스에서 가져온 데이터를 사용
  const tools = [
    {
      id: 1,
      name: "콘텐츠 캘린더 Pro",
      description: "체험단 일정, 콘텐츠 발행 일정을 한 번에 관리하는 올인원 캘린더 도구",
      category: "일정 관리",
      rating: 4.8,
      price: "월 9,900원부터",
      affiliateLink: "#",
      slug: "content-calendar-pro",
    },
    {
      id: 2,
      name: "인스타 에디터 AI",
      description: "인스타그램 게시물을 AI로 최적화하고 해시태그를 자동 생성해주는 도구",
      category: "콘텐츠 제작",
      rating: 4.7,
      price: "월 12,000원부터",
      affiliateLink: "#",
      slug: "insta-editor-ai",
    },
    {
      id: 3,
      name: "리뷰 트래커",
      description: "여러 플랫폼에 올린 리뷰의 성과를 한 번에 분석하고 인사이트를 제공",
      category: "분석",
      rating: 4.5,
      price: "월 15,000원부터",
      affiliateLink: "#",
      slug: "review-tracker",
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {tools.map((tool) => (
        <Card
          key={tool.id}
          className="flex flex-col h-full border-none shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden"
        >
          <CardHeader>
            <div className="flex justify-between items-start mb-2">
              <Badge variant="outline" className="bg-softpink-50 text-softpink-600 border-softpink-200">
                {tool.category}
              </Badge>
              <div className="flex items-center">
                <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                <span className="text-sm font-medium">{tool.rating}</span>
              </div>
            </div>
            <CardTitle className="font-heading">{tool.name}</CardTitle>
            <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-2 pt-0">
            <p className="font-medium">{tool.price}</p>
          </CardContent>
          <CardFooter className="flex justify-between mt-auto pt-4">
            <Link
              href={`/tools/${tool.slug}`}
              className="text-sm font-medium text-primary hover:text-primary/90 inline-flex items-center"
            >
              자세히 보기 <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
            <Link
              href={tool.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-softpink-600 inline-flex items-center hover:text-softpink-700"
            >
              구매하기 <ExternalLink className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

