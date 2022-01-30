import React, { useState } from "react"
import Input from "./Input"
import Btn from "./Btn"

export default function PasswordRequest({ text, setPass }) {
  const [password, setPassword] = useState("")

  const handleSubmit = () => setPass(password)

  const handlePasswordChange = (e: React.ChangeEvent<any>) => setPassword(e.target.value)

  return (
    <div>
      <h3>{text}</h3>
      <Input onChange={handlePasswordChange} type="password" />
      <Btn value="Submit" onClick={handleSubmit} />
    </div>
  )
}
