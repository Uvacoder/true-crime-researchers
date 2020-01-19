import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import Victim from "components/victim"
import VictimMultiple from "components/victim-multiple"

const Victims = ({ multiple, victims }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {victims.map(victim => {
        const { firstName, lastName } = victim.data
        return (
          <>
            {multiple ? (
              <VictimMultiple
                key={`${firstName}-${lastName}`}
                victim={victim}
              />
            ) : (
              <Victim key={`${firstName}-${lastName}`} victim={victim} />
            )}
          </>
        )
      })}
    </article>
  )
}

export default Victims
