import { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeaturedPosts from "@/components/featured-posts"

export const metadata: Metadata = {
  title: "체험단 꿀팁 모음 | 에듀테크단",
  description: "체험단 초보자부터 전문가까지, 실전에서 바로 써먹을 수 있는 유용한 꿀팁들을 모았습니다.",
}

const allTips = [
  {
    id: 1,
    title: "체험단 당첨 확률 높이는 3가지 팁",
    description: "체험단에 자주 당첨되는 블로거들의 특별한 노하우 3가지를 공개합니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 1580,
    slug: "top-3-changes-for-selection"
  },
  {
    id: 2,
    title: "체험단 리뷰로 월 30만원 만드는 현실적인 방법",
    description: "체험단 활동으로 안정적인 부수입을 만드는 실제 수익화 전략을 공유합니다.",
    category: "수익화",
    date: "2025-05-02",
    views: 1350,
    slug: "monthly-300k-guide"
  },
  {
    id: 3,
    title: "핸드폰만으로 완성하는 프리미엄급 후기 사진",
    description: "비싼 장비 없이도 고퀄리티 사진을 찍는 노하우를 알려드립니다.",
    category: "사진팁",
    date: "2025-05-02",
    views: 1250,
    slug: "premium-photo-tips"
  },
  {
    id: 4,
    title: "체험단이 처음이라면? 이것부터 보세요",
    description: "체험단 초보자를 위한 기본 가이드라인과 주의사항을 한 눈에 정리했습니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 1150,
    slug: "beginners-guide"
  },
  {
    id: 5,
    title: "신청서에 꼭 쓰면 좋은 문장 모음 ZIP",
    description: "당첨률을 높이는 신청서 템플릿과 추천 문구를 정리했습니다.",
    category: "신청서",
    date: "2025-05-02",
    views: 980,
    slug: "application-templates"
  },
  {
    id: 6,
    title: "블로그 프로필 최적화하는 법",
    description: "체험단 담당자의 눈에 띄는 프로필 만드는 방법을 알려드립니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 920,
    slug: "profile-optimization"
  },
  {
    id: 7,
    title: "초보자가 하면 안 되는 실수 TOP 5",
    description: "체험단 활동 시 흔히 하는 실수와 해결방법을 알려드립니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 850,
    slug: "common-mistakes"
  },
  {
    id: 8,
    title: "리뷰 작성의 기술",
    description: "브랜드와 독자 모두에게 인정받는 리뷰 작성법을 공개합니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 820,
    slug: "review-writing"
  },
  {
    id: 9,
    title: "블로그 지수 빠르게 올리는 루틴",
    description: "매일 조금씩 실천하면 블로그 영향력이 커지는 꿀팁을 공개합니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 720,
    slug: "blog-growth-routine"
  },
]

export default function TipsPage() {
  const categories = ["전체", "초보자용", "신청서", "성장하기", "사진팁", "수익화", "모집정보"]
  
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">체험단 꿀팁 모음</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          처음 시작하는 분들을 위한 기본 가이드부터 수익화 전략까지,<br />
          체험단 성공을 위한 모든 꿀팁을 모았습니다.
        </p>
      </div>

      {/* 인기 게시물 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">📌 이번 주 인기 게시물</h2>
        <FeaturedPosts />
      </div>

      {/* 카테고리별 게시물 */}
      <div className="mb-8">
        <Tabs defaultValue="전체">
          <div className="flex items-center justify-between mb-6">
            <TabsList className="flex-wrap h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {allTips
                  .filter((tip) => category === "전체" || tip.category === category)
                  .map((tip) => (
                    <div
                      key={tip.id}
                      className="group relative border rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 py-1 rounded">
                          {tip.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        <a href={`/tips/${tip.slug}`}>{tip.title}</a>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                        {tip.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{tip.date}</span>
                        <a
                          href={`/tips/${tip.slug}`}
                          className="text-primary font-medium hover:underline"
                        >
                          자세히 보기
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* 구독 섹션 */}
      {/* TODO: 뉴스레터 할 때, 활성화 */}
      {/* <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-xl font-bold mb-4">매주 새로운 체험단 꿀팁 받아보기</h3>
        <p className="text-muted-foreground mb-6">
          매주 1회, 엄선된 체험단 꿀팁과 모집 정보를 보내드립니다.
        </p>
        <div className="flex max-w-md mx-auto">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className="flex-1 rounded-l-md border border-r-0 px-4 py-2"
          />
          <button className="bg-primary text-white px-6 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
            구독하기
          </button>
        </div>
      </div> */}
    </div>
  )
}

