import { graphql } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const VictimsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
        }}
      >
        <h1>Victims</h1>
        {data.allAirtable.edges.map(victim => {
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
          } = victim.node.data

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
                {photo && (
                  <tr>
                    <td>Photo:</td>
                    <td>
                      {photo && (
                        <figure className="image">
                          <Img
                            alt="{firstName} {lastName}"
                            fluid={
                              victim.node.data.photo.localFiles[0]
                                .childImageSharp.fluid
                            }
                          />
                        </figure>
                      )}
                    </td>
                  </tr>
                )}
              </table>
            </article>
          )
        })}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Victims" } }) {
      edges {
        node {
          data {
            firstName: First_Name
            middleName: Middle_Name
            lastName: Last_Name
            ethnicity: Ethnicity
            sex: Sex
            heightInFeet: Height_in_feet
            heightInInches: Height_in_inches
            weight: Weight
            hairColor: Hair_Color
            eyeColor: Eye_Color
            dateOfBirth: Date_of_Birth
            nationality: Nationality
            lastSeen: Last_Seen
            photo: Photo {
              localFiles {
                childImageSharp {
                  fluid(maxWidth: 260) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default VictimsPage
