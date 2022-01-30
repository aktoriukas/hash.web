import React, { useEffect, useState } from "react"
import PasswordRequest from "../components/PasswordRequest"
import StringArea from "../components/StringArea"
import { motion } from "framer-motion"
import SecretContainer from "../components/SecretContainer"
import { h_v } from "../func/variants"
import { secret_type } from "../types"
import { encryptData } from "../func/tools"

const IndexPage = () => {
  const [password, setPassword] = useState(null as string | null)
  const [string, setString] = useState(null as string | null)
  const [secrets, setSecrets] = useState({
    one: "This is a secret",
    two: "This is another secret",
    "3": "This is the last secret",
    "4": "This is the last secret",
  } as secret_type)

  const handleStringSubmit = (string: string) => {
    setString(string)
  }

  useEffect(() => {
    if (password) {
      // convert secrets to string
      const string = encryptData(password, secrets)
      setString(string)
    }
  }, [secrets])

  return (
    <main className="mt-8">
      <title>Home Page</title>
      <h1>Hello World</h1>

      <motion.div variants={h_v} animate={password ? "visible" : "hidden"}>
        <StringArea setString={setString} string={string} handleStringSubmit={handleStringSubmit} />
      </motion.div>

      <motion.div variants={h_v} animate={password ? "hidden" : "visible"}>
        <PasswordRequest setPass={setPassword} text={"Your Password:"} />
      </motion.div>

      <SecretContainer setSecrets={setSecrets} secrets={secrets} />
    </main>
  )
}

export default IndexPage
