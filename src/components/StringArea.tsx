import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import { isEmpty } from "../func/tools"
import { h_v } from "../func/variants"
import Btn from "./Btn"
import Err from "./Err"

export default function StringArea({ handleStringSubmit, string, secrets }) {
  const [stringValue, setStringValue] = useState(string)
  const [isEditing, setIsEditing] = useState(true)
  const [err, setErr] = useState({ isErr: false, msg: "" })

  const hangleClick = () => {
    if (handleStringSubmit(stringValue)) setIsEditing(false)
    else setErr({ isErr: true, msg: "Invalid Password or String" })
  }

  useEffect(() => {
    if (!isEmpty(secrets)) setIsEditing(false)
  }, [secrets])

  useEffect(() => {
    setStringValue(string)
  }, [string])

  const copyToClipboard = () => navigator.clipboard.writeText(stringValue)

  return (
    <div className="container">
      <motion.div variants={h_v} animate={isEditing ? "visible" : "hidden"}>
        <h2 className="text-md mb-4">Paste your string:</h2>
        <div className="grid md:grid-cols-3 gap-2 items-start">
          <div className="md:col-span-2">
            <textarea
              className="border-2 p-2 input-primary"
              value={stringValue ? stringValue : ""}
              onChange={(e) => setStringValue(e.target.value)}
            />
            <Err err={err} />
          </div>
          <Btn value="Submit" onClick={hangleClick} />
        </div>
        <h3 className="text-gold-500 mt-4 triangle-down relative w-max mx-auto md:ml-0 text-hand">
          First time ? add new secret now!
        </h3>
      </motion.div>

      <motion.div variants={h_v} animate={isEditing ? "hidden" : "visible"}>
        <h2>Your String:</h2>

        <div className="border-2 p-2 input-primary input-no-edit mb-4 break-words">
          {stringValue}
        </div>
        <Btn wrapperClassName="md:max-w-xs" value="Copy" onClick={copyToClipboard} />
      </motion.div>
    </div>
  )
}
