import { motion } from "framer-motion"
import React from "react"
import { h_v } from "../func/variants"

interface BtnProps {
  onClick: () => void
  value: string
  show?: boolean
  kind?: "primary" | "secondary" | "tertiary" | "danger"
}

export default function Btn({ onClick, value, show = true, kind = "primary" }: BtnProps) {
  if (kind === "primary") {
    return (
      <motion.div variants={h_v} animate={show ? "visible" : "hidden"}>
        <button
          onClick={onClick}
          className="
          border-1 p-2 relative
          bg-violet-500 text-gold-100 
          hover:bg-violet-700 
          hover:text-gold-500 
          active:bg-violet-700 active:text-gold-500 active:top-0.5
          transition duration-200 ease-in-out
          w-full max-w-xs rounded-md"
        >
          {value}
        </button>
      </motion.div>
    )
  }
}
