import React from "react"

const Audio = ({ audio }) => {
  const {
    itunes,
    runtime,
    source,
    stitcher,
    thumbnail,
    title,
    url,
  } = audio.data
  return (
    <article>
      <h3>{title}</h3>
      {thumbnail.map(item => (
        <figure className="image">
          <img alt="{source}" src={item.thumbnails.full.url} width={160} />
        </figure>
      ))}
      <ul>
        <li>
          <a href={url}>URL</a>
        </li>
        <li>
          <a href={stitcher}>Stitcher</a>
        </li>
        <li>
          <a href={itunes}>iTunes</a>
        </li>
        <li>{source}</li>
        <li>{runtime}</li>
      </ul>
    </article>
  )
}

export default Audio
