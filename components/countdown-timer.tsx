"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 0,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds -= 1
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes -= 1
          } else {
            minutes = 59
            if (hours > 0) {
              hours -= 1
            } else {
              hours = 23
              if (days > 0) {
                days -= 1
              } else {
                // Timer ended
                clearInterval(timer)
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white rounded-lg p-3 shadow-md">
      <div className="flex items-center gap-2 text-pink-600 font-medium mb-2">
        <Clock className="h-4 w-4" />
        <span className="text-sm">할인 종료까지</span>
      </div>
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <div className="bg-pink-50 rounded-md p-2 font-bold text-pink-800">{timeLeft.days}</div>
          <div className="text-xs mt-1 text-gray-500">일</div>
        </div>
        <div>
          <div className="bg-pink-50 rounded-md p-2 font-bold text-pink-800">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-xs mt-1 text-gray-500">시간</div>
        </div>
        <div>
          <div className="bg-pink-50 rounded-md p-2 font-bold text-pink-800">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-xs mt-1 text-gray-500">분</div>
        </div>
        <div>
          <div className="bg-pink-50 rounded-md p-2 font-bold text-pink-800">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs mt-1 text-gray-500">초</div>
        </div>
      </div>
    </div>
  )
}
