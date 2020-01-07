/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

const Social = ({ socialEmbeds }) => {
  return (
    <section sx={{ p: [16, 16, 24], textAlign: "center" }}>
      <Styled.h2
        sx={{
          mb: 8,
        }}
      >
        Social
      </Styled.h2>
      <Flex
        sx={{
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {socialEmbeds.map(socialEmbed => {
          const { height, source, width, url } = socialEmbed.data
          return (
            <iframe
              allow="encrypted-media"
              allowTransparency="true"
              frameborder="0"
              height={height}
              scrolling="no"
              src={url}
              sx={{ border: "none", m: 16, overflow: "hidden" }}
              title={source}
              width={width}
            ></iframe>
          )
        })}
      </Flex>
    </section>
  )
}

export default Social
