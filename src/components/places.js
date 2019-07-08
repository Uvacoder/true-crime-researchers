import React from "react"

const Places = ({ places }) => {
  return (
    <>
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
    </>
  )
}

export default Places
