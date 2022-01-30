import React from "react"

interface InputProps {
  onChange: (e) => void
  type: "text" | "password" | "number" | "email" | "time"
  value?: string | null
  placeholder?: string
  kind?: "primary" | "secondary" | "tertiary" | "danger"
}

export default function Input({ onChange, type, kind = "primary", value }: InputProps) {
  if (kind === "primary") {
    return (
      <input className="border-2 p-2" value={value ? value : ""} onChange={onChange} type={type} />
    )
  }
}
