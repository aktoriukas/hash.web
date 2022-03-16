import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import { h_v, h_v_fast } from "../func/variants"
import Btn from "./Btn"
import Input from "./Input"

export default function Secret({ secret_name, secret_value, setSecrets }) {
  const [edit, setEdit] = useState(false)
  const [show, setShow] = useState(false)
  const [deleteMsg, setDeleteMsg] = useState(false)

  const onValueChange = (e: React.ChangeEvent<any>) => {
    setSecrets((prevSecrets) => ({
      ...prevSecrets,
      [secret_name]: e.target.value,
    }))
  }
  const onDelete = () => {
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
    <div className="grid border-b border-black-100 last:border-b-0 pb-4 mb-4 grid-cols-4 lg:grid-cols-7 gap-4">
      <div className="col-span-2">
        <div className="text-box-primary text-right lg:text-left">{secret_name}</div>
      </div>

      <div className="col-span-2">
        <motion.div variants={h_v} animate={edit ? "hidden" : "visible"}>
          <div className="text-box-primary ">{show ? secret_value : [...secret_value].map(() => "*")}</div>
        </motion.div>

        <motion.div variants={h_v} animate={edit ? "visible" : "hidden"}>
          <Input type="text" className="active" onChange={onValueChange} value={secret_value} />
        </motion.div>
      </div>

      <div className="func-btns-container grid grid-cols-4 gap-4 col-span-4 lg:col-span-3">
        <Btn value={show ? "hide" : "show"} onClick={handleShowClick} />
        <Btn value={edit ? "save" : "edit"} onClick={handleEditClick} />
        <motion.div variants={h_v_fast} animate={deleteMsg ? "hidden" : "visible"}>
          <Btn value="delete" onClick={() => setDeleteMsg(true)} />
        </motion.div>
        <motion.div className="col-span-2" variants={h_v_fast} animate={deleteMsg ? "visible" : "hidden"}>
          <div className="grid grid-cols-2 gap-2 relative">
            <Btn value="yes" onClick={onDelete} />
            <Btn value="no" onClick={() => setDeleteMsg(false)} />
            <p className="absolute text-center text-hand text-gold-500 -bottom-5">are you sure?</p>
          </div>
        </motion.div>
        <motion.div variants={h_v_fast} animate={deleteMsg ? "hidden" : "visible"}>
          <Btn value="copy" onClick={copyToClipboard} />
        </motion.div>
      </div>
    </div>
  )
}
