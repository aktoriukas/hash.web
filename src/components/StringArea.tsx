import React, { useState } from "react"

export default function StringArea({ handleStringSubmit, string, setString }) {
  return (
    <div className="container">
      <h2>Enter your string:</h2>
      <textarea value={string ? string : ""} onChange={(e) => setString(e.target.value)}></textarea>
      <button onClick={() => handleStringSubmit(string)}>Submit</button>
    </div>
  )
}
