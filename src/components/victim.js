import Img from "gatsby-image"
/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

import { MetaTable } from "styled/MetaTable"

const Victim = ({ victim }) => {
  const {
    dateOfBirth,
    discovered,
    ethnicity,
    eyeColor,
    firstName,
    hairColor,
    heightInFeet,
    heightInInches,
    lastName,
    lastSeen,
    middleName,
    nationality,
    photo,
    sex,
    weight,
  } = victim.data

  return (
    <Flex
      sx={{
        alignItems: "flex-start",
        justifyContent: "center",
        flexWrap: "wrap",
        pt: 16,
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: [null, null, "flex"],
          justifyContent: "flex-end",
          px: 8,
          width: [null, null, "50%"],
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
          width: [null, null, "50%"],
        }}
      >
        <Styled.h3
          sx={{
            mb: 4,
          }}
        >
          {firstName} {middleName && middleName} {lastName}
        </Styled.h3>
        <MetaTable border={0} cellSpacing={0} cellPadding={0}>
          <tbody>
            {ethnicity && (
              <tr>
                <td
                  css={{
                    mt: 4,
                    pt: 3,
                  }}
                >
                  Ethnicity:
                </td>
                <td>{ethnicity}</td>
              </tr>
            )}
            {sex && (
              <tr>
                <td>Sex:</td>
                <td>{sex}</td>
              </tr>
            )}
            {heightInFeet && (
              <tr>
                <td>Height:</td>
                <td>
                  {heightInFeet}' {heightInInches && heightInInches}"
                </td>
              </tr>
            )}
            {weight && (
              <tr>
                <td>Weight:</td>
                <td>{weight} lbs.</td>
              </tr>
            )}
            {hairColor && (
              <tr>
                <td>Hair Color:</td>
                <td>{hairColor}</td>
              </tr>
            )}
            {eyeColor && (
              <tr>
                <td>Eye Color:</td>
                <td>{eyeColor}</td>
              </tr>
            )}
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
            {nationality && (
              <tr>
                <td>Nationality:</td>
                <td>{nationality}</td>
              </tr>
            )}
          </tbody>
        </MetaTable>
      </Box>
    </Flex>
  )
}

export default Victim
