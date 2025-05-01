import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Check, Star } from "lucide-react"

export default function PricingCard() {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 translate-y-1/2 -translate-x-1/2 bg-gradient-to-tr from-purple-100 to-pink-100 rounded-full opacity-50 blur-3xl"></div>
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <p className="text-sm font-medium text-pink-600 mb-1">프리미엄 패키지</p>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold">199,000</span>
              <span className="text-gray-500 ml-1">원</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">6일 완성 체험단 코스</p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-2 rounded-xl">
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </div>
          ))}
        </div>

        <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white shadow-lg shadow-pink-500/25">
          지금 바로 시작하기
        </Button>
        
        <p className="text-xs text-center text-gray-500 mt-4">
          2주 환불 보장 정책이 적용됩니다
        </p>
      </div>
    </Card>
  )
}

const features = [
  "6일 완성 스텝별 실전 미션",
  "전문가의 1:1 맞춤 피드백",
  "실제 당첨된 리뷰 예시 제공",
  "프리미엄 템플릿 30종 제공",
  "체험단 합격률 분석 리포트",
  "24시간 커뮤니티 액세스",
  "평생 수강 가능"
]
