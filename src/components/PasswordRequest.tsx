import React, { useState } from "react"
import Input from "./Input"
import Btn from "./Btn"

export default function PasswordRequest({ text, setPass }) {
  const [password, setPassword] = useState(null)

  const handleSubmit = () => setPass(password)

  const handlePasswordChange = (e: React.ChangeEvent<any>) => setPassword(e.target.value)

  const formSubmit = (e) => {
    e.preventDefault()
    handleSubmit()
  }

  return (
    <form onSubmit={formSubmit}>
      <h3 className="text-center mb-2 text-xl">{text}</h3>
      <h3 className="text-gold-500 triangle-down relative w-max mx-auto mb-10 text-center text-hand">
        first time?
        <br /> create new password!
      </h3>
      <input id="password" type="password" className="hidden" name="fakepasswordremembered"></input>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <Input
          wrapperClassName="md:col-start-2"
          value={password}
          placeholder="password"
          onChange={handlePasswordChange}
          type="password"
        />
        <Btn value="Submit" onClick={handleSubmit} />
      </div>
    </form>
  )
}
