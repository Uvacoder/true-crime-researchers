import React from "react"
import Img from "gatsby-image"
/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"

const Person = ({ person }) => {
  const { description, name, personPhoto } = person.data
  return (
    <Box as="article" sx={{ p: 16, width: ["100%", null, null, null, "50%"] }}>
      <div
        sx={{
          bg: "background",
          boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          borderTop: theme => `3px solid ${theme.colors.open}`,
          mt: 24,
          p: [8, null, 16],
          textAlign: "center",
        }}
      >
        <figure
          sx={{
            bg: "background",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
            display: "inline-block",
            textAlign: "center",
            m: 0,
            mt: -48,
            p: 8,
            pb: 4,
          }}
        >
          <Img
            alt="{firstName} {lastName}"
            fixed={personPhoto.localFiles[0].childImageSharp.fixed}
            width={150}
          />
        </figure>
        <Styled.h3
          sx={{
            fontSize: "calc(1.25vw + 1.25vh + 1vmin)",
            mb: 4,
            mt: 8,
          }}
        >
          {name}
        </Styled.h3>
        <p sx={{ m: 0, textAlign: "left" }}>{description}</p>
      </div>
    </Box>
  )
}

export default Person
