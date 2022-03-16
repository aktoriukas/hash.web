import React, { useEffect, useState } from "react"
import PasswordRequest from "../components/PasswordRequest"
import StringArea from "../components/StringArea"
import { motion } from "framer-motion"
import SecretContainer from "../components/SecretContainer"
import { h_v, h_v_pages } from "../func/variants"
import { page_type, secret_type } from "../types"
import { decryptData, encryptData } from "../func/tools"
import Background from "../components/Background"
import About from "../components/About"
import Navigation from "../components/Navigation"
import AboutPage from "../components/AboutPage"

const IndexPage = () => {
  const [password, setPassword] = useState(null as string | null)
  const [string, setString] = useState(null as string | null)
  const [secrets, setSecrets] = useState({} as secret_type)
  const [visibleContent, setVisibleContent] = useState(false as boolean)
  const [page, setPage] = useState("home" as page_type)

  const handleStringSubmit = (string: string) => {
    setString(string)
    if (password) {
      const newSecrets = decryptData(string, password)
      if (newSecrets) {
        setSecrets(newSecrets)
        return true
      } else return false
    } else return false
  }

  useEffect(() => {
    if (password) {
      const string = encryptData(password, secrets)
      setString(string)
    }
  }, [secrets])

  // const handleScrolling = (e) => {
  //   let element = e.target as HTMLElement
  //   let scrollTop = element.scrollTop
  //   const paths = document.querySelectorAll(".mountain")
  //   paths.forEach((path, index) => {
  //     path.setAttribute("transform", `translate(0, ${(scrollTop * -0.02) / index})`)
  //   })
  // }

  useEffect(() => {
    setTimeout(() => {
      setVisibleContent(true)
    }, 250)
  }, [])

  return (
    <div className="h-screen overflow-y-auto">
      {/* onScroll={handleScrolling} */}
      <main className="max-w-4xl mx-auto px-4 flex flex-col justify-between">
        <Navigation setPage={setPage} page={page} />

        <motion.div variants={h_v_pages} animate={page === "home" ? "visible" : "hidden"}>
          <div className=" min-h-screen">
            <div className={`box-container ${visibleContent ? "opacity-100" : "opacity-0"}`}>
              <motion.div variants={h_v} animate={password ? "visible" : "hidden"}>
                <StringArea secrets={secrets} string={string} handleStringSubmit={handleStringSubmit} />
              </motion.div>

              <motion.div variants={h_v} animate={password ? "hidden" : "visible"}>
                <PasswordRequest setPass={setPassword} text={"Your Password:"} />
              </motion.div>

              <SecretContainer password={password} setSecrets={setSecrets} secrets={secrets} />
            </div>
          </div>
        </motion.div>

        <motion.div variants={h_v_pages} animate={page === "about" ? "visible" : "hidden"}>
          <AboutPage />
        </motion.div>

        <About />
        {/* <Background /> */}
      </main>
    </div>
  )
}

export default IndexPage
