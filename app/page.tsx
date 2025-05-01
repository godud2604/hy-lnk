import Link from "next/link"
import { ArrowRight, Calendar, Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import HeroSection from "@/components/hero-section"
import FeaturedPosts from "@/components/featured-posts"
import SchedulePreview from "@/components/schedule-preview"
import ToolsShowcase from "@/components/tool-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Value Proposition */}
      {/* <section className="container py-12 md:py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
            <CardHeader className="space-y-1">
              <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Gift className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>체험단 꿀팁</CardTitle>
              <CardDescription>체험단 신청부터 리뷰 작성까지 전문가의 노하우를 공유합니다</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/tips" className="w-full">
                <Button variant="outline" className="w-full group border-lavender-200 hover:bg-lavender-50">
                  꿀팁 보러가기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
            <CardHeader className="space-y-1">
              <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>일정 관리</CardTitle>
              <CardDescription>체험단 일정을 한눈에 확인하고 효율적으로 관리하세요</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/schedule" className="w-full">
                <Button variant="outline" className="w-full group border-lavender-200 hover:bg-lavender-50">
                  일정 확인하기
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
              <CardTitle>자동화 툴</CardTitle>
              <CardDescription>시간을 절약하고 효율을 높이는 자동화 도구를 소개합니다</CardDescription>
            </CardHeader>
            <CardFooter>
              <Link href="/tools" className="w-full">
                <Button variant="outline" className="w-full group border-lavender-200 hover:bg-lavender-50">
                  툴 둘러보기
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section> */}

      {/* Featured Posts */}
      {/* <section className="bg-lavender-50/50 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">인기 꿀팁</h2>
              <p className="text-muted-foreground mt-2">크리에이터들에게 가장 인기 있는 체험단 꿀팁을 확인하세요</p>
            </div>
            <Link href="/tips">
              <Button variant="link" className="p-0 mt-4 md:mt-0 text-primary hover:text-primary/90">
                모든 꿀팁 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <FeaturedPosts />
        </div>
      </section> */}

      {/* Schedule Preview */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">체험단 일정</h2>
            <p className="text-muted-foreground mt-2">다가오는 체험단 일정을 확인하고 놓치지 마세요</p>
          </div>
          <Link href="/schedule">
            <Button variant="link" className="p-0 mt-4 md:mt-0 text-primary hover:text-primary/90">
              전체 일정 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <SchedulePreview />
      </section>

      {/* Tools Showcase */}
      {/* <section className="bg-softpink-50/50 py-12 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">추천 자동화 툴</h2>
              <p className="text-muted-foreground mt-2">체험단 관리와 콘텐츠 제작을 더 효율적으로 만들어주는 도구들</p>
            </div>
            <Link href="/tools">
              <Button variant="link" className="p-0 mt-4 md:mt-0 text-primary hover:text-primary/90">
                모든 툴 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <ToolsShowcase />
        </div>
      </section> */}

      {/* Premium Membership CTA */}
      <section className="container py-12">
        <div className="rounded-lg bg-gradient-to-r from-lavender-100 to-softpink-100 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lavender-200/30 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight mb-4">6일 완성 체험단 마스터 클래스</h2>
            <p className="text-muted-foreground mb-6">
              블로그 개설부터 실전 체험단 참여까지, 6일 완성 커리큘럼으로 체계적인 학습을 시작하세요. 전문가의 1:1 피드백과 함께 성장할 수 있습니다.
            </p>
            <Link href="/curriculum">
              <Button size="lg" className="text-base">
                커리큘럼 둘러보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

