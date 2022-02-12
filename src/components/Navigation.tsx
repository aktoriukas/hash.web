import React from "react"
import { page_type } from "../types"

interface Props {
  setPage: (page: "home" | "about") => void
  page: page_type
}

export default function Navigation({ setPage, page }: Props) {
  return (
    <nav className="mb-8 mt-1">
      <ul className="flex flex-row justify-center gap-8">
        <li>
          <button
            className={`${page === "home" ? "active" : "bg-violet-700"} nav-btn`}
            onClick={() => setPage("home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`${page === "about" ? "active" : "bg-violet-700"} nav-btn`}
            onClick={() => setPage("about")}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  )
}
