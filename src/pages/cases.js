import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const CasesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
        }}
      >
        <h1>Cases</h1>
        {data.allAirtable.nodes.map(casefile => {
          const {
            category,
            slug,
            summary,
            title,
            published,
            status,
          } = casefile.data

          if (published === "true") {
            return (
              <article key={title}>
                <h2>
                  {category}: {title}
                </h2>
                <p>
                  {status} {summary}
                </p>
                <Link to={`cases/${slug}`}>View the Case</Link>
              </article>
            )
          }
        })}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Cases" } }) {
      nodes {
        data {
          title: Title
          summary: Summary
          category: Category
          published: Published
          slug: Slug
          status: Status
          Victims {
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
                      src
                    }
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

export default CasesPage
