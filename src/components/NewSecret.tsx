import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { h_v } from "../func/variants"
import { secret_type } from "../types"
import Btn from "./Btn"
import Input from "./Input"

export default function NewSecret({ secrets, newSecret, setSecrets, setNewSecret }) {
  const [secretLabel, setSecretLabel] = useState(null)
  const [secretValue, setSecretValue] = useState(null)
  const [generateLength, setGenerateLength] = useState(16 as number)

  const labelErr = useRef(null)
  const valueErr = useRef(null)

  const hasWhiteSpace = (s: string) => /\s/g.test(s)

  const handleClick = () => {
    // validations
    if (secrets[secretLabel]) {
      labelErr.current.style.display = "block"
      labelErr.current.innerHTML = "Secret label already exists"
      return
    }
    if (hasWhiteSpace(secretLabel)) {
      labelErr.current.style.display = "block"
      labelErr.current.innerHTML = "Secret label cannot contain whitespace"
    }
    if (hasWhiteSpace(secretValue)) {
      valueErr.current.style.display = "block"
      valueErr.current.innerHTML = "Secret label cannot contain whitespace"
      return
    }
    if (secretLabel === null) {
      labelErr.current.style.display = "block"
      labelErr.current.innerHTML = "Secret label cannot be empty"
      return
    }
    if (secretValue === null) {
      valueErr.current.style.display = "block"
      valueErr.current.innerHTML = "Secret value cannot be empty"
      return
    }
    labelErr.current.style.display = "none"
    labelErr.current.innerHTML = ""
    valueErr.current.style.display = "none"
    valueErr.current.innerHTML = ""

    // close the modal
    setNewSecret(false)

    // save the secret
    setSecrets((secrets: secret_type) => ({ ...secrets, [secretLabel]: secretValue }))

    // reset the form
    setSecretLabel(null)
    setSecretValue(null)
  }

  const handleLabelChange = (e: React.ChangeEvent<any>) => setSecretLabel(e.target.value)
  const handleValueChange = (e: React.ChangeEvent<any>) => setSecretValue(e.target.value)

  const randomGeneratePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_"
    const password = Array(+generateLength)
      .fill(0)
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
    setSecretValue(password)
  }

  const handleGenerateChange = (e: React.ChangeEvent<any>) => setGenerateLength(+e.target.value)

  return (
    <div className="mt-5">
      <motion.div variants={h_v} animate={newSecret ? "visible" : "hidden"}>
        <div className="grid gap-5 grid-cols-2 md:grid-cols-3 items-start">
          <fieldset className="col-span-2 md:col-span-1">
            <label>Label:</label>
            <Input value={secretLabel} onChange={handleLabelChange} type="text" />
            <span ref={labelErr} style={{ display: "none" }}>
              err
            </span>
          </fieldset>

          <fieldset className="col-span-2 md:col-span-1">
            <label>Secret:</label>
            <Input value={secretValue} onChange={handleValueChange} type="text" />
            <span ref={valueErr} style={{ display: "none" }}>
              err
            </span>
          </fieldset>

          <Btn wrapperClassName="md:row-start-2" value="save" onClick={handleClick} />
          <div className="md:row-start-2 grid grid-cols-3 gap-2">
            <Btn wrapperClassName="col-span-2" value="generate" onClick={randomGeneratePassword} />
            <Input value={`${generateLength}`} onChange={handleGenerateChange} type="number" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
