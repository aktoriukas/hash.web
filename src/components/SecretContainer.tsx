import { motion } from "framer-motion"
import React, { useState } from "react"
import { h_v } from "../func/variants"
import Btn from "./Btn"
import NewSecret from "./NewSecret"
import Secret from "./Secret"

export default function SecretContainer({ secrets, setSecrets, password }) {
  const [newSecret, setNewSecret] = useState(false)

  const handleSecretClick = () => setNewSecret((prev) => !prev)

  return (
    <>
      {secrets && (
        <div className="grid md:gap-2 mt-10">
          {Object.keys(secrets).map((key) => (
            <Secret
              setSecrets={setSecrets}
              key={key}
              secret_name={key}
              secret_value={secrets[key]}
            />
          ))}
        </div>
      )}
      <motion.div className="md:max-w-xs" variants={h_v} animate={password ? "visible" : "hidden"}>
        <Btn value={newSecret ? "close" : "add new secret"} onClick={handleSecretClick} />
      </motion.div>

      <NewSecret
        newSecret={newSecret}
        setNewSecret={setNewSecret}
        secrets={secrets}
        setSecrets={setSecrets}
      />
    </>
  )
}
