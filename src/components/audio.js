import React from "react"
import Img from "gatsby-image"

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
      <figure className="image">
        <Img
          alt="{source}"
          fixed={thumbnail.localFiles[0].childImageSharp.fixed}
          width={150}
        />
      </figure>
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
