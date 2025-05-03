import { Construction } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ToolsPage() {
  const tools = [
    {
      title: "AI 블로그 어시스턴트",
      description: "GPT 기반의 블로그 최적화",
      status: "개발중",
      progress: 65,
    },
    {
      title: "자동 이미지 처리",
      description: "이미지 리사이징 및 최적화",
      status: "기획중",
      progress: 30,
    },
    {
      title: "SNS 자동화",
      description: "포스팅 자동 공유 및 일정 관리",
      status: "준비중",
      progress: 20,
    },
  ]

  return (
    <div className="container py-16 px-4">
      <div className="flex items-center gap-3 mb-8">
        <Construction className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold">블로그 자동화 도구</h1>
      </div>
      
      <div className="mb-8">
        <p className="text-lg text-muted-foreground">
          더 나은 블로깅 경험을 위한 자동화 도구를 준비중입니다.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Card key={tool.title} className="opacity-75 cursor-not-allowed select-none">
            <CardHeader>
              <div className="flex justify-between items-center mb-2">
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <Badge variant="secondary" className="bg-primary/5 text-primary">
                  {tool.status}
                </Badge>
              </div>
              <p className="text-muted-foreground">{tool.description}</p>
            </CardHeader>
            <CardContent>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${tool.progress}%` }}
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}