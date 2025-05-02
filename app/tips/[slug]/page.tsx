import { Metadata } from "next"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"

// 각 팁의 상세 내용 데이터
const tipsDetails = {
  "top-3-changes-for-selection": {
    title: "체험단 당첨 확률 높이는 3가지 팁",
    description: "체험단에 자주 당첨되는 블로거들의 특별한 노하우 3가지를 공개합니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 1580,
    sections: [
      {
        title: "1. 블로그 프로필 최적화하기",
        content: `체험단 담당자들이 가장 먼저 보는 것은 블로그 프로필입니다.

        🎯 프로필 최적화 포인트
        - 전문성이 느껴지는 프로필 사진
        - 명확한 블로그 주제와 카테고리
        - 성실한 포스팅 활동 기록
        - 깔끔한 디자인과 가독성

        💡 실천 방법
        1. 프로필 사진 업데이트
           - 밝고 선명한 이미지 사용
           - 블로그 주제와 연관된 이미지
        
        2. 소개글 업데이트
           - 주요 리뷰 분야 명시
           - 블로그 운영 목적
           - 연락처 정보`
      },
      {
        title: "2. 꾸준한 포스팅 활동",
        content: `체험단은 블로그의 활동성을 중요하게 봅니다.

        📝 포스팅 전략
        - 주 2-3회 이상 정기적인 포스팅
        - 리뷰 위주의 콘텐츠 제작
        - 상세하고 정성스러운 후기 작성
        
        ⭐️ 중요 포인트
        - 단순 홍보성 글은 지양
        - 실제 사용 경험 위주로 작성
        - 고퀄리티 사진 첨부`
      }
    ],
    tips: [
      "프로필 업데이트는 매월 1회 이상 하기",
      "포스팅 시간대는 오전 10-11시가 효과적",
      "해시태그는 5-10개 정도가 적당",
    ],
    nextSteps: [
      "프로필 최적화 진단하기",
      "포스팅 주간 계획 세우기",
      "인기 블로그 벤치마킹하기"
    ]
  },
  "monthly-300k-guide": {
    title: "체험단 리뷰로 월 30만원 만드는 현실적인 방법",
    description: "체험단 활동으로 안정적인 부수입을 만드는 실제 수익화 전략을 공유합니다.",
    category: "수익화",
    date: "2025-05-02",
    views: 1350,
    sections: [
      {
        title: "1. 수익화 전략 수립하기",
        content: `체험단 활동으로 안정적인 수익을 만들기 위해서는 전략적인 접근이 필요합니다.

        📊 수익 구조 분석
        - 제품형 체험단: 현물 가치
        - 방문형 체험단: 식사 + 페이백
        - 구매형 체험단: 페이백 수익
        
        💰 월 30만원 달성을 위한 구성
        - 제품형: 15-20만원 상당
        - 방문형: 8-10만원 상당
        - 구매형: 5-8만원 수익`
      },
      {
        title: "2. 효율적인 체험단 선택",
        content: `모든 체험단에 신청하기보다는 수익성 높은 체험단을 선별하는 것이 중요합니다.

        🎯 체험단 선정 기준
        - 제품/서비스의 시장 가치
        - 작성 난이도 대비 보상
        - 페이백/현물 보상 비율
        
        ⭐️ 추천 카테고리
        - 뷰티: 고가 화장품, 프리미엄 케어
        - 식품: 건강식품, 프리미엄 식품
        - 가전: 중소형 가전제품
        - 패션: 시즌 신상품`
      }
    ],
    tips: [
      "한 달에 최소 8-10개의 체험단 참여하기",
      "고가 제품 위주로 신청하기",
      "페이백이 확실한 체험단 우선 선택"
    ],
    nextSteps: [
      "이번 달 체험단 목표 설정하기",
      "수익성 높은 카테고리 리스트 만들기",
      "주요 체험단 사이트 가입하기"
    ]
  },
  "premium-photo-tips": {
    title: "핸드폰만으로 완성하는 프리미엄급 후기 사진",
    description: "비싼 장비 없이도 고퀄리티 사진을 찍는 노하우를 알려드립니다.",
    category: "사진팁",
    date: "2025-05-02",
    views: 1250,
    sections: [
      {
        title: "1. 기본적인 사진 구도 익히기",
        content: `스마트폰으로도 전문가급 사진을 찍을 수 있습니다. 기본 구도부터 시작해보세요.

        📸 주요 구도법
        - 삼분할 구도
        - 대각선 구도
        - 프레임 구도
        - 대칭 구도
        
        💡 구도 연습 방법
        1. 카메라 그리드 선 활성화
        2. 주요 피사체 배치 연습
        3. 다양한 각도에서 시도`
      },
      {
        title: "2. 조명 활용하기",
        content: `자연광을 최대한 활용하는 것이 좋습니다.

        ☀️ 조명 활용 팁
        - 창가 근처에서 촬영
        - 황금시간대(아침/저녁) 활용
        - 그림자 활용한 입체감
        
        🌟 실내 촬영 시
        - LED 조명 활용
        - 반사판으로 그림자 조절
        - 간접광 활용하기`
      }
    ],
    tips: [
      "사진 찍기 전 주변 정리하기",
      "같은 제품도 다양한 각도에서 촬영",
      "밝은 곳에서 촬영하되 직사광선은 피하기"
    ],
    nextSteps: [
      "스마트폰 카메라 설정 최적화하기",
      "기본 구도 연습하기",
      "조명 활용 연습하기"
    ]
  },
  "beginners-guide": {
    title: "체험단이 처음이라면? 이것부터 보세요",
    description: "체험단 초보자를 위한 기본 가이드라인과 주의사항을 한 눈에 정리했습니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 1150,
    sections: [
      {
        title: "1. 체험단 시작 전 준비사항",
        content: `체험단 활동을 시작하기 전에 필요한 기본적인 준비사항들입니다.

        ✅ 필수 준비물
        - 네이버/티스토리 블로그
        - 스마트폰 (사진 촬영용)
        - 기본적인 글쓰기 능력
        
        📝 블로그 기본 세팅
        1. 프로필 설정
        2. 카테고리 구성
        3. 자기소개 작성`
      },
      {
        title: "2. 체험단의 종류",
        content: `체험단은 크게 세 가지 유형으로 나눌 수 있습니다.

        🎁 제품형 체험단
        - 제품을 무상으로 제공
        - 솔직한 리뷰 작성
        
        🏃 방문형 체험단
        - 매장/식당 방문
        - 서비스 체험 후 리뷰
        
        💰 구매형 체험단
        - 제품 구매 후 리뷰
        - 페이백으로 비용 보상`
      }
    ],
    tips: [
      "처음에는 제품형 체험단부터 시작하기",
      "리뷰 작성 규정 꼼꼼히 확인하기",
      "마감기한 준수하기"
    ],
    nextSteps: [
      "블로그 기본 세팅하기",
      "체험단 사이트 가입하기",
      "첫 체험단 신청하기"
    ]
  },
  "application-templates": {
    title: "신청서에 꼭 쓰면 좋은 문장 모음 ZIP",
    description: "당첨률을 높이는 신청서 템플릿과 추천 문구를 정리했습니다.",
    category: "신청서",
    date: "2025-05-02",
    views: 980,
    sections: [
      {
        title: "1. 신청서 기본 구조",
        content: `효과적인 신청서의 기본 구조를 알아봅시다.

        📝 신청서 구성요소
        1. 자기소개
        2. 신청 동기
        3. 리뷰 계획
        4. 차별화 포인트
        
        ✍️ 작성 시 주의사항
        - 맞춤법 검사 필수
        - 구체적인 계획 제시
        - 성의있는 작성`
      },
      {
        title: "2. 상황별 추천 문구",
        content: `상황에 맞는 효과적인 문구들입니다.

        💫 자기소개
        - "○○ 분야에서 ○년간 블로그 활동중인 ○○입니다"
        - "○○에 대한 전문성과 경험을 바탕으로 리뷰하고 싶습니다"
        
        🎯 차별화 포인트
        - "다양한 각도에서 디테일한 사진 촬영"
        - "실사용 후기 위주의 솔직한 리뷰"
        - "전문성을 살린 심층적인 분석"`
      }
    ],
    tips: [
      "항상 맞춤형으로 작성하기",
      "과도한 미사여구 자제하기",
      "구체적인 수치 포함하기"
    ],
    nextSteps: [
      "나만의 신청서 틀 만들기",
      "카테고리별 문구 준비하기",
      "맞춤형 신청서 작성 연습하기"
    ]
  },
  "profile-optimization": {
    title: "블로그 프로필 최적화하는 법",
    description: "체험단 담당자의 눈에 띄는 프로필 만드는 방법을 알려드립니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 920,
    sections: [
      {
        title: "1. 프로필 이미지 선정",
        content: `체험단 담당자에게 좋은 인상을 주는 프로필 이미지를 만들어봅시다.

        🖼️ 이미지 선정 기준
        - 밝고 선명한 이미지
        - 블로그 컨셉과 일치
        - 전문성이 느껴지는 구도
        
        ✨ 추천 이미지 유형
        - 제품 리뷰 모습
        - 전문가스러운 포트레이트
        - 브랜딩에 맞는 일러스트`
      },
      {
        title: "2. 소개글 작성하기",
        content: `프로필 소개글은 체험단 선정에 큰 영향을 미칩니다.

        📝 필수 포함 요소
        - 블로그 주제와 방향성
        - 전문 분야 및 경력
        - 리뷰 작성 스타일
        - 연락처 정보
        
        💫 차별화 포인트
        - 구체적인 수치 포함
        - 독특한 리뷰 스타일
        - 전문성 강조`
      }
    ],
    tips: [
      "프로필은 3개월마다 업데이트하기",
      "연락처는 반드시 포함하기",
      "전문성이 느껴지는 단어 사용하기"
    ],
    nextSteps: [
      "현재 프로필 점검하기",
      "전문성 있는 프로필 사진 준비하기",
      "소개글 리뉴얼하기"
    ]
  },
  "common-mistakes": {
    title: "초보자가 하면 안 되는 실수 TOP 5",
    description: "체험단 활동 시 흔히 하는 실수와 해결방법을 알려드립니다.",
    category: "초보자용",
    date: "2025-05-02",
    views: 850,
    sections: [
      {
        title: "1. 흔한 실수 알아보기",
        content: `초보자들이 자주 하는 실수들을 살펴봅시다.

        ❌ 주요 실수
        1. 마감기한 미준수
        2. 가이드라인 무시
        3. 불성실한 리뷰
        4. 과도한 홍보성 문구
        5. 부실한 사진 첨부
        
        ⚠️ 실수의 결과
        - 블랙리스트 등재
        - 재선정 기회 상실
        - 패널티 부과`
      },
      {
        title: "2. 올바른 체험단 활동법",
        content: `실수를 피하고 성공적인 체험단 활동을 하는 방법입니다.

        ✅ 체크리스트
        - 마감기한 준수
        - 가이드라인 철저 준수
        - 상세한 사용 후기
        - 자연스러운 리뷰 톤
        - 고퀄리티 사진 첨부
        
        💡 전문가의 조언
        - 캘린더에 일정 기록
        - 리뷰 작성 템플릿 활용
        - 사진 촬영 가이드 준수`
      }
    ],
    tips: [
      "체험 일정은 반드시 캘린더에 기록하기",
      "가이드라인은 스크린샷으로 저장해두기",
      "리뷰 작성은 여유있게 시간 두기"
    ],
    nextSteps: [
      "체험단 가이드라인 복습하기",
      "리뷰 작성 템플릿 만들기",
      "일정 관리 시스템 구축하기"
    ]
  },
  "review-writing": {
    title: "리뷰 작성의 기술",
    description: "브랜드와 독자 모두에게 인정받는 리뷰 작성법을 공개합니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 820,
    sections: [
      {
        title: "1. 리뷰 기본 구조",
        content: `효과적인 리뷰의 기본 구조를 알아봅시다.

        📑 기본 구성
        1. 제품/서비스 소개
        2. 사용 경험
        3. 장단점 분석
        4. 총평
        
        💎 차별화 포인트
        - 디테일한 관찰
        - 객관적 시각
        - 비교 분석
        - 실용적인 팁`
      },
      {
        title: "2. 설득력 있는 문장 쓰기",
        content: `독자를 설득하는 효과적인 문장 작성법입니다.

        📝 작성 원칙
        - 구체적인 근거 제시
        - 솔직한 의견 전달
        - 명확한 문장 구조
        
        🎯 실전 팁
        - 비교 분석 활용
        - 수치화된 정보
        - 실제 사용 경험
        - 구체적인 장단점`
      }
    ],
    tips: [
      "항상 메모하며 체험하기",
      "사진은 최소 10장 이상 준비하기",
      "키워드는 자연스럽게 녹이기"
    ],
    nextSteps: [
      "리뷰 작성 템플릿 만들기",
      "포토 리뷰 구도 연습하기",
      "키워드 리스트 준비하기"
    ]
  },
  "blog-growth-routine": {
    title: "블로그 지수 빠르게 올리는 루틴",
    description: "매일 조금씩 실천하면 블로그 영향력이 커지는 꿀팁을 공개합니다.",
    category: "성장하기",
    date: "2025-05-02",
    views: 720,
    sections: [
      {
        title: "1. 일간 루틴",
        content: `매일 해야 하는 블로그 성장 루틴입니다.

        📅 데일리 체크리스트
        - 댓글 확인 및 답글
        - 이웃 블로그 방문
        - 통계 확인
        - 키워드 검색
        
        ⏰ 시간대별 활동
        - 오전: 댓글 관리
        - 오후: 포스팅 작성
        - 저녁: 이웃 방문`
      },
      {
        title: "2. 주간 계획",
        content: `일주일 단위로 관리해야 할 항목들입니다.

        📊 주간 목표
        - 포스팅 3-4회
        - 이웃 방문 50회
        - 신규 이웃 만들기
        
        📈 성과 체크
        - 조회수 추이
        - 이웃 증가율
        - 댓글 참여도
        - 검색 노출 순위`
      }
    ],
    tips: [
      "매일 같은 시간에 활동하기",
      "주말에는 트래픽이 많은 시간대 공략",
      "월간 목표 달성률 체크하기"
    ],
    nextSteps: [
      "데일리 루틴 체크리스트 만들기",
      "주간 목표 설정하기",
      "월간 성과 분석 준비하기"
    ]
  },
  "may-opportunities": {
    title: "이번 달 주요 체험단 모집 일정 총정리",
    description: "5월 주요 브랜드 체험단 모집 일정과 신청 팁을 정리했습니다.",
    category: "모집정보",
    date: "2025-05-02",
    views: 1100,
    sections: [
      {
        title: "1. 5월 모집 캘린더",
        content: `5월 주요 체험단 모집 일정입니다.

        📅 상반기 (5/1-5/15)
        - A브랜드: 여름 신상품 (5/3)
        - B카페: 분위기 맛집 (5/7)
        - C전자: 신제품 체험단 (5/12)
        
        📅 하반기 (5/16-5/31)
        - D뷰티: 썸머 컬렉션 (5/18)
        - E푸드: 건강식품 (5/23)
        - F리빙: 홈케어 제품 (5/28)`
      },
      {
        title: "2. 카테고리별 꿀팁",
        content: `각 카테고리별 신청 포인트입니다.

        💄 뷰티
        - 피부 타입 명시
        - 화장품 리뷰 경험
        
        🍽️ 맛집
        - 리뷰 작성 스타일
        - 사진 촬영 능력
        
        🏠 리빙
        - 인테리어 감각
        - 실사용 후기 중심`
      }
    ],
    tips: [
      "관심 브랜드는 알림 설정하기",
      "모집 시작 직후 신청하기",
      "카테고리별 신청서 미리 준비하기"
    ],
    nextSteps: [
      "관심 체험단 캘린더 등록하기",
      "카테고리별 포트폴리오 준비하기",
      "신청서 템플릿 업데이트하기"
    ]
  }
}

// Add PageProps type for Next.js 13+
type PageProps = {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tip = tipsDetails[params.slug as keyof typeof tipsDetails]

  if (!tip) {
    return {
      title: "페이지를 찾을 수 없습니다",
      description: "요청하신 팁을 찾을 수 없습니다."
    }
  }

  return {
    title: `${tip.title} | 에듀테크단`,
    description: tip.description
  }
}

export default function TipDetailPage({ params }: PageProps) {
  const tip = tipsDetails[params.slug as keyof typeof tipsDetails]

  if (!tip) {
    notFound()
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/tips">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
              {tip.category}
            </span>
            <span>•</span>
            <span>{tip.date}</span>
            <span>•</span>
            <span>조회수 {tip.views}</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">{tip.title}</h1>
          <p className="text-lg text-muted-foreground">{tip.description}</p>
        </div>

        <article className="prose prose-zinc max-w-none">
          {tip.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
              <div className="whitespace-pre-line">{section.content}</div>
            </div>
          ))}

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-6">💡 핵심 포인트</h2>
            <ul className="space-y-2">
              {tip.tips.map((tip, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="my-12">
            <h2 className="text-2xl font-bold mb-6">👉 다음 단계</h2>
            <ul className="space-y-2">
              {tip.nextSteps.map((step, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* 커리큘럼 연결 섹션 */}
        <div className="mt-16 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">🎯 더 빠르게 성장하고 싶다면?</h2>
          <p className="text-lg mb-6">
            "6일만에 체험단 당첨" 커리큘럼으로 체계적인 학습을 시작하세요.<br />
            전문가의 1:1 피드백과 함께 성장할 수 있습니다.
          </p>
          <Button asChild>
            <Link href="/course/day1">
              커리큘럼 시작하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}