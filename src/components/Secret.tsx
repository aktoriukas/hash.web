import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"
import { h_v } from "../func/variants"
import Btn from "./Btn"
import Input from "./Input"

export default function Secret({ secret_name, secret_value, setSecrets }) {
  const [edit, setEdit] = useState(false)

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

  const handleEditClick = () => setEdit((prev) => !prev)

  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <div className="input-primary">{secret_name}</div>
      </div>
      <div>
        <motion.div variants={h_v} animate={edit ? "hidden" : "visible"}>
          <div className="input-primary">{secret_value}</div>
        </motion.div>
        <motion.div variants={h_v} animate={edit ? "visible" : "hidden"}>
          <Input className="input-primary active" onChange={onValueChange} value={secret_value} />
        </motion.div>
      </div>
      <div className="func-btns-container">
        <Btn value="edit" onClick={handleEditClick} />
        <Btn value="delete" onClick={onDelete} />
      </div>
    </div>
  )
}
