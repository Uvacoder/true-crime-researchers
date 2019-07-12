import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Victim from "components/victim"

const Victims = ({ victims }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        pt: "16",
      }}
    >
      {victims.map(victim => {
        return <Victim victim={victim}></Victim>
      })}
    </article>
  )
}

export default Victims
