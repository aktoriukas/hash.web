import React from "react"

interface BtnProps {
  onClick: () => void
  value: string
  kind?: "primary" | "secondary" | "tertiary" | "danger"
}

export default function Btn({ onClick, value, kind = "primary" }: BtnProps) {
  if (kind === "primary") {
    return (
      <button onClick={onClick} className="border-2 p-2 bg-red-300">
        {value}
      </button>
    )
  }
}
