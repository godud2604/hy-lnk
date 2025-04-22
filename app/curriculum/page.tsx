import { ArrowRight, Calendar, CheckCircle, Gift, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import CourseStages from "@/components/course-stages"
import CountdownTimer from "@/components/countdown-timer"
import TestimonialSlider from "@/components/testimonial-slider"
import PricingCard from "@/components/pricing-card"
import FAQAccordion from "@/components/faq-accordion"

export default function Curriculum() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 to-purple-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('/patterns/dots.svg')] opacity-10"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="mb-2 bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">
                  6일 완성 커리큘럼
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="text-pink-600">6일만에</span> 체험단 당첨되는 노하우
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  블로그 초보도 쉽게 따라할 수 있는 단계별 미션으로 체험단 당첨의 기회를 잡아보세요.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  지금 바로 시작하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                  커리큘럼 살펴보기
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-pink-600" />
                  <span>300+ 수강생</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-pink-600 fill-pink-600" />
                  <span>4.9/5 평점</span>
                </div>
                <div className="flex items-center gap-1">
                  <Gift className="h-4 w-4 text-pink-600" />
                  <span>80% 당첨률</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3 z-10">
                  <CountdownTimer />
                </div>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <img src="/colorful-blogging.png" alt="블로그 체험단 일러스트" className="w-full h-auto" />
                  <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-pink-100 rounded-full p-2">
                        <CheckCircle className="h-5 w-5 text-pink-600" />
                      </div>
                      <div className="text-sm font-medium">실제 수강생 당첨 인증</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <img src="/vibrant-beauty-reveal.png" alt="당첨 인증 1" className="rounded-lg w-full h-auto" />
                      <img src="/vibrant-makeup-swatches.png" alt="당첨 인증 2" className="rounded-lg w-full h-auto" />
                      <img src="/food-blogger-review.png" alt="당첨 인증 3" className="rounded-lg w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100 border-none">커리큘럼 소개</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              누구나 따라할 수 있는 6일 코스
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              매일 15-30분씩 미션을 수행하며 체험단 당첨의 기회를 높여보세요.
            </p>
          </div>

          <CourseStages />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">특별한 혜택</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              왜 우리 클래스를 선택해야 할까요?
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              단순한 이론이 아닌, 실제 당첨으로 이어지는 실전 노하우를 제공합니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>단계별 미션 시스템</CardTitle>
                <CardDescription>매일 15-30분씩 실천 가능한 미션으로 부담 없이 시작할 수 있어요.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>1:1 피드백 제공</CardTitle>
                <CardDescription>매 미션마다 전문가의 개인 피드백을 받아 빠르게 성장할 수 있어요.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Gift className="h-6 w-6 text-pink-600" />
                </div>
                <CardTitle>실제 당첨 노하우</CardTitle>
                <CardDescription>300명 이상의 수강생이 검증한 실전 노하우로 당첨률을 높여드려요.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100 border-none">수강생 후기</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">실제 수강생들의 생생한 후기</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              6일 코스를 통해 체험단에 당첨된 수강생들의 이야기를 들어보세요.
            </p>
          </div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <Badge className="mb-2 bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">수강 신청</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">지금 바로 시작하세요</h2>
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
            <Badge className="mb-2 bg-purple-100 text-purple-800 hover:bg-purple-100 border-none">자주 묻는 질문</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">궁금한 점이 있으신가요?</h2>
            <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              수강생들이 자주 묻는 질문들을 모았습니다.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              지금 시작하고 6일 후 체험단에 도전하세요
            </h2>
            <p className="max-w-[700px] mb-8 text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              블로그 초보도, 휴면 계정 소유자도 모두 가능합니다. 지금 바로 시작해보세요!
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90">
                수강 신청하기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                더 알아보기
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
