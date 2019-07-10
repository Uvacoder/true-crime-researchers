/** @jsx jsx */
import { jsx, space, color, layout } from "theme-ui"

import styled from "@emotion/styled"

export const Box = styled.div`
  {
    boxSizing: "border-box",
  },
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed("Box")
`
