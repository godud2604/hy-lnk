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
      <section className="bg-lavender-50/50 py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8 lg:mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">교육 과정 소개</h2>
              <p className="text-muted-foreground mt-2 text-sm sm:text-base">에듀테크단의 혁신적인 교육 프로그램으로 디지털 역량을 강화하세요</p>
            </div>
            <Link href="/curriculum">
              <Button variant="link" className="hidden md:flex p-0 mt-4 md:mt-0 text-primary hover:text-primary/90">
                전체 과정 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden bg-gradient-to-br from-white to-lavender-50/30">
              <CardHeader className="space-y-2 sm:space-y-3">
                <div className="bg-gradient-to-br from-lavender-100 to-lavender-200/50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">6일 완성 체험단 마스터 과정</CardTitle>
                <div>
                  <CardDescription className="text-sm sm:text-base">
                    체계적인 커리큘럼으로 체험단의 A to Z를 배우는 실전 교육
                  </CardDescription>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      블로그 설정과 최적화
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      매력적인 리뷰 작성법
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      SEO와 노출 전략
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      전문가의 1:1 피드백
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardFooter className="pt-0 pb-4">
                <Link href="/course/day1" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full group border-lavender-200 hover:bg-lavender-50 rounded-lg h-11"
                  >
                    커리큘럼 살펴보기
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden bg-gradient-to-br from-white to-lavender-50/30">
              <CardHeader className="space-y-2 sm:space-y-3">
                <div className="bg-gradient-to-br from-lavender-100 to-lavender-200/50 w-12 h-12 rounded-full flex items-center justify-center mb-2">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <CardTitle className="text-lg sm:text-xl">블로그 자동화</CardTitle>
                  <span className="inline-flex items-center rounded-full bg-yellow-100/70 px-2 py-0.5 text-[10px] font-medium text-yellow-800">
                    출시예정
                  </span>
                </div>
                <div>
                  <CardDescription className="text-sm sm:text-base">
                    업무 효율을 높이는 자동화 도구 개발 학습
                  </CardDescription>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      자동화 프로세스 설계
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      API 활용과 데이터 처리
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      워크플로우 자동화
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                      실전 프로젝트 구현
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardFooter className="pt-0 pb-4">
                <Link href="/tools" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full group border-lavender-200 hover:bg-lavender-50 rounded-lg h-11"
                    disabled
                  >
                    출시 준비중
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Link href="/curriculum" className="md:hidden w-full mt-6">
            <Button variant="link" className="w-full justify-center text-primary hover:text-primary/90">
              전체 과정 보기 <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Premium Membership CTA */}
      <section className="container py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
        <div className="rounded-xl bg-gradient-to-br from-lavender-100 to-softpink-100 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3 sm:mb-4">디지털 혁신의 시작, 에듀테크단</h2>
            <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
              체험단 마스터 과정부터 AI 활용까지, 디지털 시대에 필요한 핵심 역량을 체계적으로 학습하세요. 실전 중심의 커리큘럼과 전문가의 1:1 피드백으로 빠른 성장을 경험하실 수 있습니다.
            </p>
            <Link href="/curriculum">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-sm sm:text-base px-6 py-5 sm:py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                학습 시작하기 <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

