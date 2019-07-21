import React from "react"
import Img from "gatsby-image"
/** @jsx jsx */
import { Box, jsx, Styled, Flex } from "theme-ui"

const Share = ({
  Facebook_Image,
  Instagram_Image,
  Instagram_Story_Image,
  Twitter_Image,
}) => {
  return (
    <section>
      <Styled.h2
        sx={{
          mb: [8, 8, 8, 8, 24],
          textAlign: "center",
        }}
      >
        Share
      </Styled.h2>
      <p sx={{ textAlign: "center" }}>
        Images with case info, for sharing on social networks.
      </p>
      <Flex sx={{ justifyContent: "center", flexWrap: "wrap" }}>
        <Box
          as="figure"
          sx={{ m: 0, p: 8, width: ["100%", null, null, null, "50%"] }}
        >
          <Img
            alt="a"
            fluid={Instagram_Image.localFiles[0].childImageSharp.fluid}
            width={540}
          />
          <figcaption>Sized for the Instagram Square</figcaption>
        </Box>
        <Box
          as="figure"
          sx={{ m: 0, p: 8, width: ["100%", null, null, null, "50%"] }}
        >
          <Img
            alt="a"
            fluid={Instagram_Story_Image.localFiles[0].childImageSharp.fluid}
            width={540}
          />
          <figcaption>Sized for the Instagram Story</figcaption>
        </Box>
        <Box
          as="figure"
          sx={{ m: 0, p: 8, width: ["100%", null, null, null, "50%"] }}
        >
          <Img
            alt="a"
            fluid={Facebook_Image.localFiles[0].childImageSharp.fluid}
          />
          <figcaption>Sized for the Facebook Timeline</figcaption>
        </Box>
        <Box
          as="figure"
          sx={{ m: 0, p: 8, width: ["100%", null, null, null, "50%"] }}
        >
          <Img
            alt="a"
            fluid={Twitter_Image.localFiles[0].childImageSharp.fluid}
            width={440}
          />
          <figcaption>Sized for the Twitter Timeline</figcaption>
        </Box>
      </Flex>
    </section>
  )
}

export default Share
