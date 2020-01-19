import Img from "gatsby-image"
/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

const VictimMultiple = ({ victim }) => {
  const { description, firstName, lastName, middleName, photo } = victim.data

  return (
    <Flex
      sx={{
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        pt: 16,
        width: "100%",
      }}
    >
      <Box
        sx={{
          px: 8,
        }}
      >
        {photo != null && (
          <figure
            sx={{
              bg: "background",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              display: "flex",
              m: 0,
              p: 6,
            }}
          >
            <Img
              alt="Photo of {firstName} {lastName}"
              fixed={photo.localFiles[0].childImageSharp.fixed}
            />
          </figure>
        )}
      </Box>
      <Box
        sx={{
          px: 8,
          width: [null, null, null, null, "50%"],
        }}
      >
        <Styled.h3
          sx={{
            mb: 0,
            mt: [4, null, null, null, 0],
            textAlign: ["center", null, null, null, "left"],
          }}
        >
          {firstName} {middleName && middleName} {lastName}
        </Styled.h3>
        {description}
      </Box>
    </Flex>
  )
}

export default VictimMultiple
