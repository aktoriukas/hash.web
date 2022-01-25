import React, { useState } from "react"

export default function PasswordRequest({ text, setPass }) {
  const [password, setPassword] = useState("")

  return (
    <div>
      <h3>{text}</h3>
      <input onChange={(e) => setPassword(e.target.value)} type="password" />
      <button onClick={() => setPass(password)}>Submit</button>
    </div>
  )
}
