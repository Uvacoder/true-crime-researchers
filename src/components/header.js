/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import Nav from "components/nav"

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
          sx={{ display: "block", width: [150, null, null, 200] }}
          width={150}
        />
      </Link>
      <Nav />
    </header>
  )
}

export default Header
