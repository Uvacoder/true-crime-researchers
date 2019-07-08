import React from "react"
import { Styled } from "theme-ui"
import { Global, css } from "@emotion/core"

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
            font-family: "canada-type-gibson, sans-serif";
            margin: 0;
          }
          img {
            max-width: 100%;
          }
        `}
      />
      {children}
    </Styled.root>
  </>
)

export default Layout
