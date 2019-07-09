import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { List } from "styled/Timeline"

const Timeline = ({ children }) => {
  return <List>{children}</List>
}

export default Timeline
