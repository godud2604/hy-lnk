import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingCard() {
  return (
    <Card className="border-2 border-pink-200 shadow-lg relative overflow-hidden">
      <div className="absolute top-0 right-0">
        <Badge className="rounded-bl-lg rounded-tr-lg rounded-br-none rounded-tl-none bg-pink-600 text-white hover:bg-pink-600 border-none">
          인기 상품
        </Badge>
      </div>
      <CardHeader className="bg-gradient-to-r from-pink-50 to-purple-50 pb-8">
        <CardTitle className="text-2xl">6일 완성 체험단 클래스</CardTitle>
        <CardDescription className="text-base">블로그 초보도 쉽게 따라하는 체험단 노하우</CardDescription>
        <div className="mt-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold">39,000원</span>
            <span className="text-sm text-gray-500 line-through ml-2">49,000원</span>
          </div>
          <p className="text-sm text-pink-600 font-medium mt-1">20% 할인 중! (3일 남음)</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3">
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>6일 완성 단계별 커리큘럼 (평생 소장)</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>매일 미션에 대한 1:1 개인 피드백</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>체험단 합격 노하우 PDF 자료집</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>인기 키워드 분석 자료 (월 1회 업데이트)</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>수료 후 비공개 커뮤니티 초대</span>
          </li>
          <li className="flex items-start">
            <Check className="h-5 w-5 text-pink-600 mr-2 flex-shrink-0 mt-0.5" />
            <span>수료증 발급 및 우수 수강생 선물</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-4">
        <Button className="w-full bg-pink-600 hover:bg-pink-700 text-base py-6">지금 바로 시작하기</Button>
        <div className="text-center text-sm text-gray-500">100% 환불 보장 - 첫 3일 이내 불만족 시 전액 환불</div>
      </CardFooter>
    </Card>
  )
}
