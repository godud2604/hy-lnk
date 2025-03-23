import Link from "next/link"
import { ArrowLeft, ExternalLink, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ToolsPage() {
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
      features: ["다중 플랫폼 일정 관리", "알림 기능", "팀 협업 기능"],
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
      features: ["AI 캡션 생성", "해시태그 추천", "인게이지먼트 분석"],
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
      features: ["크로스 플랫폼 분석", "성과 리포트", "경쟁사 벤치마킹"],
      slug: "review-tracker",
    },
    {
      id: 4,
      name: "썸네일 메이커",
      description: "클릭을 유도하는 매력적인 썸네일을 템플릿으로 쉽게 제작할 수 있는 도구",
      category: "콘텐츠 제작",
      rating: 4.6,
      price: "월 8,000원부터",
      affiliateLink: "#",
      features: ["100+ 템플릿", "브랜드 키트", "원클릭 리사이징"],
      slug: "thumbnail-maker",
    },
    {
      id: 5,
      name: "리뷰 스크립트 AI",
      description: "제품 특성에 맞는 리뷰 스크립트를 AI가 자동으로 생성해주는 도구",
      category: "콘텐츠 제작",
      rating: 4.4,
      price: "월 10,000원부터",
      affiliateLink: "#",
      features: ["맞춤형 스크립트", "키워드 최적화", "다양한 톤 설정"],
      slug: "review-script-ai",
    },
    {
      id: 6,
      name: "수익 트래커",
      description: "체험단, 애필리에이트, 광고 등 다양한 수익원을 한 곳에서 관리하고 분석",
      category: "수익화",
      rating: 4.7,
      price: "월 15,000원부터",
      affiliateLink: "#",
      features: ["수익원 통합 관리", "세금 계산", "목표 설정 및 추적"],
      slug: "income-tracker",
    },
  ]

  const categories = ["전체", "일정 관리", "콘텐츠 제작", "분석", "수익화"]

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">추천 자동화 툴</h1>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        체험단 활동과 콘텐츠 제작을 더 효율적으로 만들어주는 도구들을 소개합니다. 아래 링크를 통해 구매하시면 특별 할인
        혜택을 받으실 수 있습니다.
      </p>

      <Tabs defaultValue="전체" className="mb-8">
        <TabsList className="mb-4">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tools
                .filter((tool) => category === "전체" || tool.category === category)
                .map((tool) => (
                  <Card key={tool.id} className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{tool.category}</Badge>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                          <span className="text-sm font-medium">{tool.rating}</span>
                        </div>
                      </div>
                      <CardTitle>{tool.name}</CardTitle>
                      <CardDescription className="line-clamp-2">{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2 pt-0">
                      <p className="font-medium mb-3">{tool.price}</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium">주요 기능:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {tool.features.map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between mt-auto pt-4">
                      <Link
                        href={`/tools/${tool.slug}`}
                        className="text-sm font-medium text-primary inline-flex items-center"
                      >
                        자세히 보기
                      </Link>
                      <Link
                        href={tool.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium inline-flex items-center bg-primary text-primary-foreground px-3 py-1.5 rounded-md hover:bg-primary/90"
                      >
                        구매하기 <ExternalLink className="ml-1 h-3 w-3" />
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

