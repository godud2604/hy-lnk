"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "블로그를 처음 시작하는데도 들을 수 있나요?",
    answer:
      "네, 물론입니다! 이 클래스는 블로그를 처음 시작하는 초보자를 위해 설계되었습니다. 블로그 개설부터 체험단 신청까지 모든 과정을 차근차근 알려드립니다.",
  },
  {
    question: "정말 6일 만에 체험단에 당첨될 수 있나요?",
    answer:
      "네, 가능합니다! 물론 모든 분이 정확히 6일 만에 당첨되는 것은 아니지만, 저희 커리큘럼을 충실히 따라하신 수강생 중 80% 이상이 2주 이내에 첫 체험단에 당첨되셨습니다. 중요한 것은 꾸준히 미션을 수행하는 것입니다.",
  },
  {
    question: "수강 기간은 어떻게 되나요?",
    answer:
      "기본 커리큘럼은 6일 과정이지만, 콘텐츠는 평생 소장 가능합니다. 자신의 페이스에 맞춰 학습하실 수 있으며, 미션 피드백은 구매일로부터 30일간 제공됩니다.",
  },
  {
    question: "어떤 종류의 체험단을 신청할 수 있나요?",
    answer:
      "주로 뷰티, 맛집, 라이프스타일 관련 체험단을 다루지만, 학습한 노하우는 모든 종류의 체험단에 적용 가능합니다. 수강생들은 화장품, 식품, 가전제품, 의류 등 다양한 카테고리의 체험단에 당첨되고 있습니다.",
  },
  {
    question: "환불 정책은 어떻게 되나요?",
    answer:
      "첫 구매 후 3일 이내에 불만족하시면 100% 환불해 드립니다. 단, 이미 제공된 콘텐츠를 다운로드하셨거나 피드백을 받으신 경우 일부 금액이 차감될 수 있습니다. 자세한 환불 정책은 구매 페이지에서 확인하실 수 있습니다.",
  },
  {
    question: "미션 피드백은 어떻게 받을 수 있나요?",
    answer:
      "각 일차별 미션을 완료하신 후 마이페이지에서 제출하시면, 24시간 이내에 전문 멘토의 개인 피드백을 받으실 수 있습니다. 피드백은 텍스트 형식으로 제공되며, 필요시 화상 상담도 예약 가능합니다(별도 비용).",
  },
]

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
