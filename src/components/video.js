import React from "react"

const Video = ({ video }) => {
  const { description, source, title, url } = video.data
  return (
    <article>
      <span>{source}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {url}
    </article>
  )
}

export default Video
