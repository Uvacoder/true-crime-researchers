/** @jsx jsx */
import { jsx } from "theme-ui"

const Container = ({ children }) => {
  return (
    <section
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "700px",
      }}
    >
      {children}
    </section>
  )
}

export default Container
