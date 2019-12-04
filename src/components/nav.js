import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Nav = () => (
  <nav>
    <Link
      sx={{
        color: "action",
        fontWeight: 1,
        mr: 8,
      }}
      to="/about"
    >
      About
    </Link>
    <Link
      sx={{
        color: "action",
        fontWeight: 1,
      }}
      to="/cases"
    >
      Cases
    </Link>
  </nav>
)

export default Nav
