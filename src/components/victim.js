import React from "react"
import Img from "gatsby-image"

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
    <article key={`${firstName}-{$lastName}`}>
      <h2>
        {firstName} {middleName && middleName} {lastName}
      </h2>

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
        {photo != null && (
          <tr>
            <td>Photo:</td>
            <td>
              <figure className="image">
                <Img
                  alt="{firstName} {lastName}"
                  fixed={photo.localFiles[0].childImageSharp.fixed}
                />
              </figure>
            </td>
          </tr>
        )}
      </table>
    </article>
  )
}

export default Victim
