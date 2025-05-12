"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  delay?: number
}

export default function Typewriter({ text = "Bem vindo", speed = 100, delay = 1000 }: TypewriterProps) {
  const [displayText, setDisplayText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isDeleting) {
      // Deletando caracteres
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1))
        setIndex(index - 1)

        if (index <= 1) {
          setIsDeleting(false)
          setTimeout(() => {
            setIndex(0)
          }, delay)
        }
      }, speed / 2) // Deletar é mais rápido que digitar
    } else {
      // Digitando caracteres
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index + 1))
        setIndex(index + 1)

        if (index >= text.length) {
          setTimeout(() => {
            setIsDeleting(true)
          }, delay)
        }
      }, speed)
    }

    return () => clearTimeout(timer)
  }, [index, isDeleting, text, speed, delay])

  return (
    <div className="typewriter-container">
      <h1 className="typewriter-text">
        {displayText}
        <span className="cursor"></span>
      </h1>
      <style jsx>{`
        .typewriter-container {
          display: inline-block;
        }
        .typewriter-text {
          display: inline-block;
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }
        .cursor {
          display: inline-block;
          width: 3px;
          height: 1em;
          background-color: #333;
          margin-left: 2px;
          animation: blink 1s infinite;
          vertical-align: text-bottom;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
