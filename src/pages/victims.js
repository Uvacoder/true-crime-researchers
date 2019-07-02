import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import Victim from "components/victim"
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

        <section>
          {data.allAirtable.nodes.map(victim => {
            console.log(victim)
            return <Victim victim={victim}></Victim>
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Victims" } }) {
      nodes {
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
                fixed(width: 260) {
                  ...GatsbyImageSharpFixed
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
