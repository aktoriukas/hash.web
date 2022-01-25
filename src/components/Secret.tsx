import { motion } from "framer-motion"
import React from "react"
import { useState } from "react"

export default function Secret({ secret_name, secret_value, setSecrets }) {
  const [edit, setEdit] = useState(false)

  const onValueChange = (e) => {
    setSecrets((prevSecrets) => ({
      ...prevSecrets,
      [secret_name]: e.target.value,
    }))
  }
  const variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "block" },
  }

  const onDelete = () => {
    // display a confirmation dialog

    // if confirmed, delete the secret
    setSecrets((prevSecrets) => {
      const { [secret_name]: value, ...rest } = prevSecrets
      return rest
    })
  }

  return (
    <div>
      <div className="input-primary">{secret_name}</div>
      <motion.div variants={variants} animate={edit ? "hidden" : "visible"}>
        <div className="input-primary">{secret_value}</div>
      </motion.div>
      <motion.div variants={variants} animate={edit ? "visible" : "hidden"}>
        <input className="input-primary active" onChange={(e) => onValueChange(e)} value={secret_value} />
      </motion.div>
      <div className="func-btns-container">
        <button onClick={() => setEdit((pr) => !pr)}>edit</button>
        <button onClick={onDelete}>delete</button>
      </div>
    </div>
  )
}
