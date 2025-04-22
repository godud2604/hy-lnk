"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

interface ChecklistItemProps {
  number: number
  title: string
  children: React.ReactNode
}

export default function ChecklistItem({ number, title, children }: ChecklistItemProps) {
  const [checked, setChecked] = useState(false)

  return (
    <div className="border border-pink-200 rounded-lg overflow-hidden">
      <div
        className={`flex items-center p-3 cursor-pointer ${checked ? "bg-pink-100" : "bg-white"}`}
        onClick={() => setChecked(!checked)}
      >
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
            checked ? "bg-pink-600 text-white" : "bg-pink-100 text-pink-600"
          }`}
        >
          {checked ? <Check className="h-4 w-4" /> : number}
        </div>
        <h5 className={`font-medium ${checked ? "line-through text-gray-500" : ""}`}>{title}</h5>
      </div>
      <div className="p-3 bg-white border-t border-pink-100 text-sm text-gray-600">{children}</div>
    </div>
  )
}
