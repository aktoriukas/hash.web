import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { h_v } from "../func/variants"
import { secret_type } from "../types"

export default function NewSecret({ secrets, newSecret, setSecrets, setNewSecret }) {
  const [secretLabel, setSecretLabel] = useState(null)
  const [secretValue, setSecretValue] = useState(null)

  const labelErr = useRef(null)
  const valueErr = useRef(null)

  const hasWhiteSpace = (s: string) => /\s/g.test(s)

  const handleClick = () => {
    // console.log("handleClick")
    // console.log(secretLabel, secretValue)
    // console.log(secrets)

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
  }

  return (
    <div>
      <motion.div variants={h_v} animate={newSecret ? "visible" : "hidden"}>
        <fieldset>
          <label>Label:</label>
          <input onChange={(e) => setSecretLabel(e.target.value)} type="text" />
          <span ref={labelErr} style={{ display: "none" }}>
            err
          </span>
        </fieldset>

        <fieldset>
          <label>Secret:</label>
          <input onChange={(e) => setSecretValue(e.target.value)} type="text" />
          <span ref={valueErr} style={{ display: "none" }}>
            err
          </span>
        </fieldset>

        <button onClick={handleClick}>save</button>
      </motion.div>
    </div>
  )
}
