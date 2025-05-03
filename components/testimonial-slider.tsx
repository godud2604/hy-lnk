"use client"

import AvatarKim from "./AvatarKim"
import { Card } from "./ui/card"
import { Quote, Star } from "lucide-react"

export default function TestimonialSlider() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="relative overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group border-none bg-gradient-to-br from-white to-gray-50">
          <div className="absolute top-0 right-0 w-20 h-20 -translate-y-1/2 translate-x-1/2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-2xl group-hover:opacity-70 transition-opacity"></div>
          <div className="relative">
            <Quote className="h-8 w-8 text-pink-400 mb-4 opacity-30" />
            <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-100">
                  <AvatarKim />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-1.5">
                  <Star className="w-3 h-3 text-white fill-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

const testimonials = [
  {
    content: "처음에는 블로그 시작이 막막했는데, 6일 코스를 따라가다 보니 어느새 체험단에 당첨되어 있었어요. 특히 해시태그 전략과 키워드 선정 방법이 많은 도움이 되었습니다. 초보자도 쉽게 따라할 수 있어서 정말 좋았고, 실제로 방문자 수가 2배 이상 늘었답니다!",
    name: "김미영",
    title: "블로그 3개월차",
    gender: "female"
  },
  {
    content: "전문적인 피드백 덕분에 블로그의 방향성을 확실히 잡을 수 있었어요. 포스팅 구성부터 사진 촬영 노하우까지 디테일한 팁들이 정말 유용했습니다. 이제는 매주 새로운 체험단에 도전하고 있고, 협찬 제안도 받게 되었어요. 블로그 수익이 한 달 만에 3배나 증가했네요!",
    name: "이지현",
    title: "뷰티 블로거",
    gender: "female"
  },
  {
    content: "1년 넘게 방치했던 휴면 계정이었는데, 이 코스로 다시 시작했더니 한 달 만에 3개의 체험단에 당첨됐어요. 특히 SEO 최적화 방법과 맛집 리뷰 작성 노하우가 실전에서 큰 도움이 되었습니다. 이제는 지역 맛집으로부터 직접 리뷰 요청도 받고 있어요. 정말 감사합니다!",
    name: "박서연",
    title: "푸드 블로거",
    gender: "female"
  },
  {
    content: "체계적인 가이드 덕분에 블로그 운영이 한결 수월해졌습니다. IT 제품 리뷰를 주로 하는데, 특히 SEO 최적화 팁과 제품 사진 촬영 기법이 매우 유용했어요. 검색 노출이 눈에 띄게 향상되었고, 덕분에 다양한 IT 기기 체험 기회도 얻게 되었습니다. 제품 리뷰 종사자분들께 강력 추천드립니다!",
    name: "이준호",
    title: "테크 블로거",
    gender: "male"
  },
  {
    content: "요식업 블로그를 운영하면서 체험단 참여가 쉽지 않았는데, 이 코스를 통해 많은 기회를 얻게 되었습니다. 음식 사진 촬영 팁과 맛집 리뷰 작성법이 특히 도움이 되었고, 블로그 통계 분석을 통한 포스팅 전략 수립도 큰 도움이 되었어요. 이제는 월 평균 5-6개의 맛집 체험 요청을 받고 있답니다.",
    name: "김대현",
    title: "맛집 블로거",
    gender: "male"
  },
  {
    content: "육아 블로그를 시작한 지 6개월 됐는데, 이 코스를 통해 완전히 새로운 시각을 얻게 되었어요. 육아 용품 리뷰와 육아 일상 기록하는 방법을 체계적으로 배웠고, 덕분에 육아 커뮤니티에서 영향력 있는 블로거로 성장할 수 있었습니다. 특히 인스타그램 연동 전략이 매우 효과적이었어요!",
    name: "송지원",
    title: "육아 블로거",
    gender: "female"
  }
]
