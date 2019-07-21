import { Link } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import LogoImage from "images/true-crime-researchers.svg"

const Header = () => {
  return (
    <header
      sx={{
        alignItems: "center",
        display: "flex",
        borderBottom: theme => `4px double ${theme.colors.detail}`,
        justifyContent: "space-between",
        px: 16,
        py: 8,
      }}
    >
      <Link to="/">
        <img
          src={LogoImage}
          alt="True Crime Researchers"
          sx={{ display: "block" }}
          width={200}
        />
      </Link>
      <nav>
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
    </header>
  )
}

export default Header
