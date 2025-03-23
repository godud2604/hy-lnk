import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, DollarSign, Users, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MonetizationPage() {
  const affiliatePrograms = [
    {
      id: 1,
      name: "쿠팡 파트너스",
      description:
        "국내 최대 이커머스 플랫폼의 제휴 마케팅 프로그램으로, 다양한 제품을 홍보하고 수수료를 받을 수 있습니다.",
      commission: "최대 6%",
      cookieDuration: "24시간",
      paymentMethod: "계좌이체",
      minPayout: "10,000원",
      link: "https://partners.coupang.com/",
      category: "종합몰",
    },
    {
      id: 2,
      name: "아마존 어소시에이트",
      description: "글로벌 최대 이커머스 플랫폼의 제휴 프로그램으로, 해외 제품을 소개하고 수익을 얻을 수 있습니다.",
      commission: "카테고리별 1-10%",
      cookieDuration: "24시간",
      paymentMethod: "계좌이체, 아마존 기프트카드",
      minPayout: "$10",
      link: "https://affiliate-program.amazon.com/",
      category: "종합몰",
    },
    {
      id: 3,
      name: "스타일쉐어 파트너스",
      description: "패션, 뷰티 중심의 커머스 플랫폼으로, 트렌디한 제품을 소개하고 수익을 얻을 수 있습니다.",
      commission: "최대 8%",
      cookieDuration: "30일",
      paymentMethod: "계좌이체",
      minPayout: "10,000원",
      link: "https://www.styleshare.kr/",
      category: "패션/뷰티",
    },
  ]

  const membershipOptions = [
    {
      id: 1,
      name: "베이직 멤버십",
      price: "월 9,900원",
      features: ["체험단 꿀팁 프리미엄 콘텐츠 접근", "월 1회 체험단 지원서 첨삭", "멤버 전용 커뮤니티 액세스"],
      recommended: false,
    },
    {
      id: 2,
      name: "프로 멤버십",
      price: "월 19,900원",
      features: [
        "베이직 멤버십의 모든 혜택",
        "월 3회 체험단 지원서 첨삭",
        "우선 체험단 신청 기회",
        "월 1회 1:1 화상 컨설팅 (30분)",
      ],
      recommended: true,
    },
    {
      id: 3,
      name: "VIP 멤버십",
      price: "월 39,900원",
      features: [
        "프로 멤버십의 모든 혜택",
        "무제한 체험단 지원서 첨삭",
        "월 2회 1:1 화상 컨설팅 (각 45분)",
        "브랜드 제휴 체험단 우선 선발",
        "수익화 전략 맞춤 컨설팅",
      ],
      recommended: false,
    },
  ]

  const digitalProducts = [
    {
      id: 1,
      name: "체험단 합격률 200% 높이는 지원서 템플릿",
      description: "100+ 체험단 합격 노하우를 담은 지원서 템플릿과 작성 가이드",
      price: "29,900원",
      category: "템플릿",
      link: "#",
    },
    {
      id: 2,
      name: "인스타그램 체험단 마스터 클래스",
      description: "팔로워 수와 상관없이 고단가 체험단에 선정되는 인스타그램 최적화 전략",
      price: "49,900원",
      category: "온라인 강의",
      link: "#",
    },
    {
      id: 3,
      name: "체험단 크리에이터 수익화 가이드북",
      description: "체험단 활동을 통해 월 100만원 이상 수익을 창출하는 전략과 노하우",
      price: "19,900원",
      category: "전자책",
      link: "#",
    },
  ]

  return (
    <div className="container py-12">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="icon" asChild className="mr-2">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">수익 창출 방법</h1>
      </div>

      <p className="text-muted-foreground mb-8 max-w-3xl">
        체험단 활동을 넘어 다양한 방법으로 수익을 창출할 수 있는 전략과 도구를 소개합니다. 아래 방법들을 조합하여
        안정적인 수익 포트폴리오를 구축해보세요.
      </p>

      <Tabs defaultValue="affiliate" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="affiliate" className="flex items-center">
            <DollarSign className="mr-2 h-4 w-4" />
            애필리에이트
          </TabsTrigger>
          <TabsTrigger value="membership" className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            멤버십
          </TabsTrigger>
          <TabsTrigger value="digital" className="flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            디지털 상품
          </TabsTrigger>
        </TabsList>

        <TabsContent value="affiliate">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">애필리에이트 마케팅으로 수익 창출하기</h2>
            <p className="text-muted-foreground max-w-3xl">
              체험단 콘텐츠에 자연스럽게 애필리에이트 링크를 포함하여 추가 수익을 창출할 수 있습니다. 아래는
              크리에이터에게 추천하는 주요 애필리에이트 프로그램입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {affiliatePrograms.map((program) => (
              <Card key={program.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{program.name}</CardTitle>
                  <CardDescription className="line-clamp-2">{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0 text-sm space-y-3">
                  <div>
                    <span className="font-medium">수수료:</span> {program.commission}
                  </div>
                  <div>
                    <span className="font-medium">쿠키 유효기간:</span> {program.cookieDuration}
                  </div>
                  <div>
                    <span className="font-medium">지급 방식:</span> {program.paymentMethod}
                  </div>
                  <div>
                    <span className="font-medium">최소 출금액:</span> {program.minPayout}
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild className="w-full">
                    <Link href={program.link} target="_blank" rel="noopener noreferrer">
                      가입하기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">애필리에이트 마케팅 성공 팁</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>체험단 리뷰와 자연스럽게 연결되는 관련 제품을 추천하세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>직접 사용해본 제품을 추천하여 신뢰도를 높이세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>할인 코드나 특별 프로모션을 제공하면 전환율이 높아집니다.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>여러 플랫폼에 동일한 콘텐츠를 배포하여 도달률을 높이세요.</span>
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="membership">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">멤버십 프로그램으로 안정적인 수익 창출하기</h2>
            <p className="text-muted-foreground max-w-3xl">
              체험단 노하우와 전문 지식을 바탕으로 멤버십 프로그램을 운영하여 정기적인 수익을 창출할 수 있습니다. 아래는
              추천하는 멤버십 구성 예시입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {membershipOptions.map((option) => (
              <Card
                key={option.id}
                className={`flex flex-col h-full relative ${option.recommended ? "border-primary shadow-lg" : ""}`}
              >
                {option.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    추천
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{option.name}</CardTitle>
                  <CardDescription className="text-xl font-bold mt-2">{option.price}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0 text-sm">
                  <ul className="space-y-2">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button variant={option.recommended ? "default" : "outline"} className="w-full">
                    가입하기
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">성공적인 멤버십 운영 팁</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>정기적으로 고품질 독점 콘텐츠를 제공하여 가치를 입증하세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>멤버 전용 커뮤니티를 활성화하여 소속감을 높이세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>멤버 피드백을 적극 반영하여 지속적으로 서비스를 개선하세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>특별 이벤트와 혜택을 주기적으로 제공하여 멤버십 가치를 높이세요.</span>
              </li>
            </ul>
          </div>
        </TabsContent>

        <TabsContent value="digital">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">디지털 상품으로 수익 창출하기</h2>
            <p className="text-muted-foreground max-w-3xl">
              체험단 활동과 콘텐츠 제작 노하우를 담은 디지털 상품을 판매하여 추가 수익을 창출할 수 있습니다. 한 번
              제작하면 지속적인 판매가 가능한 효율적인 수익 모델입니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {digitalProducts.map((product) => (
              <Card key={product.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-2">
                    <Badge variant="outline">{product.category}</Badge>
                  </div>
                  <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-3">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 pt-0">
                  <p className="font-bold text-lg">{product.price}</p>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button asChild className="w-full">
                    <Link href={product.link}>
                      구매하기 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">디지털 상품 제작 및 판매 팁</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>자신만의 독특한 노하우와 경험을 담아 차별화된 상품을 제작하세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>무료 샘플을 제공하여 상품의 가치를 미리 보여주세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>정기적으로 콘텐츠를 업데이트하여 상품의 수명을 연장하세요.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>구매자 후기와 성공 사례를 적극 활용하여 신뢰도를 높이세요.</span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>

      {/* 추가 수익 창출 아이디어 */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">더 많은 수익 창출 아이디어</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>브랜드 협업 및 스폰서십</CardTitle>
              <CardDescription>
                체험단을 넘어 장기적인 브랜드 앰배서더나 스폰서십 계약을 통해 안정적인 수익을 창출하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>특정 브랜드나 제품군에 특화된 콘텐츠를 제작하여 전문성을 키우세요.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>미디어 킷을 준비하여 브랜드에 자신의 가치를 효과적으로 어필하세요.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>컨설팅 및 코칭 서비스</CardTitle>
              <CardDescription>
                체험단 활동 노하우를 바탕으로 다른 크리에이터나 브랜드에게 컨설팅 서비스를 제공하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>1:1 코칭, 그룹 워크숍, 온라인 강의 등 다양한 형태로 서비스를 제공하세요.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>성공 사례와 데이터를 바탕으로 서비스의 가치를 증명하세요.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-full">
            <CardHeader>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>체험단 중개 플랫폼 운영</CardTitle>
              <CardDescription>
                브랜드와 크리에이터를 연결하는 중개 플랫폼을 운영하여 수수료 수익을 창출하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 pt-0">
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>특정 분야나 틈새 시장에 특화된 플랫폼으로 차별화하세요.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5" />
                  <span>양질의 크리에이터 풀을 구축하여 브랜드에게 가치를 제공하세요.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

