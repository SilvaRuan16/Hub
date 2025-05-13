"use client"

import { ReactNode, useState } from "react"
import Image from "next/image"
import closeIcon from "../images/angulo-para-baixo.svg"
import openIcon from "../images/angulo-para-cima.svg"

interface appBar {
  title: string,
  buttonArea?: {
    buttons: ReactNode
  }
}

export default function AppBar({ title, buttonArea }: appBar) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full h-[80px] sm:h-[100px] bg-blue-600 flex items-center justify-between shadow-md text-white text-xl sm:text-2xl z-10 rounded-md">
      <h1 className="p-3">
        <span className="block sm:hidden">Hub</span>
        <span className="hidden sm:block">{title}</span>
      </h1>
      <div className="p-3 sm:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          <Image
            src={isMenuOpen ? closeIcon : openIcon}
            alt={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div
        className={`p-3 flex flex-col sm:flex-row sm:flex-wrap justify-end gap-2 absolute sm:static top-[80px] right-0 bg-blue-600 sm:bg-transparent w-full sm:w-auto transition-all duration-300 ${isMenuOpen ? "block" : "hidden"
          } sm:block`}
      >
        {buttonArea?.buttons}
      </div>
    </div>
  )
}