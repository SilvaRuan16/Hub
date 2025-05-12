"use client"

interface buttonProps {
  className: string,
  value: string,
  onClick: () => void
}

export default function Button({ className, value, onClick }: buttonProps) {
  return (
    <button className={className} value={value} onClick={onClick}>{value}</button>
  )
}