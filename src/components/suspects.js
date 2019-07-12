import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Suspect from "components/suspect"

const Suspects = ({ suspects }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: 8,
        }}
      >
        Suspect
      </Styled.h2>
      {suspects.map(suspect => (
        <Suspect suspect={suspect}></Suspect>
      ))}
    </section>
  )
}

export default Suspects
