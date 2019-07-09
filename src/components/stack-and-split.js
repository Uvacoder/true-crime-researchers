import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

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
