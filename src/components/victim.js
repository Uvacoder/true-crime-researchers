import React from "react"
import Img from "gatsby-image"
import { css, Styled } from "theme-ui"

// import { StackAndSplit } from "templates/casesStyles"

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
    <div>
      {photo != null && (
        <figure
          css={css({
            bg: "white",
          })}
        >
          <Img
            alt="Photo of {firstName} {lastName}"
            fixed={photo.localFiles[0].childImageSharp.fixed}
          />
        </figure>
      )}

      <div
        sx={{
          mt: 8, // picks up value from `theme.fontSizes[4]`
        }}
      >
        <Styled.h3
          css={{
            fontSize: "calc(1.5vw + 1.5vh + 1vmin)",
            margin: "0 0 0.5rem 0",
          }}
        >
          {firstName} {middleName && middleName} {lastName}
        </Styled.h3>

        <table border={0} cellSpacing={0} cellPadding={0}>
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
        </table>
      </div>
    </div>
  )
}

export default Victim
