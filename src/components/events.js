/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Event from "components/event"
import Timeline from "components/timeline"

const Events = ({ events }) => {
  return (
    <section sx={{ padding: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: [8, 8, 8, 8, 24],
          textAlign: ["left", "left", "left", "left", "center"],
        }}
      >
        Events
      </Styled.h2>
      <Timeline>
        {events.map(event => (
          <Event event={event} />
        ))}
      </Timeline>
    </section>
  )
}

export default Events
