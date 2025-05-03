import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lavender-50 via-white to-softpink-50">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-[0.02]" />
        <div 
          className="absolute right-0 -top-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 via-primary/3 to-transparent rounded-full blur-3xl" 
          style={{ transform: 'translate(20%, -20%)' }}
        />
        <div 
          className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-softpink-100/20 via-lavender-100/10 to-transparent rounded-full blur-3xl" 
          style={{ transform: 'translate(-20%, 20%)' }}
        />
      </div>

      {/* Content */}
      <div className="container relative px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4 md:space-y-8 text-center">
          <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] sm:leading-[1.1]">
              <span className="inline-block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                체험단 초보자도
              </span>
              <br />
              <span className="inline-block mt-2 sm:mt-3 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                6일만에 전문가처럼
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              체계적인 일정관리와 6일 완성 커리큘럼으로
              <br className="hidden sm:block" />
              확실한 노하우로 당첨되는 체험단 리뷰어의 비밀을 알려드립니다
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-6 sm:mt-8">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl text-sm sm:text-base px-6 py-6"
              asChild
            >
              <Link href="/curriculum" className="flex items-center justify-center">
                6일 완성 커리큘럼 둘러보기
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500 shadow-sm"></span>
              무료 체험 가능
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 shadow-sm"></span>
              6일 완성
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 shadow-sm"></span>
              전문가 피드백
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  )
}

