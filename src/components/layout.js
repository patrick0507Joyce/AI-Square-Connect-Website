import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/Globalstyles"

const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
      <Footer id="my-cool-header"/>
    </>
  )
}


export default Layout
