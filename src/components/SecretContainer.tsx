import React, { useState } from "react"
import NewSecret from "./NewSecret"
import Secret from "./Secret"

export default function SecretContainer({ secrets, setSecrets }) {
  const [newSecret, setNewSecret] = useState(false)

  return (
    <div>
      {Object.keys(secrets).map((key) => (
        <Secret setSecrets={setSecrets} key={key} secret_name={key} secret_value={secrets[key]} />
      ))}

      <button onClick={() => setNewSecret((v) => !v)}>
        {newSecret ? "close" : "add new secret"}
      </button>

      <NewSecret
        newSecret={newSecret}
        setNewSecret={setNewSecret}
        secrets={secrets}
        setSecrets={setSecrets}
      />
    </div>
  )
}
