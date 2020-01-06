import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
/** @jsx jsx */
import { Flex, Box, jsx, Styled } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const HomePage = ({ data }) => {
  const { description, title } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <Flex
          as="section"
          sx={{
            alignItems: [null, null, null, null, null, "center"],
            justifyContent: "center",
            flexWrap: "wrap",
            px: 16,
          }}
        >
          <Box
            sx={{
              maxWidth: ["700px", null, null, null, null, "45%"],
              order: [null, null, null, null, null, 1],
              pt: [16, null, null, null, null, 0],
              pl: [null, null, null, null, null, 16],
              width: ["100%", null, null, null, null, "45%"],
            }}
          >
            <Styled.h2 as="h1" sx={{ m: 0 }}>
              {title}
            </Styled.h2>
            <p sx={{ mt: 4 }}>{description}</p>
          </Box>
          <Box
            sx={{
              pt: 16,
              width: ["100%", null, null, null, null, "55%"],
            }}
          >
            <Flex
              sx={{
                flexWrap: "wrap",
                justifyContent: [
                  "center",
                  null,
                  null,
                  null,
                  null,
                  "flex-start",
                ],
                mx: -4,
              }}
            >
              {data.allAirtable.nodes.map(casefile => {
                const { published, slug, caseImage } = casefile.data

                return (
                  published && (
                    <Link
                      key={slug}
                      sx={{
                        display: [
                          "none",
                          null,
                          null,
                          null,
                          null,
                          null,
                          "block",
                        ],
                        "&:nth-child(1)": {
                          display: "block",
                        },
                        "&:nth-child(2)": {
                          display: "block",
                        },
                        "&:nth-child(3)": {
                          display: [null, null, null, "block"],
                        },
                        "&:nth-child(4)": {
                          display: [null, null, null, null, null, "block"],
                        },
                      }}
                      to={`cases/${slug}`}
                    >
                      <figure
                        sx={{
                          bg: "background",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                          m: 4,
                          pb: 2,
                          px: 6,
                          pt: 6,
                          width: ["200px"],
                        }}
                      >
                        <Img
                          fixed={caseImage.localFiles[0].childImageSharp.fixed}
                        />
                      </figure>
                    </Link>
                  )
                )
              })}
            </Flex>
          </Box>
        </Flex>
        <Flex
          as="section"
          sx={{
            alignItems: [null, null, null, null, null, "center"],
            justifyContent: "center",
            flexWrap: "wrap",
            px: 16,
            py: 16,
          }}
        >
          <Box
            sx={{
              pr: [null, null, null, null, null, 16],
              pt: 16,
              maxWidth: ["700px", null, null, null, null, "45%"],
              width: ["100%", null, null, null, null, "45%"],
            }}
          >
            <Styled.h2 sx={{ m: 0 }}>The Data</Styled.h2>
            <p sx={{ mt: 4 }}>
              All data is entered into into a publicly viewable database, using
              a service named{" "}
              <Styled.a href="https://airtable.com">Airtable</Styled.a>. It is
              read-only by default, but additions and edit suggestions can be
              made via a form.
            </p>

            <p sx={{ mb: 0 }}>
              The data fields will evolve over time, based on the suggestions of
              the community and information that could be used for identifying
              patterns.
            </p>
          </Box>
          <Box
            sx={{
              pt: 16,
              width: ["100%", null, null, null, null, "55%"],
            }}
          >
            <iframe
              src="https://airtable.com/embed/shrByS81gAOehnvC4?backgroundColor=gray"
              frameBorder="0"
              onMouseWheel=""
              width="100%"
              height="533"
              title="Airtable Database"
              sx={{
                background: "transparent",
                boxShadow: 0,
              }}
            ></iframe>
          </Box>
        </Flex>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
    allAirtable(
      filter: { table: { eq: "Cases" }, data: { Published: { eq: "true" } } }
      limit: 6
    ) {
      nodes {
        data {
          published: Published
          slug: Slug
          caseImage: Case_Image {
            localFiles {
              childImageSharp {
                fixed(width: 200) {
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

export default HomePage
