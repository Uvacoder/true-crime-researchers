import Img from "gatsby-image"
/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

import { MetaTable } from "styled/MetaTable"

const VictimDeath = ({ victim }) => {
  const {
    age,
    dateOfBirth,
    description,
    discovered,
    firstName,
    lastName,
    lastSeen,
    middleName,
    photo,
  } = victim.data

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
        <MetaTable border={0} cellSpacing={0} cellPadding={0} sx={{ mb: 4 }}>
          <tbody>
            {lastSeen && (
              <tr>
                <td>Last Seen:</td>
                <td>{lastSeen}</td>
              </tr>
            )}
            {discovered && (
              <tr>
                <td>Discovered:</td>
                <td>{discovered}</td>
              </tr>
            )}
            {dateOfBirth && (
              <tr>
                <td>Date of Birth:</td>
                <td>{dateOfBirth}</td>
              </tr>
            )}
            {age && (
              <tr>
                <td>Age at the Time:</td>
                <td>{age}</td>
              </tr>
            )}
          </tbody>
        </MetaTable>
        {description}
      </Box>
    </Flex>
  )
}

export default VictimDeath