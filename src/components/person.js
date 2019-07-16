import Img from "gatsby-image"
/** @jsx jsx */
import { Box, jsx, Styled, Flex } from "theme-ui"

const Person = ({ person }) => {
  const { description, name, personPhoto } = person.data
  return (
    <Flex
      sx={{
        flexWrap: ["wrap", null, null, "nowrap", null, "wrap"],
        width: ["100%", null, null, null, null, "50%"],
        "&:nth-child(even)": {
          borderLeft: [
            null,
            null,
            null,
            null,
            null,
            theme => `1px dashed ${theme.colors.detail}`,
          ],
          borderTop: [
            theme => `1px dashed ${theme.colors.detail}`,
            null,
            null,
            null,
            null,
            0,
          ],
          pl: [0, null, null, null, null, 24],
        },
        "&:nth-child(odd)": {
          pr: [0, null, null, null, null, 24],
        },
        "&:not(:first-of-type)": {
          pt: [24, null, null, null, null, 0],
        },
        "&:first-of-type": {
          pb: [24, null, null, null, null, 0],
        },
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
        }}
      >
        <figure
          sx={{
            bg: "background",
            boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
            display: "inline-flex",
            textAlign: "center",
            m: 0,
            p: 6,
          }}
        >
          <Img
            alt="{firstName} {lastName}"
            fixed={personPhoto.localFiles[0].childImageSharp.fixed}
            width={200}
          />
        </figure>
      </Box>
      <Box
        sx={{
          pl: [0, 0, 8, 16, null, 0],
        }}
      >
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
      </Box>
    </Flex>
  )
}

export default Person
