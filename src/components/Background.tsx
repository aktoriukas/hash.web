import * as React from "react"
import { SVGProps } from "react"

const Background = (props: SVGProps<SVGSVGElement>) => (
  <div className="background fixed w-full h-full inset-0 -z-10 opacity-80">
    <svg
      height="200%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      //   preserveAspectRatio="none"
      viewBox="0 0 900 700"
    >
      <path fill="#221E22" d="M0 0h900v675H0z" />
      <path
        className="mountain"
        d="m0 251 113-5 112 11 113-43 112-7 113-7 112-100 113 32 112 73v471H0Z"
        fill="#efb857"
      />
      <path
        className="mountain"
        d="m0 265 113 39 112 7 113-59 112 17 113-53 112 17 113-26 112-48v517H0Z"
        fill="#eea458"
      />
      <path
        className="mountain"
        d="m0 356 113-141 112 110 113-6 112 18 113-93 112 1 113 59 112-4v376H0Z"
        fill="#ea925c"
      />
      <path
        className="mountain"
        d="m0 269 113-15 112 83 113-33 112-35 113 99 112-32 113-45 112-47v432H0Z"
        fill="#e18061"
      />
      <path
        className="mountain"
        d="m0 327 113-14 112 70 113-6 112-66 113 62 112-86 113 84 112 12v293H0Z"
        fill="#d57166"
      />
      <path
        className="mountain"
        d="m0 347 113-10 112 73 113-74 112-11 113 51 112 7 113 24 112-66v335H0Z"
        fill="#c6646a"
      />
      <path
        className="mountain"
        d="m0 397 113 28 112-38 113 45 112-2 113-21 112 41 113 27 112-56v255H0Z"
        fill="#b4596d"
      />
      <path
        className="mountain"
        d="m0 416 113 31 112-30 113 53 112-40 113 35 112 18 113 7 112 2v184H0Z"
        fill="#9f506f"
      />
      <path
        className="mountain"
        d="m0 512 113-32 112 27 113 26 112-45 113 50 112-40 113 30 112-42v190H0Z"
        fill="#89486e"
      />
      <path
        className="mountain"
        d="m0 549 113-16 112-26 113 66 112-11 113-55 112 60 113-60 112 69v100H0Z"
        fill="#72426a"
      />
      <path
        className="mountain"
        d="m0 604 113 6 112-11 113-28 112-18 113 18 112-1 113-13h112v119H0Z"
        fill="#5b3b64"
      />
      <path
        className="mountain"
        d="M0 606h113l112 15 113 7 112-23 113 20 112 11 113 10 112-7v37H0Z"
        fill="#44355b"
      />
    </svg>
  </div>
)

export default Background
