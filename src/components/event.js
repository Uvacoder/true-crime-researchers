import React from "react"

const Event = ({ event }) => {
  const { date, description, time, title } = event.data
  return (
    <>
      <h5>{title}</h5>
      <p>{description}</p>
      <time>{date}</time>
      <time>{time}</time>
    </>
  )
}

export default Event
