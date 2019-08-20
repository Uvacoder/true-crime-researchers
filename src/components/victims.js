/** @jsx jsx */
import { jsx } from "theme-ui"

import Victim from "components/victim"

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
        const { firstName, middleName, lastName } = victim
        return (
          <Victim
            key={`${firstName}-${middleName}-${lastName}`}
            victim={victim}
          ></Victim>
        )
      })}
    </article>
  )
}

export default Victims
