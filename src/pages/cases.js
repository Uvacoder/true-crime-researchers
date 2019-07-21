import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
/** @jsx jsx */
import { Flex, Box, jsx, Styled } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const CasesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <Styled.h1
          sx={{
            mx: [8, 16],
            my: 8,
          }}
        >
          Cases
        </Styled.h1>

        <Flex
          as="section"
          sx={{
            flexWrap: "wrap",
          }}
        >
          {data.allAirtable.nodes.map(casefile => {
            const { category, slug, title, photo, status } = casefile.data

            return (
              <Box
                as="article"
                key={title}
                sx={{
                  padding: [8, 16],
                  width: ["100%", null, null, "50%", null, "33.333333%"],
                }}
              >
                {photo && (
                  <figure
                    sx={{
                      bg: "background",
                      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                      m: 0,
                      pb: 2,
                      pl: 6,
                      pr: 6,
                      pt: 6,
                    }}
                  >
                    <Img
                      alt="Photo of {firstName} {lastName}"
                      fixed={photo.localFiles[0].childImageSharp.fixed}
                    />
                  </figure>
                )}
                <span>
                  {category}: {status}
                </span>
                <h3
                  sx={{
                    fontSize: 6,
                    fontWeight: 1,
                  }}
                >
                  {title}
                </h3>
                <p></p>
                <Link to={`/cases/${slug}`}>View the Case</Link>
              </Box>
            )
          })}
        </Flex>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Cases" }, data: { Published: { eq: "true" } } }
    ) {
      nodes {
        data {
          title: Title
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
                    fixed(width: 260) {
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
