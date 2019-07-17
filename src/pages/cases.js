import { Link, graphql } from "gatsby"

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
            const { category, slug, title, status } = casefile.data

            return (
              <Box
                as="article"
                key={title}
                sx={{
                  padding: [8, 16],
                  width: ["100%", null, null, "50%", null, "33.333333%"],
                }}
              >
                <span>
                  {category}: {status}
                </span>
                <h2
                  sx={{
                    fontSize: "24px",
                    fontWeight: "heading",
                  }}
                >
                  {title}
                </h2>
                <p></p>
                <Link to={`cases/${slug}`}>View the Case</Link>
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
