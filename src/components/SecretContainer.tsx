import React, { useState } from "react"
import Btn from "./Btn"
import NewSecret from "./NewSecret"
import Secret from "./Secret"

export default function SecretContainer({ secrets, setSecrets }) {
  const [newSecret, setNewSecret] = useState(false)

  const handleSecretClick = () => setNewSecret((prev) => !prev)

  return (
    <>
      <div className="grid md:gap-2 mt-10">
        {Object.keys(secrets).map((key) => (
          <Secret setSecrets={setSecrets} key={key} secret_name={key} secret_value={secrets[key]} />
        ))}
      </div>

      <Btn value={newSecret ? "close" : "add new secret"} onClick={handleSecretClick} />

      <NewSecret
        newSecret={newSecret}
        setNewSecret={setNewSecret}
        secrets={secrets}
        setSecrets={setSecrets}
      />
    </>
  )
}
