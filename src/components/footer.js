/** @jsx jsx */
import { jsx } from "theme-ui"

import Nav from "components/nav"

const Footer = () => (
  <footer
    sx={{
      borderTop: t => `4px double ${t.colors.detail}`,
      px: 16,
      py: 8,
      textAlign: "center",
    }}
  >
    <Nav />
    <span
      sx={{
        fontSize: "14px",
      }}
    >
      ©2019 True Crime Researchers
    </span>
  </footer>
)

export default Footer
