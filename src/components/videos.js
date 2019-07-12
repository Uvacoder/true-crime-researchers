import React from "react"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Video from "components/video"

const Videos = ({ videos }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: 8,
        }}
      >
        Watch
      </Styled.h2>
      {videos.map(video => (
        <Video video={video}></Video>
      ))}
    </section>
  )
}

export default Videos
