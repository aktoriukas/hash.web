import React, { useState } from "react"
import Btn from "./Btn"

export default function StringArea({ handleStringSubmit, string, setString }) {
  const hangleClick = () => handleStringSubmit(string)

  return (
    <div className="container">
      <h2>Enter your string:</h2>
      <textarea value={string ? string : ""} onChange={(e) => setString(e.target.value)}></textarea>
      <Btn value="Submit" onClick={hangleClick} />
    </div>
  )
}
