"use client"

import { useState } from "react"
import { CalendarIcon, Check, Plus, X } from "lucide-react"
import { format } from "date-fns"
import { ko } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"

// 실제 구현 시 데이터베이스나 API에서 가져올 데이터
const platforms = [
  { id: "instagram", name: "인스타그램" },
  { id: "naver", name: "네이버 쇼츠" },
  { id: "youtube", name: "유튜브" },
  { id: "tiktok", name: "틱톡" },
  { id: "blog", name: "블로그" },
  { id: "other", name: "기타" },
]

const categories = [
  { id: "food", name: "식품" },
  { id: "beauty", name: "뷰티" },
  { id: "fashion", name: "패션" },
  { id: "electronics", name: "가전" },
  { id: "travel", name: "여행" },
  { id: "kids", name: "키즈" },
  { id: "sports", name: "스포츠/피트니스" },
  { id: "other", name: "기타" },
]

const regions = [
  { id: "seoul", name: "서울" },
  { id: "gyeonggi", name: "경기" },
  { id: "incheon", name: "인천" },
  { id: "busan", name: "부산" },
  { id: "daegu", name: "대구" },
  { id: "daejeon", name: "대전" },
  { id: "gwangju", name: "광주" },
  { id: "ulsan", name: "울산" },
  { id: "gangwon", name: "강원" },
  { id: "chungbuk", name: "충북" },
  { id: "chungnam", name: "충남" },
  { id: "jeonbuk", name: "전북" },
  { id: "jeonnam", name: "전남" },
  { id: "gyeongbuk", name: "경북" },
  { id: "gyeongnam", name: "경남" },
  { id: "jeju", name: "제주" },
]

// ScheduleFormData 타입 정의 수정
export type ScheduleFormData = {
  id?: number
  site: string
  deadline: Date
  platform: string
  category: string
  title: string
  note: string // 제품명을 비고로 변경
  price: string
  mainType: "product" | "visit" // 최상위 유형: 제품형 또는 방문형
  subType?: "free" | "paid" // 제품형일 때의 하위 유형: 제공형 또는 구매형
  region?: string // 방문형일 때의 지역 (UI에서는 제거하지만 데이터는 유지)
  isPayback?: boolean
  isPaybackReceived?: boolean
  hasDeposit?: boolean // 방문형일 때 예약금 여부
  isDepositReturned?: boolean // 방문형일 때 예약금 반환 여부
  isWritten: boolean
  // isCompleted 필드 제거
}

type ScheduleFormModalProps = {
  onSubmit: (data: ScheduleFormData) => void
  initialData?: ScheduleFormData
  existingSchedules?: ScheduleFormData[]
}

// defaultFormData 수정
const defaultFormData: ScheduleFormData = {
  site: "",
  deadline: new Date(),
  platform: "",
  category: "",
  title: "",
  note: "", // 제품명을 비고로 변경
  price: "",
  mainType: "product",
  subType: "free",
  region: "",
  isPayback: false,
  isPaybackReceived: false,
  hasDeposit: false,
  isDepositReturned: false,
  isWritten: false,
  // isCompleted 필드 제거
}

export default function ScheduleFormModal({ onSubmit, initialData, existingSchedules = [] }: ScheduleFormModalProps) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState<ScheduleFormData>(initialData || defaultFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const isEditing = !!initialData?.id

  const handleChange = (field: keyof ScheduleFormData, value: any) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value }

      // 유형 변경 시 관련 필드 초기화
      if (field === "mainType") {
        if (value === "product") {
          newData.subType = "free"
          newData.isPayback = false
          newData.isPaybackReceived = false
          newData.region = ""
          newData.hasDeposit = false
          newData.isDepositReturned = false
        } else if (value === "visit") {
          newData.subType = undefined
          newData.isPayback = false
          newData.isPaybackReceived = false
          newData.hasDeposit = false
          newData.isDepositReturned = false
        }
      }

      // 제품형의 하위 유형 변경 시 페이백 관련 필드 초기화
      if (field === "subType" && value === "free") {
        newData.isPayback = false
        newData.isPaybackReceived = false
      }

      return newData
    })

    // 에러 메시지 지우기
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.site.trim()) newErrors.site = "체험단 사이트를 입력해주세요"
    if (!formData.title.trim()) newErrors.title = "제목을 입력해주세요"
    if (!formData.platform) newErrors.platform = "플랫폼을 선택해주세요"
    if (!formData.category) newErrors.category = "카테고리를 선택해주세요"

    // 방문형일 때 지역 필수
    if (formData.mainType === "visit" && !formData.region) {
      newErrors.region = "지역을 선택해주세요"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const checkDuplicate = () => {
    // 수정 모드에서는 자기 자신과의 중복 체크를 피함
    const schedulesToCheck = isEditing ? existingSchedules.filter((s) => s.id !== initialData?.id) : existingSchedules

    const duplicate = schedulesToCheck.find(
      (s) => s.title === formData.title && format(s.deadline, "yyyy-MM-dd") === format(formData.deadline, "yyyy-MM-dd"),
    )

    return duplicate
  }

  const handleSubmit = () => {
    if (!validateForm()) return

    const duplicate = checkDuplicate()
    if (duplicate && !isEditing) {
      // 중복된 일정이 있을 경우 사용자에게 알림
      toast({
        title: "중복된 일정이 있습니다",
        description: "동일한 제목과 마감일을 가진 일정이 이미 존재합니다. 업데이트하시겠습니까?",
        action: (
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                // 취소
                toast({
                  title: "취소되었습니다",
                })
              }}
            >
              <X className="h-4 w-4 mr-1" /> 취소
            </Button>
            <Button
              size="sm"
              onClick={() => {
                // 업데이트 로직
                onSubmit({ ...formData, id: duplicate.id })
                setOpen(false)
                toast({
                  title: "일정이 업데이트되었습니다",
                  description: "기존 일정이 새로운 정보로 업데이트되었습니다.",
                })
              }}
            >
              <Check className="h-4 w-4 mr-1" /> 업데이트
            </Button>
          </div>
        ),
      })
      return
    }

    onSubmit(formData)
    setFormData(defaultFormData)
    setOpen(false)

    toast({
      title: isEditing ? "일정이 수정되었습니다" : "새 일정이 등록되었습니다",
      description: isEditing
        ? "일정 정보가 성공적으로 업데이트되었습니다."
        : "새로운 체험단 일정이 성공적으로 등록되었습니다.",
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-1">
          <Plus className="h-4 w-4" /> 일정 등록
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px] max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{isEditing ? "일정 수정" : "새 일정 등록"}</DialogTitle>
          <DialogDescription>
            체험단 일정 정보를 {isEditing ? "수정" : "등록"}하세요. 모든 필수 항목(*)을 작성해주세요.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          {/* 기본 정보 그룹 */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium text-muted-foreground">기본 정보</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="site" className="flex items-center gap-1">
                  체험단 사이트 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="site"
                  value={formData.site}
                  onChange={(e) => handleChange("site", e.target.value)}
                  placeholder="체험단 사이트 이름"
                  className={errors.site ? "border-destructive" : ""}
                />
                {errors.site && <p className="text-xs text-destructive">{errors.site}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="deadline" className="flex items-center gap-1">
                  마감일 <span className="text-destructive">*</span>
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.deadline && "text-muted-foreground",
                        errors.deadline && "border-destructive",
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.deadline ? format(formData.deadline, "PPP", { locale: ko }) : <span>날짜 선택</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.deadline}
                      onSelect={(date) => handleChange("deadline", date || new Date())}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {errors.deadline && <p className="text-xs text-destructive">{errors.deadline}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title" className="flex items-center gap-1">
                제목 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleChange("title", e.target.value)}
                placeholder="체험단 제목"
                className={errors.title ? "border-destructive" : ""}
              />
              {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
            </div>

            {/* 기본 정보 그룹에서 제품명을 비고로 변경 */}
            <div className="space-y-2">
              <Label htmlFor="note">비고</Label>
              <Input
                id="note"
                value={formData.note}
                onChange={(e) => handleChange("note", e.target.value)}
                placeholder="추가 정보 입력"
              />
            </div>
          </div>

          {/* 카테고리 및 플랫폼 그룹 */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium text-muted-foreground">카테고리 및 플랫폼</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform" className="flex items-center gap-1">
                  플랫폼 <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.platform} onValueChange={(value) => handleChange("platform", value)}>
                  <SelectTrigger className={errors.platform ? "border-destructive" : ""}>
                    <SelectValue placeholder="플랫폼 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {platforms.map((platform) => (
                      <SelectItem key={platform.id} value={platform.id}>
                        {platform.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.platform && <p className="text-xs text-destructive">{errors.platform}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="flex items-center gap-1">
                  카테고리 <span className="text-destructive">*</span>
                </Label>
                <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                  <SelectTrigger className={errors.category ? "border-destructive" : ""}>
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
              </div>
            </div>
          </div>

          {/* 유형 선택 그룹 */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium text-muted-foreground">유형</h3>

            <div className="space-y-2">
              <Label>체험단 유형</Label>
              <RadioGroup
                value={formData.mainType}
                onValueChange={(value: "product" | "visit") => handleChange("mainType", value)}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="product" id="product" />
                  <Label htmlFor="product" className="cursor-pointer">
                    제품형
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="visit" id="visit" />
                  <Label htmlFor="visit" className="cursor-pointer">
                    방문형
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* 제품형일 때 표시되는 필드 */}
            {formData.mainType === "product" && (
              <div className="space-y-2 pl-4 border-l-2 border-muted">
                <Label>제품 제공 방식</Label>
                <RadioGroup
                  value={formData.subType}
                  onValueChange={(value: "free" | "paid") => handleChange("subType", value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="free" />
                    <Label htmlFor="free" className="cursor-pointer">
                      제공형
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="paid" id="paid" />
                    <Label htmlFor="paid" className="cursor-pointer">
                      구매형
                    </Label>
                  </div>
                </RadioGroup>

                {/* 구매형일 때만 페이백 관련 필드 표시 */}
                {formData.subType === "paid" && (
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center space-x-2">
                      <Switch
                        id="isPayback"
                        checked={formData.isPayback}
                        onCheckedChange={(checked) => handleChange("isPayback", checked)}
                      />
                      <Label htmlFor="isPayback" className="cursor-pointer">
                        직접 페이백 받는 형식
                      </Label>
                    </div>

                    {formData.isPayback && (
                      <div className="flex items-center space-x-2 pl-6 border-l-2 border-muted ml-2">
                        <Switch
                          id="isPaybackReceived"
                          checked={formData.isPaybackReceived}
                          onCheckedChange={(checked) => handleChange("isPaybackReceived", checked)}
                        />
                        <Label htmlFor="isPaybackReceived" className="cursor-pointer">
                          페이백 받음
                        </Label>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* 방문형일 때 표시되는 필드 */}
            {formData.mainType === "visit" && (
              <div className="space-y-4 pl-4 border-l-2 border-muted">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="hasDeposit"
                      checked={formData.hasDeposit}
                      onCheckedChange={(checked) => handleChange("hasDeposit", checked)}
                    />
                    <Label htmlFor="hasDeposit" className="cursor-pointer">
                      예약금 있음
                    </Label>
                  </div>

                  {formData.hasDeposit && (
                    <div className="flex items-center space-x-2 pl-6 border-l-2 border-muted ml-2">
                      <Switch
                        id="isDepositReturned"
                        checked={formData.isDepositReturned}
                        onCheckedChange={(checked) => handleChange("isDepositReturned", checked)}
                      />
                      <Label htmlFor="isDepositReturned" className="cursor-pointer">
                        예약금 반환됨
                      </Label>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* 보상 정보 */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium text-muted-foreground">보상 정보</h3>
            <div className="space-y-2">
              <Label htmlFor="price">가격/보상</Label>
              <Input
                id="price"
                value={formData.price}
                onChange={(e) => handleChange("price", e.target.value)}
                placeholder="예: 제품 + 5만원"
              />
            </div>
          </div>

          {/* 상태 그룹 */}
          <div className="grid gap-4">
            <h3 className="text-sm font-medium text-muted-foreground">상태</h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="isWritten" className="cursor-pointer">
                  작성 완료
                </Label>
                <Switch
                  id="isWritten"
                  checked={formData.isWritten}
                  onCheckedChange={(checked) => handleChange("isWritten", checked)}
                />
              </div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button onClick={handleSubmit}>{isEditing ? "수정하기" : "등록하기"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
