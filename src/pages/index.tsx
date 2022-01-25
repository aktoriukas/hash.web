import React, { useState } from "react"
import PasswordRequest from "../components/PasswordRequest"
import StringArea from "../components/StringArea"
import { motion } from "framer-motion"
import SecretContainer from "../components/SecretContainer"

const IndexPage = () => {
  const [password, setPassword] = useState(null)
  const [string, setString] = useState(null)

  const handleStringSubmit = (string: string) => {
    setString(string)
  }
  const variants = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "block" },
  }

  const [secrets, setSecrets] = useState({
    "secret-1": "This is a secret",
    "secret-2": "This is another secret",
    "secret-3": "This is the last secret",
    "secret-4": "This is the last secret",
  })

  console.log(secrets)

  return (
    <main>
      <title>Home Page</title>
      <h1>Hello World</h1>

      <motion.div variants={variants} animate={password ? "visible" : "hidden"}>
        <StringArea handleStringSubmit={handleStringSubmit} />
      </motion.div>

      <motion.div variants={variants} animate={password ? "hidden" : "visible"}>
        <PasswordRequest setPass={setPassword} text={"Your Password:"} />
      </motion.div>

      <SecretContainer setSecrets={setSecrets} secrets={secrets} />
    </main>
  )
}

export default IndexPage
