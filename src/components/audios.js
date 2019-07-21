/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Audio from "components/audio"

const Audios = ({ audios }) => {
  return (
    <section sx={{ px: 8, py: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          mb: 8,
          textAlign: "center",
        }}
      >
        Listen
      </Styled.h2>
      <Flex
        as="article"
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {audios.map(audio => {
          const { title } = audio.data
          return <Audio audio={audio} key={title}></Audio>
        })}
      </Flex>
    </section>
  )
}

export default Audios
