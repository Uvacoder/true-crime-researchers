import Img from "gatsby-image"
/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import StackAndSplit from "components/stack-and-split"

import { MetaTable } from "styled/MetaTable"

const Victim = ({ victim }) => {
  const {
    ethnicity,
    dateOfBirth,
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
    <StackAndSplit>
      <div>
        {photo != null && (
          <figure
            sx={{
              bg: "white",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              my: 0,
              ml: 0,
              mr: -8,
              pb: 2,
              pl: 6,
              pr: 6,
              pt: 6,
              position: "relative",
              zIndex: "1",
            }}
          >
            <Img
              alt="Photo of {firstName} {lastName}"
              fixed={photo.localFiles[0].childImageSharp.fixed}
            />
          </figure>
        )}
      </div>
      <div
        sx={{
          mt: 16,
        }}
      >
        <Styled.h3
          sx={{
            fontSize: "calc(1.5vw + 1.5vh + 1vmin)",
            mb: 4,
            ml: 18,
            mr: 4,
          }}
        >
          {firstName} {middleName && middleName} {lastName}
        </Styled.h3>

        <div
          sx={{
            bg: "white",
            borderTop: theme => `3px solid ${theme.colors.open}`,
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            display: "inline-block",
            px: 20,
            py: 12,
          }}
        >
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
        </div>
      </div>
    </StackAndSplit>
  )
}

export default Victim
