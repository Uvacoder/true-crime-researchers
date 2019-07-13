/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"
import Img from "gatsby-image"

import { MetaTable } from "styled/MetaTable"

const Suspect = ({ suspect }) => {
  const {
    ethnicity,
    dateOfBirth,
    eyeColor,
    name,
    hairColor,
    heightInFeet,
    heightInInches,
    suspectPhoto,
    sex,
    weight,
  } = suspect.data

  return (
    <Flex
      as="article"
      sx={{
        alignItems: "flex-start",
        justifyContent: "center",
        color: "textInvert",
        flexWrap: "wrap",
      }}
    >
      {suspectPhoto && (
        <figure
          sx={{
            bg: "rgba(0, 0, 0, 0.1)",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            m: 0,
            pb: 2,
            pl: 6,
            pr: 6,
            pt: 6,
          }}
        >
          <Img
            alt="{name}"
            fixed={suspectPhoto.localFiles[0].childImageSharp.fixed}
            width={260}
          />
        </figure>
      )}

      <Box
        sx={{
          ml: 16,
        }}
      >
        <Styled.h3
          sx={{
            fontSize: "calc(1.5vw + 1.5vh + 1vmin)",
            mb: 4,
          }}
        >
          {name}
        </Styled.h3>

        <MetaTable invert>
          <tbody>
            {ethnicity && (
              <tr>
                <td>Ethnicity:</td>
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
            {dateOfBirth && (
              <tr>
                <td>Date of Birth:</td>
                <td>{dateOfBirth}</td>
              </tr>
            )}
          </tbody>
        </MetaTable>
      </Box>
    </Flex>
  )
}

export default Suspect
