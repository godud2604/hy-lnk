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
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-lavender-50/70 via-white to-lavender-50/50"></div>
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]"></div>
        <div className="container relative px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">쉽고 재미있는 교육 과정</h2>
              <p className="text-muted-foreground/80 mt-2 text-sm sm:text-base">누구나 쉽게 따라할 수 있는 체험단 활동 노하우를 배워보세요</p>
            </div>
            <Link href="/curriculum">
              <Button variant="link" className="hidden md:flex p-0 mt-4 md:mt-0 text-primary hover:text-primary/90 group">
                전체 과정 보기 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="group relative border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
              <CardHeader className="relative space-y-3">
                <div className="bg-gradient-to-br from-lavender-100 to-lavender-200/50 w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-md">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  6일 완성 체험단 마스터 과정
                </CardTitle>
                <div>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    누구나 쉽게 따라할 수 있는 체험단 활동 실전 가이드
                  </CardDescription>
                  <ul className="mt-4 space-y-2.5">
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      쉽게 시작하는 블로그 만들기
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      눈에 띄는 리뷰 글쓰기 비법
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      더 많은 사람들에게 보이는 방법
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      전문가의 1:1 피드백
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardFooter className="pt-0 pb-6">
                <Link href="/curriculum" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full border-lavender-200 rounded-lg h-11"
                  >
                    커리큘럼 살펴보기
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="group relative border-none shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-50/50 via-white to-softpink-50/30 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader className="relative space-y-3">
                <div className="bg-gradient-to-br from-lavender-100 to-lavender-200/50 w-12 h-12 rounded-xl flex items-center justify-center mb-2 shadow-md">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-center gap-3">
                  <CardTitle className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    블로그 자동화
                  </CardTitle>
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-yellow-100/80 to-orange-100/80 px-2.5 py-0.5 text-xs font-medium text-yellow-800/90 border border-yellow-200/50 shadow-sm">
                    출시예정
                  </span>
                </div>
                <div>
                  <CardDescription className="text-sm sm:text-base text-gray-600">
                    업무 효율을 높이는 자동화 도구 개발 학습
                  </CardDescription>
                  <ul className="mt-4 space-y-2.5">
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      자동화 프로세스 설계
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      API 활용과 데이터 처리
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      워크플로우 자동화
                    </li>
                    <li className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60 ring-4 ring-primary/10"></span>
                      실전 프로젝트 구현
                    </li>
                  </ul>
                </div>
              </CardHeader>
              <CardFooter className="pt-0 pb-6">
                <Link href="/tools" className="w-full">
                  <Button 
                    variant="outline" 
                    className="w-full group border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 rounded-xl h-11 font-medium"
                    disabled
                  >
                    출시 준비중
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Link href="/curriculum" className="md:hidden w-full mt-8">
            <Button variant="link" className="w-full justify-center text-primary hover:text-primary/90 group">
              전체 과정 보기 
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container relative py-16 md:py-24 px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-br from-lavender-100 to-softpink-100 p-8 sm:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.03]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-transparent"></div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              디지털 혁신의 시작, 에듀테크단
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
              체험단 마스터 과정부터 AI 활용까지, 디지털 시대에 필요한 핵심 역량을 체계적으로 학습하세요. 실전 중심의 커리큘럼과 전문가의 1:1 피드백으로 빠른 성장을 경험하실 수 있습니다.
            </p>
            <Link href="/curriculum">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl text-sm sm:text-base px-6 py-5 sm:py-6"
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

