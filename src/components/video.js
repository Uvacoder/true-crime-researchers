/** @jsx jsx */
import { Flex, Box, jsx, Styled } from "theme-ui"

const Video = ({ video }) => {
  const { description, title, url } = video.data
  return (
    <Flex
      as="article"
      sx={{
        alignItems: "center",
        flexWrap: "wrap",
        mt: 16,
      }}
    >
      <Box
        sx={{
          pl: [null, null, 12, null, 24],
          pr: [null, null, 12, null, 24, null],
          order: 1,
          width: ["100%", null, null, null, null, "40%"],
        }}
      >
        <Styled.h3 sx={{ mb: 0 }}>{title}</Styled.h3>
        <p sx={{ mt: 4 }}>{description}</p>
      </Box>
      <Box
        sx={{
          bg: "background",
          boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
          p: 6,
          width: ["100%", null, null, null, null, "60%"],
        }}
      >
        <div
          sx={{
            height: 0,
            overflow: "hidden",
            paddingBottom: "56.25%",
            position: "relative",
          }}
        >
          <iframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            height="315"
            src={url}
            sx={{
              left: 0,
              position: "absolute",
              top: 0,
              height: "100%",
              width: "100%",
            }}
            title={title}
            width="560"
          ></iframe>
        </div>
      </Box>
    </Flex>
  )
}

export default Video
