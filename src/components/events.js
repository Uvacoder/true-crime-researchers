/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Event from "components/event"
import Timeline from "components/timeline"

const Events = ({ events }) => {
  const sorted = events.sort((a, b) => (a.data.order > b.data.order) ? 1 : -1);
  
  return (
    <section sx={{ padding: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          mb: [8, 8, 8, 8, 24],
          textAlign: ["left", "left", "left", "left", "center"],
        }}
      >
        Events
      </Styled.h2>
      <Timeline>
        {sorted.map(event => (
          <Event key={event.data.title} event={event} />
        ))}
      </Timeline>
    </section>
  )
}

export default Events
