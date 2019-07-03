import React from "react"

const Read = ({ text }) => {
  const { sourceName, title, type, url } = text.data
  return (
    <article>
      <span>
        {type}: {sourceName}
      </span>
      <h3>
        <a href={url}>{title}</a>
      </h3>
    </article>
  )
}

export default Read
