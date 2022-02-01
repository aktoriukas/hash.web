import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import { h_v } from "../func/variants"
import Btn from "./Btn"
import Input from "./Input"

export default function Secret({ secret_name, secret_value, setSecrets }) {
  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)

  const onValueChange = (e: React.ChangeEvent<any>) => {
    setSecrets((prevSecrets) => ({
      ...prevSecrets,
      [secret_name]: e.target.value,
    }))
  }
  const onDelete = () => {
    // display a confirmation dialog

    // if confirmed, delete the secret
    setSecrets((prevSecrets) => {
      const { [secret_name]: value, ...rest } = prevSecrets
      return rest
    })
  }

  const copyToClipboard = () => {
    const el = document.createElement("textarea")
    el.value = secret_value
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }

  const handleEditClick = () => setEdit((prev) => !prev)
  const handleShowClick = () => setShow((prev) => !prev)

  return (
    <div className="grid border-b border-black-100 pb-4 mb-4 grid-cols-4 lg:grid-cols-7 gap-4">
      <div className="col-span-2">
        <div className="text-box-primary text-right lg:text-left">{secret_name}</div>
      </div>
      <div className="col-span-2">
        <motion.div variants={h_v} animate={edit ? "hidden" : "visible"}>
          <div className="text-box-primary">
            {show ? secret_value : [...secret_value].map(() => "*")}
          </div>
        </motion.div>
        <motion.div variants={h_v} animate={edit ? "visible" : "hidden"}>
          <Input type="text" className="active" onChange={onValueChange} value={secret_value} />
        </motion.div>
      </div>
      <div className="func-btns-container grid grid-cols-4 gap-4 col-span-4 lg:col-span-3">
        <Btn value={show ? "hide" : "show"} onClick={handleShowClick} />
        <Btn value={edit ? "save" : "edit"} onClick={handleEditClick} />
        <Btn value="delete" onClick={onDelete} />
        <Btn value="copy" onClick={copyToClipboard} />
      </div>
    </div>
  )
}
