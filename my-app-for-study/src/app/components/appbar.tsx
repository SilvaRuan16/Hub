"use client"

import { ReactNode } from "react"

interface appBar {
  title: string,
  buttonArea?: {
    buttons: ReactNode
  }
}

export default function AppBar({title, buttonArea}: appBar) {
  return (
    <div className="w-full h-[100px] bg-blue-600 flex shadow-md justify-between text-white items-center text-2xl z-10 rounded-md">
      <h1 className="p-3 translate-x-[10px]">{title}</h1>
      <div className="p-3 translate-x-[-10px]">
        {buttonArea?.buttons}
      </div>
    </div>
  )
}