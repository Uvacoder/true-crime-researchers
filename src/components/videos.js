/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import styled from "@emotion/styled"

import Video from "components/video"

const Videos = ({ videos }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          mb: 8,
        }}
      >
        Watch
      </Styled.h2>
      <VideoFlip>
        {videos.map(video => (
          <Video key={video.data.title} video={video}></Video>
        ))}
      </VideoFlip>
    </section>
  )
}

const VideoFlip = styled.div`
  @media screen and (min-width: 1200px) {
    > article:nth-child(even) {
      > div:first-of-type {
        order: 0;
      }
    }
  }
`

export default Videos
