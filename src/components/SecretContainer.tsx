import React from "react"
import Secret from "./Secret"

export default function SecretContainer({ secrets, setSecrets }) {
  return (
    <div>
      {Object.keys(secrets).map((key) => (
        <Secret setSecrets={setSecrets} key={key} secret_name={key} secret_value={secrets[key]} />
      ))}
    </div>
  )
}
