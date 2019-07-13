import Img from "gatsby-image"

/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

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
    <article key={`${name}`}>
      <Styled.h2>{name}</Styled.h2>

      <table>
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
        {suspectPhoto && (
          <tr>
            <td>Photo:</td>
            <td>
              <figure className="image">
                <Img
                  alt="{name}"
                  fixed={suspectPhoto.localFiles[0].childImageSharp.fixed}
                  width={260}
                />
              </figure>
            </td>
          </tr>
        )}
      </table>
    </article>
  )
}

export default Suspect
