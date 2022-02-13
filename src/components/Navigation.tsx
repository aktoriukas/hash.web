import React from "react"
import { page_type } from "../types"

interface Props {
  setPage: (page: "home" | "about") => void
  page: page_type
}

export default function Navigation({ setPage, page }: Props) {
  return (
    <nav className="mb-4 mt-4">
      <ul className="flex flex-row justify-center gap-8">
        <li>
          <button
            onClick={() => setPage("home")}
            className={`nav-btn-primary ${page === "home" && "active"}`}
            role="button"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage("about")}
            className={`nav-btn-primary ${page === "about" && "active"}`}
            role="button"
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  )
}
