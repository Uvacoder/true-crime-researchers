import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import { Global, css } from "@emotion/core"

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
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cases" style={{ marginLeft: "20px" }}>
          Cases
        </Link>
      </nav>
      {children}
    </Styled.root>
  </>
)

export default Layout
