import React from "react"
import { Link } from "gatsby"
import { Styled } from "theme-ui"
import { Global, css } from "@emotion/core"

import TextureImage from "images/clean_textile_@2x.jpg"

const Layout = ({ children }) => (
  <>
    <Styled.root>
      <Global
        styles={css`
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            background-image: url(${TextureImage});
            background-size: 412px 300px;
            font-family: "canada-type-gibson, sans-serif";
            margin: 0;
          }
          img {
            max-width: 100%;
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
