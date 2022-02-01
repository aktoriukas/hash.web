import React, { useState } from "react"
import Btn from "./Btn"

export default function StringArea({ handleStringSubmit, string, setString }) {
  const hangleClick = () => handleStringSubmit(string)

  return (
    <div className="container">
      <h2>Enter your string:</h2>
      <textarea
        className="border-2 p-2 input-primary mb-4"
        value={string ? string : ""}
        onChange={(e) => setString(e.target.value)}
      />
      <Btn value="Submit" onClick={hangleClick} />
    </div>
  )
}
