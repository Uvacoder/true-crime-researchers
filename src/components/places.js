/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Places = ({ places }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2>Places of Interest</Styled.h2>

      {places.map(place => {
        const { description, latitude, longitude, title } = place.data
        return (
          <div>
            {title}
            {description}
            {latitude}
            {longitude}
          </div>
        )
      })}
    </section>
  )
}

export default Places
