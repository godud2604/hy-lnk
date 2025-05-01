import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-lavender-100 to-softpink-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              체험단 꿀팁과 자동화 툴로
              <br />
              <span className="text-primary">크리에이터 수익을 극대화</span>하세요
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              체험단 일정 관리부터 수익 창출까지, 크리에이터를 위한 모든 노하우를 공유합니다
            </p>
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="text-base">
              <Link href="/tips">
                체험단 꿀팁 보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-lavender-200 hover:bg-lavender-50 text-base" asChild>
              <Link href="/tools">
                자동화 툴 둘러보기 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  )
}

