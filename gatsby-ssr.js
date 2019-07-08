import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "./src/gatsby-plugin-theme-ui"
export default props => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
)
