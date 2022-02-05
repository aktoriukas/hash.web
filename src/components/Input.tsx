import { motion } from "framer-motion"
import React from "react"
import { h_v } from "../func/variants"

interface InputProps {
  onChange: (e) => void
  type: "text" | "password" | "number" | "email" | "time"
  value?: string | null
  placeholder?: string
  className?: string
  show?: boolean
  kind?: "primary" | "secondary" | "tertiary" | "danger"
  wrapperClassName?: string
}

export default function Input({
  onChange,
  type,
  kind = "primary",
  show = true,
  value,
  className,
  wrapperClassName = "",
  placeholder = "",
}: InputProps) {
  if (kind === "primary") {
    return (
      <motion.div className={wrapperClassName} variants={h_v} animate={show ? "visible" : "hidden"}>
        <input
          className={`input-primary ${className ? className : ""}`}
          value={value ? value : ""}
          autoComplete="off"
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </motion.div>
    )
  }
}
