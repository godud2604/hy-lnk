'use client'

import { ArrowRight, Calendar, CheckCircle, Gift, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CourseStages from "@/components/course-stages"
import TestimonialSlider from "@/components/testimonial-slider"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"
import Link from "next/link"
import { useRef } from "react"

export default function Curriculum() {
  const overviewRef = useRef<HTMLDivElement | null>(null)

  const scrollToOverview = () => {
    overviewRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-lavender-50 via-white to-softpink-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-5 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-y-16 gap-x-6 lg:grid-cols-[3fr_2fr] lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="mb-2 bg-gradient-to-r from-lavender-100 to-lavender-200 text-primary hover:from-lavender-200 hover:to-lavender-300 border-none backdrop-blur-sm">
                  6일 완성 커리큘럼
                </Badge>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 whitespace-nowrap">
                  체험단 당첨되는 블로그 만들기
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-medium">
                  블로그 개설부터 첫 체험단 당첨까지, 6일 완성 커리큘럼으로 전문가와 함께 성장하세요. 초보자도 쉽게 따라할 수 있는 단계별 미션으로 체험단 당첨의 기회를 높여드립니다.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white shadow-lg shadow-primary/25">
                    6일 코스 체험하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-lavender-200 text-primary hover:bg-gradient-to-r hover:from-lavender-50 hover:to-softpink-50"
                  onClick={() => {
                    scrollToOverview()
                  }}
                >
                  전체 과정 살펴보기
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  <span>1:1 전문가 피드백</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary fill-primary" />
                  <span>체계적인 6단계</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gift className="h-4 w-4 text-primary" />
                  <span>실전 당첨 노하우</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl rounded-2xl">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100/50">
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary/10 rounded-full p-2.5 shadow-sm ring-4 ring-primary/5">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div className="text-lg font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        6일 코스의 핵심 혜택
                      </div>
                    </div>
                    
                    <div className="grid gap-4">
                      <div className="bg-gradient-to-br from-primary/5 via-primary/[0.07] to-primary/10 p-4 rounded-xl backdrop-blur-sm border border-primary/10">
                        <h3 className="font-semibold text-primary mb-2">1. 실전 체험단 노하우</h3>
                        <p className="text-gray-600">최신 트렌드를 반영한 체험단 합격 전략과 실제 사례 분석을 통한 학습</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-primary/5 via-primary/[0.07] to-primary/10 p-4 rounded-xl backdrop-blur-sm border border-primary/10">
                        <h3 className="font-semibold text-primary mb-2">2. 맞춤형 피드백</h3>
                        <p className="text-gray-600">매일 제출하는 과제에 대한 전문가의 1:1 피드백으로 빠른 실력 향상</p>
                      </div>
                      
                      <div className="bg-gradient-to-br from-primary/5 via-primary/[0.07] to-primary/10 p-4 rounded-xl backdrop-blur-sm border border-primary/10">
                        <h3 className="font-semibold text-primary mb-2">3. 커뮤니티 지원</h3>
                        <p className="text-gray-600">수강생 전용 커뮤니티에서 정보 공유와 네트워킹 기회 제공</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section id="course-overview" className="py-16 md:py-24 bg-white" ref={overviewRef}>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-lavender-100 text-primary hover:bg-lavender-100 border-none">커리큘럼 소개</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl whitespace-nowrap">
              체계적인 6일 완성 커리큘럼
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              블로그 개설부터 실전 체험단 참여까지, <br/> 전문가의 1:1 피드백과 함께 매일 15-30분씩 성장하세요.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Day 1-2: 블로그 기초 다지기</CardTitle>
                <CardDescription>블로그 개설과 주제 선정부터 첫 포스팅 작성까지, 체험단에 최적화된 블로그 환경을 구축합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Day 3-4: 검색 노출과 체험단 신청</CardTitle>
                <CardDescription>효과적인 키워드 활용법을 배우고, 주요 체험단 사이트 가입 및 신청 실습을 진행합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Day 5-6: 당첨률 높이기</CardTitle>
                <CardDescription>블로그 지수 관리와 블덱스 활용법을 배우고, 실전 후기 작성 노하우를 습득합니다.</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <CourseStages />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-lavender-50 to-softpink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-lavender-100 text-primary hover:bg-lavender-100 border-none">특별한 혜택</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl whitespace-nowrap">
              블로그 초보도 쉽게 시작할 수 있어요
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              6일간의 체계적인 커리큘럼과 전문가의 1:1 피드백으로 체험단 당첨의 기회를 높여드립니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>매일 15-30분 실전 미션</CardTitle>
                <CardDescription>블로그 개설부터 체험단 신청까지, 하루 30분이면 충분한 단계별 미션을 제공합니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24시간 이내 피드백</CardTitle>
                <CardDescription>매일 제출하는 과제마다 전문가의 꼼꼼한 피드백을 받아 빠르게 개선할 수 있습니다.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-lavender-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>실전 키워드 전략</CardTitle>
                <CardDescription>검색 노출부터 블로그 지수 관리까지, 체험단 당첨을 위한 실전 노하우를 배웁니다.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-lavender-100 text-primary hover:bg-lavender-100 border-none">수강생 후기</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl whitespace-nowrap">실제 수강생들의 생생한 후기</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              6일 코스를 통해 체험단에 당첨된 수강생들의 이야기를 들어보세요.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-lavender-50 to-softpink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-lavender-100 text-primary hover:bg-lavender-100 border-none">수강 신청</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl whitespace-nowrap">지금 바로 시작하세요</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              6일 후 당신의 블로그에도 체험단 제품이 도착할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="md:col-span-2 lg:col-span-1 lg:col-start-2">
              <PricingCard />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-lavender-100 text-primary hover:bg-lavender-100 border-none">자주 묻는 질문</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl whitespace-nowrap">궁금한 점이 있으신가요?</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              수강생들이 자주 묻는 질문들을 모았습니다.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6 whitespace-nowrap">
              6일 후, 당신의 첫 체험단 도전
            </h2>
            <p className="max-w-[700px] mb-8 text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              블로그 초보도 걱정 없이 도전할 수 있습니다. <br/> 전문가의 1:1 피드백으로 6일 동안 체계적으로 성장하세요.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  6일 코스 체험하기 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
