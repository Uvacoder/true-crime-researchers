import React from "react"

const Read = ({ text }) => {
  const { linkText, sourceName, type, url } = text.data
  return (
    <article>
      <span>
        {type}: {sourceName}
      </span>
      <h3>
        <a href={url}>{linkText}</a>
      </h3>
    </article>
  )
}

export default Read
