"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "김지은",
    age: 28,
    job: "직장인",
    avatar: "/serene-asian-woman.png",
    content:
      "블로그 초보였던 제가 6일 만에 화장품 체험단에 당첨됐어요! 단계별로 따라하기 쉽게 알려주셔서 정말 감사합니다.",
    rating: 5,
    category: "뷰티",
    image: "/placeholder.svg?height=200&width=300&query=cosmetic+product+unboxing",
  },
  {
    id: 2,
    name: "박서연",
    age: 32,
    job: "프리랜서",
    avatar: "/placeholder.svg?height=80&width=80&query=asian+woman+portrait+2",
    content:
      "휴면 계정이었는데, 이 강의 듣고 활성화시켜서 첫 신청에 맛집 체험단에 붙었어요! 키워드 선정 팁이 정말 도움 됐습니다.",
    rating: 5,
    category: "맛집",
    image: "/food-blogger-review.png",
  },
  {
    id: 3,
    name: "이민지",
    age: 25,
    job: "대학생",
    avatar: "/placeholder.svg?height=80&width=80&query=asian+woman+portrait+3",
    content:
      "학생이라 돈이 없어서 화장품 살 여유가 없었는데, 이제 체험단으로 받은 제품들로 리뷰 쓰고 있어요! 정말 실용적인 강의였습니다.",
    rating: 4,
    category: "뷰티",
    image: "/placeholder.svg?height=200&width=300&query=beauty+product+review",
  },
  {
    id: 4,
    name: "최준호",
    age: 30,
    job: "회사원",
    avatar: "/placeholder.svg?height=80&width=80&query=asian+man+portrait",
    content:
      "남자인 제가 체험단에 선정될 수 있을까 걱정했는데, 강의 내용대로 따라하니 캠핑용품 체험단에 바로 붙었어요! 남성분들도 추천합니다.",
    rating: 5,
    category: "라이프스타일",
    image: "/placeholder.svg?height=200&width=300&query=camping+gear+review",
  },
  {
    id: 5,
    name: "정다연",
    age: 27,
    job: "마케터",
    avatar: "/placeholder.svg?height=80&width=80&query=asian+woman+portrait+4",
    content:
      "마케터로 일하면서 부업으로 블로그 체험단 활동을 시작했는데, 이 강의 덕분에 월 5개 이상 제품을 받고 있어요. 체계적인 커리큘럼 감사합니다!",
    rating: 5,
    category: "종합",
    image: "/placeholder.svg?height=200&width=300&query=product+unboxing+collection",
  },
]

export default function TestimonialSlider() {
  return (
    <div className="w-full py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            크리에이터들의 생생한 후기
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/70 backdrop-blur-lg border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="relative w-12 h-12">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  {/* <p className="text-sm text-gray-600">{testimonial.title}</p> */}
                </div>
              </div>
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 w-8 h-8 text-primary/10 transform -translate-x-4 -translate-y-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="relative text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
              <div className="mt-4 flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
