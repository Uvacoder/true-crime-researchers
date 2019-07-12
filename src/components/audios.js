/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Audio from "components/Audio"

const Audios = ({ audios }) => {
  return (
    <section sx={{ px: 8, py: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
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
        {audios.map(audio => (
          <Audio audio={audio}></Audio>
        ))}
      </Flex>
    </section>
  )
}

export default Audios
