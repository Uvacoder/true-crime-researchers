import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global, css } from "@emotion/core"

import Footer from "components/footer"
import Header from "components/header"

import TextureImage from "images/texture.jpg"

const Layout = ({ children }) => (
  <>
    <Styled.root>
      <Global
        styles={css`
          body {
            background-image: url(${TextureImage});
            background-size: 412px 300px;
            margin: 0;
          }
        `}
      />
      <Header />
      {children}
      <Footer />
    </Styled.root>
  </>
)

export default Layout
