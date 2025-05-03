import Link from "next/link"
import { ArrowRight, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Featured Courses */}
      <section className="bg-lavender-50/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">교육 과정 소개</h2>
              <p className="text-muted-foreground mt-2">에듀테크단의 혁신적인 교육 프로그램으로 디지털 역량을 강화하세요</p>
            </div>
            <Link href="/curriculum">
              <Button variant="link" className="p-0 mt-4 md:mt-0 text-primary hover:text-primary/90">
                6일 완성 커리큘럼 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <CardHeader className="space-y-1">
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>6일 완성 체험단 마스터 과정</CardTitle>
                <CardDescription>
                  체계적인 커리큘럼으로 체험단의 A to Z를 배우는 실전 교육
                </CardDescription>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• 블로그 설정과 최적화</li>
                  <li>• 매력적인 리뷰 작성법</li>
                  <li>• SEO와 노출 전략</li>
                  <li>• 전문가의 1:1 피드백</li>
                </ul>
              </CardHeader>
              <CardFooter>
                <Link href="/curriculum" className="w-full">
                  <Button variant="outline" className="w-full group border-lavender-200 hover:bg-lavender-50">
                    커리큘럼 살펴보기
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
              <CardHeader className="space-y-1">
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <CardTitle>Make 자동화 툴 구축 과정</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    출시 예정
                  </span>
                </div>
                <CardDescription>
                  업무 효율을 높이는 자동화 도구 개발 학습
                </CardDescription>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>• 자동화 프로세스 설계</li>
                  <li>• API 활용과 데이터 처리</li>
                  <li>• 워크플로우 자동화</li>
                  <li>• 실전 프로젝트 구현</li>
                </ul>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full group border-lavender-200 hover:bg-lavender-50" disabled>
                  출시 준비중
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Membership CTA */}
      <section className="container py-12">
        <div className="rounded-lg bg-gradient-to-r from-lavender-100 to-softpink-100 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lavender-200/30 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">디지털 혁신의 시작, 에듀테크단</h2>
            <p className="text-muted-foreground mb-6">
              체험단 마스터 과정부터 AI 활용까지, 디지털 시대에 필요한 핵심 역량을 체계적으로 학습하세요. 실전 중심의 커리큘럼과 전문가의 1:1 피드백으로 빠른 성장을 경험하실 수 있습니다.
            </p>
            <Link href="/curriculum">
              <Button size="lg" className="text-base">
                6일 완성 커리큘럼 학습 시작하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

