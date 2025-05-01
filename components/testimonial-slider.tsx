"use client"

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
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
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
    content: "6일 코스를 따라가다 보니 어느새 체험단에 당첨되어 있었어요. 초보자도 쉽게 따라할 수 있어서 정말 좋았습니다!",
    name: "김미영",
    title: "블로그 3개월차",
    avatar: "/testimonials/avatar1.jpg"
  },
  {
    content: "전문적인 피드백 덕분에 블로그의 방향성을 잡을 수 있었어요. 이제는 매주 새로운 체험단에 도전하고 있답니다.",
    name: "이지현",
    title: "뷰티 블로거",
    avatar: "/testimonials/avatar2.jpg"
  },
  {
    content: "휴면 계정이었는데, 이 코스로 다시 시작했더니 한 달 만에 3개의 체험단에 당첨됐어요. 정말 감사합니다!",
    name: "박서연",
    title: "푸드 블로거",
    avatar: "/testimonials/avatar3.jpg"
  }
]
