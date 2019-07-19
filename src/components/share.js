import React from "react"
import Img from "gatsby-image"
/** @jsx jsx */
import { jsx, Styled, Flex } from "theme-ui"

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
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: [8, 8, 8, 8, 24],
          textAlign: "center",
        }}
      >
        Share
      </Styled.h2>
      <p sx={{ textAlign: "center" }}>
        Images with case info, for sharing on social networks.
      </p>
      <Flex sx={{ flexWrap: "wrap" }}>
        <figure>
          <Img
            alt="a"
            fixed={Instagram_Image.localFiles[0].childImageSharp.fixed}
            width={540}
          />
          <figcaption>Sized for the Instagram Square</figcaption>
        </figure>
        <figure>
          <Img
            alt="a"
            fixed={Instagram_Story_Image.localFiles[0].childImageSharp.fixed}
            width={540}
          />
          <figcaption>Sized for the Instagram Story</figcaption>
        </figure>
        <figure>
          <Img
            alt="a"
            fixed={Facebook_Image.localFiles[0].childImageSharp.fixed}
            width={600}
          />
          <figcaption>Sized for the Facebook Timeline</figcaption>
        </figure>
        <figure>
          <Img
            alt="a"
            fixed={Twitter_Image.localFiles[0].childImageSharp.fixed}
            width={440}
          />
          <figcaption>Sized for the Twitter Timeline</figcaption>
        </figure>
      </Flex>
    </section>
  )
}

export default Share
