import React from "react"
import { Link } from "gatsby"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global, css } from "@emotion/core"

import LogoImage from "images/true-crime-researchers.svg"
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
      <header
        sx={{
          alignItems: "center",
          display: "flex",
          borderBottom: theme => `4px double ${theme.colors.detail}`,
          justifyContent: "space-between",
          p: 8,
        }}
      >
        <Link to="/">
          <img src={LogoImage} alt="True Crime Researchers" width={200} />
        </Link>
        <nav>
          <Link
            sx={{
              color: "action",
              fontWeight: "bold",
            }}
            to="/cases"
          >
            Cases
          </Link>
        </nav>
      </header>
      {children}
      <footer
        sx={{
          borderTop: theme => `4px double ${theme.colors.detail}`,
          p: 8,
        }}
      >
        Footer
      </footer>
    </Styled.root>
  </>
)

export default Layout
