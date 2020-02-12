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
        transition: "opacity 0.3s",
        "&:hover": {
          opacity: 0.8,
        },
      }}
      to="/about"
    >
      About
    </Link>
    <Link
      sx={{
        color: "action",
        fontWeight: 1,
        transition: "opacity 0.3s",
        "&:hover": {
          opacity: 0.8,
        },
      }}
      to="/cases"
    >
      Cases
    </Link>
  </nav>
)

export default Nav
