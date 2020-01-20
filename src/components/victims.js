import React from "react"
/** @jsx jsx */
import { jsx } from "theme-ui"

import VictimMissing from "components/victim-missing"
import VictimDeath from "components/victim-death"

const Victims = ({ victims }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {victims.map(victim => {
        const { firstName, lastName, type } = victim.data
        return (
          <>
            {type === "Missing" ? (
              <VictimMissing key={`${firstName}-${lastName}`} victim={victim} />
            ) : (
              <VictimDeath key={`${firstName}-${lastName}`} victim={victim} />
            )}
          </>
        )
      })}
    </article>
  )
}

export default Victims
