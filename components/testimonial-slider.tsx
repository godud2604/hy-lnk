"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const testimonials = [
  {
    id: 1,
    name: "김지은",
    age: 28,
    job: "직장인",
    avatar: "/serene-asian-woman.png",
    quote:
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
    quote:
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
    quote:
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
    quote:
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
    quote:
      "마케터로 일하면서 부업으로 블로그 체험단 활동을 시작했는데, 이 강의 덕분에 월 5개 이상 제품을 받고 있어요. 체계적인 커리큘럼 감사합니다!",
    rating: 5,
    category: "종합",
    image: "/placeholder.svg?height=200&width=300&query=product+unboxing+collection",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-8 flex flex-col justify-between">
                  <div>
                    <Badge className="mb-4 bg-pink-100 text-pink-800 hover:bg-pink-100 border-none">
                      {testimonial.category} 체험단
                    </Badge>
                    <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-medium">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.age}세, {testimonial.job}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}의 체험단 후기`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full w-3 h-3 p-0 ${
              index === currentIndex ? "bg-pink-600 border-pink-600" : "border-pink-200 hover:bg-pink-50"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-pink-200 text-pink-600 hover:bg-pink-50"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
