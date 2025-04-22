"use client"

import Link from "next/link"
import { useState } from "react"
import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  MapPin,
  Package,
  Store,
  CheckCircle2,
  XCircle,
  Edit,
  Trash2,
  ChevronDown,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import ScheduleFormModal, { type ScheduleFormData } from "@/components/schedule-form-modal"
import { toast } from "@/hooks/use-toast"

export default function SchedulePage() {
  // 실제 구현 시 데이터베이스에서 가져온 데이터를 사용
  const [events, setEvents] = useState([
    {
      id: 1,
      site: "체험단 사이트 A",
      title: "식품 브랜드 A 신제품 체험단",
      company: "A 식품",
      deadline: new Date("2023-07-10"),
      applicationStart: "2023-06-25",
      category: "food",
      platform: "instagram",
      note: "신제품 스낵",
      price: "제품 + 10만원",
      mainType: "product" as const,
      subType: "free" as const,
      isPayback: false,
      isPaybackReceived: false,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: false,
      status: "완료", // 마감일이 과거이므로 완료로 변경
      requirements: "인스타그램 팔로워 1,000명 이상",
      details: "신제품 출시 기념 체험단 모집. 총 10명 선발 예정.",
    },
    {
      id: 2,
      site: "체험단 사이트 B",
      title: "여름 뷰티 아이템 인스타그램 체험단",
      company: "B 코스메틱",
      deadline: new Date("2023-07-15"),
      applicationStart: "2023-06-30",
      category: "beauty",
      platform: "instagram",
      note: "여름 화장품 세트",
      price: "제품 + 5만원",
      mainType: "product" as const,
      subType: "free" as const,
      isPayback: false,
      isPaybackReceived: false,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: false,
      status: "완료", // 마감일이 과거이므로 완료로 변경
      requirements: "인스타그램 팔로워 3,000명 이상",
      details: "여름 신제품 라인업 체험 및 리뷰. 총 5명 선발 예정.",
    },
    {
      id: 3,
      site: "체험단 사이트 C",
      title: "가전제품 유튜브 리뷰어 모집",
      company: "C 전자",
      deadline: new Date("2023-07-20"),
      applicationStart: "2023-07-01",
      category: "electronics",
      platform: "youtube",
      note: "신형 공기청정기",
      price: "제품 제공 (10만원 상당)",
      mainType: "product" as const,
      subType: "free" as const,
      isPayback: false,
      isPaybackReceived: false,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: true,
      status: "완료", // 마감일이 과거이므로 완료로 변경
      requirements: "유튜브 구독자 500명 이상",
      details: "신형 공기청정기 리뷰 영상 제작. 총 3명 선발 예정.",
    },
    {
      id: 4,
      site: "체험단 사이트 D",
      title: "여행 액세서리 블로그 체험단",
      company: "D 트래블",
      deadline: new Date("2023-07-25"),
      applicationStart: "2023-07-05",
      category: "travel",
      platform: "blog",
      note: "여행용 스마트 가방",
      price: "제품 + 8만원",
      mainType: "product" as const,
      subType: "paid" as const,
      isPayback: true,
      isPaybackReceived: false,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: false,
      status: "완료", // 마감일이 과거이므로 완료로 변경
      requirements: "월 방문자 1,000명 이상의 블로그 운영자",
      details: "여행용 스마트 가방 및 액세서리 체험. 총 5명 선발 예정.",
    },
    {
      id: 5,
      site: "체험단 사이트 E",
      title: "키즈 완구 인스타그램 체험단",
      company: "E 토이즈",
      deadline: new Date("2023-07-30"),
      applicationStart: "2023-07-10",
      category: "kids",
      platform: "instagram",
      note: "교육용 완구 세트",
      price: "제품 제공 (5만원 상당)",
      mainType: "product" as const,
      subType: "free" as const,
      isPayback: false,
      isPaybackReceived: false,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: false,
      status: "완료", // 마감일이 과거이므로 완료로 변경
      requirements: "육아 관련 인스타그램 계정 운영자",
      details: "신규 교육용 완구 체험 및 리뷰. 총 10명 선발 예정.",
    },
    {
      id: 6,
      site: "체험단 사이트 F",
      title: "홈트레이닝 기구 유튜브 체험단",
      company: "F 피트니스",
      deadline: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000), // 현재 날짜로부터 30일 후
      applicationStart: "2023-07-15",
      category: "sports",
      platform: "youtube",
      note: "홈트레이닝 기구",
      price: "제품 + 15만원",
      mainType: "product" as const,
      subType: "paid" as const,
      isPayback: true,
      isPaybackReceived: true,
      hasDeposit: false,
      isDepositReturned: false,
      isWritten: true,
      status: "진행중", // 마감일이 미래이므로 진행중으로 변경
      requirements: "피트니스 관련 콘텐츠 제작자",
      details: "혁신적인 홈트레이닝 기구 체험 및 리뷰. 총 3명 선발 예정.",
    },
    {
      id: 7,
      site: "체험단 사이트 G",
      title: "서울 강남 신규 카페 방문 체험단",
      company: "G 카페",
      deadline: new Date(new Date().getTime() + 20 * 24 * 60 * 60 * 1000), // 현재 날짜로부터 20일 후
      applicationStart: "2023-07-20",
      category: "food",
      platform: "instagram",
      note: "카페 음료 및 디저트",
      price: "음료 2잔 + 디저트 1개 + 5만원",
      mainType: "visit" as const,
      region: "seoul",
      hasDeposit: true,
      isDepositReturned: true,
      isWritten: false,
      status: "진행중", // 마감일이 미래이므로 진행중으로 변경
      requirements: "인스타그램 팔로워 2,000명 이상",
      details: "강남 신규 오픈 카페 방문 및 리뷰. 총 5명 선발 예정.",
    },
    {
      id: 8,
      site: "체험단 사이트 H",
      title: "부산 해운대 레스토랑 방문 체험단",
      company: "H 레스토랑",
      deadline: new Date(new Date().getTime() + 40 * 24 * 60 * 60 * 1000), // 현재 날짜로부터 40일 후
      applicationStart: "2023-07-25",
      category: "food",
      platform: "blog",
      note: "코스 요리",
      price: "2인 코스 요리 + 3만원",
      mainType: "visit" as const,
      region: "busan",
      hasDeposit: true,
      isDepositReturned: false,
      isWritten: true,
      status: "진행중", // 마감일이 미래이므로 진행중으로 변경
      requirements: "월 방문자 3,000명 이상의 블로그 운영자",
      details: "부산 해운대 신규 레스토랑 방문 및 리뷰. 총 3명 선발 예정.",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("전체")
  const [selectedStatus, setSelectedStatus] = useState("전체")
  const [selectedSort, setSelectedSort] = useState("마감임박순")
  const [selectedTab, setSelectedTab] = useState("전체")
  const [editingEvent, setEditingEvent] = useState<ScheduleFormData | null>(null)

  const categories = ["전체", "식품", "뷰티", "가전", "여행", "키즈", "스포츠/피트니스"]
  const statuses = ["전체", "진행중", "완료"]
  const platforms = {
    instagram: "인스타그램",
    naver: "네이버 쇼츠",
    youtube: "유튜브",
    tiktok: "틱톡",
    blog: "블로그",
    other: "기타",
  }

  const handleAddSchedule = (data: ScheduleFormData) => {
    if (data.id) {
      // 기존 일정 업데이트
      setEvents((prev: any) => prev.map((event: any) => (event.id === data.id ? { ...data, id: event.id } : event)))
      toast({
        title: "일정이 수정되었습니다",
        description: "일정 정보가 성공적으로 업데이트되었습니다.",
      })
    } else {
      // 새 일정 추가
      const newId = Math.max(0, ...events.map((e) => e.id)) + 1

      // 상태 결정 로직 - 마감일 기준
      let status = "진행중"
      const today = new Date()
      const deadlineDate = new Date(data.deadline)

      if (deadlineDate < today) {
        status = "완료"
      }

      const newEvent = {
        ...data,
        id: newId,
        company: data.site, // 임시로 사이트 이름을 회사 이름으로 사용
        applicationStart: new Date(data.deadline.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0], // 임시로 마감일 1주일 전
        status,
        requirements: "요구사항 정보 없음", // 기본값
        details: "상세 정보 없음", // 기본값
      }

      setEvents((prev: any) => [...prev, newEvent])
      toast({
        title: "새 일정이 등록되었습니다",
        description: "새로운 체험단 일정이 성공적으로 등록되었습니다.",
      })
    }
  }

  const handleDeleteEvent = (id: number) => {
    setEvents((prev) => prev.filter((event) => event.id !== id))
    toast({
      title: "일정이 삭제되었습니다",
      description: "체험단 일정이 성공적으로 삭제되었습니다.",
    })
  }

  // 카테고리 ID를 한글 이름으로 변환하는 함수
  const getCategoryName = (categoryId: string) => {
    const categoryMap: Record<string, string> = {
      food: "식품",
      beauty: "뷰티",
      electronics: "가전",
      travel: "여행",
      kids: "키즈",
      sports: "스포츠/피트니스",
    }
    return categoryMap[categoryId] || categoryId
  }

  // 지역 ID를 한글 이름으로 변환하는 함수
  const getRegionName = (regionId: string) => {
    const regionMap: Record<string, string> = {
      seoul: "서울",
      gyeonggi: "경기",
      incheon: "인천",
      busan: "부산",
      daegu: "대구",
      daejeon: "대전",
      gwangju: "광주",
      ulsan: "울산",
      gangwon: "강원",
      chungbuk: "충북",
      chungnam: "충남",
      jeonbuk: "전북",
      jeonnam: "전남",
      gyeongbuk: "경북",
      gyeongnam: "제주",
    }
    return regionMap[regionId] || regionId
  }

  // 필터링 및 정렬된 이벤트 목록 가져오기
  const getFilteredEvents = () => {
    return events
      .filter((event) => {
        // 탭 필터링
        if (selectedTab !== "전체" && event.status !== selectedTab) return false

        // 카테고리 필터링
        if (selectedCategory !== "전체" && getCategoryName(event.category) !== selectedCategory) return false

        // 검색어 필터링
        if (searchTerm && !event.title.toLowerCase().includes(searchTerm.toLowerCase())) return false

        return true
      })
      .sort((a, b) => {
        // 정렬
        if (selectedSort === "마감임박순") {
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        } else if (selectedSort === "최신등록순") {
          return b.id - a.id
        }
        return 0
      })
  }

  const filteredEvents = getFilteredEvents()

  return (
    <div className="container py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">체험단 일정</h1>
        </div>

        {/* 일정 등록 버튼 */}
        <ScheduleFormModal
          onSubmit={handleAddSchedule}
          existingSchedules={events}
          initialData={editingEvent || undefined}
        />
      </div>

      {/* 검색 및 필터 섹션 */}
      <div className="mb-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="일정 검색..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="정렬" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="마감임박순">마감임박순</SelectItem>
                <SelectItem value="최신등록순">최신등록순</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* 탭 네비게이션 */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="mb-6">
        <TabsList className="mb-4 w-full justify-start overflow-x-auto">
          {statuses.map((status) => (
            <TabsTrigger key={status} value={status} className="min-w-[80px]">
              {status}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* 일정 목록 */}
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">일치하는 일정이 없습니다.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <Card
              key={event.id}
              className="flex flex-col h-full overflow-hidden border-l-4 hover:shadow-md transition-shadow"
              style={{
                borderLeftColor:
                  event.mainType === "product" ? (event.subType === "free" ? "#8b5cf6" : "#ec4899") : "#06b6d4",
              }}
            >
              <CardHeader className="pb-2 relative">
                {/* 상태 및 카테고리 배지 */}
                <div className="flex justify-between items-start mb-1">
                  <div className="flex gap-1">
                    <Badge
                      variant={event.status === "진행중" ? "default" : "outline"}
                      className={event.status === "진행중" ? "bg-primary" : "bg-gray-100 text-gray-600"}
                    >
                      {event.status}
                    </Badge>
                    {event.isWritten && (
                      <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
                        작성완료
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="bg-lavender-50 text-primary border-lavender-200">
                      {getCategoryName(event.category)}
                    </Badge>
                  </div>
                </div>

                {/* 제목 및 유형 아이콘 */}
                <div className="flex items-start gap-2 mt-1">
                  <div className="mt-0.5">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="bg-muted rounded-full p-1.5">
                            {event.mainType === "product" ? (
                              <Package className="h-4 w-4 text-primary" />
                            ) : (
                              <Store className="h-4 w-4 text-cyan-500" />
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          {event.mainType === "product"
                            ? `제품형 (${event.subType === "free" ? "제공형" : "구매형"})`
                            : "방문형"}
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div>
                    <h3 className="font-medium text-base line-clamp-2">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.site}</p>
                  </div>
                </div>

                {/* 액션 메뉴 */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="absolute top-3 right-3 h-8 w-8">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setEditingEvent(event)}>
                      <Edit className="mr-2 h-4 w-4" /> 수정
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-destructive focus:text-destructive"
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      <Trash2 className="mr-2 h-4 w-4" /> 삭제
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>

              <CardContent className="py-3 text-sm flex-grow">
                {/* 날짜 정보 */}
                <div className="flex flex-col gap-1 mb-3">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="mr-2 h-4 w-4 text-primary" />
                    <span>마감: {event.deadline.toISOString().split("T")[0]}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4 text-primary" />
                    <span>플랫폼: {platforms[event.platform as keyof typeof platforms]}</span>
                  </div>
                </div>

                <Separator className="my-3" />

                {/* 상세 정보 */}
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">보상:</span> {event.price}
                  </div>

                  {event.note && (
                    <div>
                      <span className="font-medium">비고:</span> {event.note}
                    </div>
                  )}

                  {/* 방문형일 때 지역 정보 표시 */}
                  {event.mainType === "visit" && event.region && (
                    <div className="flex items-center">
                      <span className="font-medium mr-1">지역:</span>
                      <MapPin className="h-3.5 w-3.5 mr-1 text-muted-foreground" />
                      <span>{getRegionName(event.region)}</span>
                    </div>
                  )}

                  {/* 제품형-구매형일 때 페이백 정보 표시 */}
                  {event.mainType === "product" && event.subType === "paid" && event.isPayback && (
                    <div className="flex items-center">
                      <span className="font-medium mr-1">페이백:</span>
                      {event.isPaybackReceived ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> 받음
                        </span>
                      ) : (
                        <span className="flex items-center text-amber-600">
                          <XCircle className="h-3.5 w-3.5 mr-1" /> 미수령
                        </span>
                      )}
                    </div>
                  )}

                  {/* 방문형일 때 예약금 정보 표시 */}
                  {event.mainType === "visit" && event.hasDeposit && (
                    <div className="flex items-center">
                      <span className="font-medium mr-1">예약금:</span>
                      {event.isDepositReturned ? (
                        <span className="flex items-center text-green-600">
                          <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> 반환됨
                        </span>
                      ) : (
                        <span className="flex items-center text-amber-600">
                          <XCircle className="h-3.5 w-3.5 mr-1" /> 미반환
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-0 pb-4">
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <Link href={`/schedule/${event.id}`}>
                    상세 정보 <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
