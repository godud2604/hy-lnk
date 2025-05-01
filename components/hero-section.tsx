import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-lavender-50 via-white to-softpink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block bg-gradient-to-r from-primary to-purple-600 text-transparent bg-clip-text">
                체험단 꿀팁과 자동화 툴로
              </span>
              <br />
              <span className="inline-block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                크리에이터 수익을 극대화
              </span>하세요
            </h1>
            <p className="mx-auto max-w-[700px] text-lg md:text-xl text-gray-600 leading-relaxed">
              체험단 일정 관리부터 수익 창출까지,
              <br className="hidden sm:inline" />
              크리에이터를 위한 모든 노하우를 공유합니다
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button size="lg" asChild className="text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/tips">
                체험단 꿀팁 보기 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 text-base px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <Link href="/tools">
                자동화 툴 둘러보기 <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

