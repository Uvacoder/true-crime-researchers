/** @jsx jsx */
import { jsx } from "theme-ui"

const StackAndSplit = ({ children }) => {
  return (
    <div
      sx={{
        display: ["block", "block", "block", "flex"],
      }}
    >
      {children}
    </div>
  )
}

export default StackAndSplit
