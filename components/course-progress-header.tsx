import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface CourseProgressHeaderProps {
  currentDay: number
  totalDays: number
}

export default function CourseProgressHeader({ currentDay, totalDays }: CourseProgressHeaderProps) {
  const progress = (currentDay / totalDays) * 100

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Day {currentDay}: 당첨 후 후기 포스팅 마스터</h1>
          <p className="text-muted-foreground mt-1">
            체험단 당첨 후 브랜드와 독자 모두에게 호감을 얻는 후기 작성법을 배워봅시다.
          </p>
        </div>
        <Badge className="w-fit bg-pink-100 text-pink-800 hover:bg-pink-100 border-none text-sm py-1.5">
          {currentDay === totalDays ? "마지막 단계" : `${currentDay}/${totalDays} 단계`}
        </Badge>
      </div>

      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span>학습 진행률</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
    </div>
  )
}
