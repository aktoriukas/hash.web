import React from "react"
import { SocialIcon } from "react-social-icons"

const About = () => {
  return (
    <div className="box-container mb-20 w-max mx-auto py-6">
      <ul className="grid grid-flow-col gap-5">
        <li>
          <SocialIcon url="https://twitter.com/aktoriukas" />
        </li>
        <li>
          <SocialIcon url="https://www.instagram.com/aktoriukas" />
        </li>
        <li>
          <SocialIcon url="https://github.com/aktoriukas" />
        </li>
        <li>
          <SocialIcon url="https://www.linkedin.com/in/strumila" />
        </li>
        <li>
          <SocialIcon url="mailto:gediminas@aktoriukas.com" />
        </li>
      </ul>
      <p className="text-center text-hand mt-6 text-gold-500">© 2022 Gediminas Strumila</p>
    </div>
  )
}

export default About
