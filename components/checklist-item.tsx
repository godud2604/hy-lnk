"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"

interface ChecklistItemProps {
  title: string;
  description?: string;
  checked: boolean;
}

export default function ChecklistItem({ title, description, checked }: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <div className="border border-pink-200 rounded-lg overflow-hidden">
      <div
        className={`flex items-center p-3 cursor-pointer ${isChecked ? "bg-pink-100" : "bg-white"}`}
        onClick={() => setIsChecked(!isChecked)}
      >
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
            isChecked ? "bg-pink-600 text-white" : "bg-pink-100 text-pink-600"
          }`}
        >
          {isChecked ? <Check className="h-4 w-4" /> : null}
        </div>
        <h5 className={`font-medium ${isChecked ? "line-through text-gray-500" : ""}`}>{title}</h5>
      </div>
      <div className="p-3 bg-white border-t border-pink-100 text-sm text-gray-600">{description}</div>
    </div>
  )
}
