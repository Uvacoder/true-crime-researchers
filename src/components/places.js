import React from "react"

const Places = ({ places }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <h2>Places of Interest</h2>

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
