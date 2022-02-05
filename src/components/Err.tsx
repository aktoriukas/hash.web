import { motion } from "framer-motion"
import React from "react"
import { h_v } from "../func/variants"

export default function Err({ err }) {
  return (
    <motion.div variants={h_v} animate={err.isErr ? "visible" : "hidden"}>
      <span className="text-red-600">⛔️{` ${err.msg}`}</span>
    </motion.div>
  )
  return
}
