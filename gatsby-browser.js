import "./style.css"
import React from "react"
import { Helmet } from "react-helmet"

export const wrapRootElement = ({ element }) => (
  <div>
    <Helmet>
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔑</text></svg>"
      ></link>
      <title>Hashy</title>
    </Helmet>
    {element}
  </div>
)
