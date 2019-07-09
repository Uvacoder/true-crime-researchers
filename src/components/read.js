import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Read = ({ text }) => {
  const { sourceName, title, type, url } = text.data
  return (
    <article>
      <span>
        {type}: {sourceName}
      </span>
      <h3>
        <Styled.a href={url}>{title}</Styled.a>
      </h3>
    </article>
  )
}

export default Read
