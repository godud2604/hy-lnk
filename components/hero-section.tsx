import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-br from-lavender-50 via-white to-softpink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-4 md:space-y-8 text-center">
          <div className="space-y-3 md:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] md:leading-[1.2]">
              <span className="inline-block bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                체험단 초보자도
              </span>
              <br className="hidden sm:block" />
              <span className="ml-2 inline-block sm:mt-2 md:mt-3 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                6일만에 전문가처럼
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed tracking-wide px-4 sm:px-0">
              체계적인 일정관리와 6일 완성 커리큘럼으로
              <br className="hidden sm:block" />
              확실한 노하우로 당첨되는 체험단 리뷰어의 비밀을 알려드립니다
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-6 sm:mt-8 px-4 sm:px-0">
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link href="/curriculum" className="flex items-center justify-center">
                6일 완성 커리큘럼 둘러보기 
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-400"></span>
              무료 체험 가능
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              6일 완성
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              전문가 피드백
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

