import React from "react"
import { SocialIcon } from "react-social-icons"

const About = () => {
  const socialLinks = [
    "https://twitter.com/aktoriukas",
    "https://www.instagram.com/aktoriukas",
    "https://github.com/aktoriukas",
    "https://www.linkedin.com/in/strumila",
    "mailto:gediminas@aktoriukas.com",
  ]

  return (
    <div className="box-container mb-20 w-max mx-auto py-6">
      <ul className="grid grid-flow-col gap-5">
        {socialLinks.map((link, i) => (
          <li key={i} className="flex items-center">
            <SocialIcon target="_blank" url={link} />
          </li>
        ))}
      </ul>
      <p className="text-center text-hand mt-6 text-gold-500">© 2022 Gediminas Strumila</p>
    </div>
  )
}

export default About
