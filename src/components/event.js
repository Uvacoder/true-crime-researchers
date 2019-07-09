import React from "react"

const Event = ({ event }) => {
  const { date, description, time, title } = event.data
  return (
    <li className="item">
      <div className="info">
        <time>{date}</time>
        <time className="time">{time}</time>
      </div>
      <div className="marker"></div>
      <div className="content">
        <h3 className="title">{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default Event
