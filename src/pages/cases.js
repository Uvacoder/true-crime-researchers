import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

/** @jsx jsx */
import { Flex, Box, jsx, Styled } from "theme-ui"

import statusColor from "helpers/statusColor"

import Layout from "components/layout"
import SEO from "components/seo"

const CasesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        sx={{
          p: 16,
        }}
      >
        <Styled.h2
          as="h1"
          sx={{
            mb: 8,
            mt: 0,
            textAlign: "center",
          }}
        >
          Cases
        </Styled.h2>

        <div
          sx={{
            bg: "background",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
            p: 6,
          }}
        >
          <LoadScript
            id="script-loader"
            googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
          >
            <GoogleMap
              id="marker-example"
              mapContainerStyle={{
                height: "600px",
                width: "100%",
              }}
              zoom={4}
              center={{
                lat: 39.8283,
                lng: -98.5795,
              }}
            >
              {data.allAirtable.nodes.map(casefile => {
                const { centerLat, centerLong } = casefile.data
                console.log(casefile)
                return (
                  <Marker
                    key="thing"
                    position={{
                      lat: centerLat,
                      lng: centerLong,
                    }}
                  />
                )
              })}
            </GoogleMap>
          </LoadScript>
        </div>

        <Flex
          as="section"
          sx={{
            flexWrap: "wrap",
          }}
        >
          {data.allAirtable.nodes.map(casefile => {
            const {
              category,
              slug,
              title,
              photo,
              status,
              twitterImage,
            } = casefile.data

            return (
              <Box
                as="article"
                key={title}
                sx={{
                  px: [8, 16],
                  pt: [8, 16],
                  width: ["100%", null, null, "50%", null, "33.333333%"],
                }}
              >
                <Flex
                  sx={{
                    borderBottom: theme => `1px dashed ${theme.colors.detail}`,
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "space-between",
                    pb: 16,
                  }}
                >
                  <div
                    sx={{
                      flexGrow: 1,
                    }}
                  >
                    <div
                      sx={{
                        alignItems: "center",
                        display: "flex",
                        pl: 6,
                      }}
                    >
                      <span
                        sx={{
                          fontSize: [
                            "16px",
                            "16px",
                            "16px",
                            "calc(1vw + 1vh + .5vmin)",
                          ],
                          fontWeight: 1,
                        }}
                      >
                        <span sx={{ color: "mute" }}>Status: </span>
                        <span sx={{ color: statusColor(status) }}>
                          {status}
                        </span>
                      </span>
                    </div>
                    {twitterImage && (
                      <figure
                        sx={{
                          bg: "background",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                          m: 0,
                          p: 6,
                        }}
                      >
                        <Img
                          fluid={
                            twitterImage.localFiles[0].childImageSharp.fluid
                          }
                        />
                      </figure>
                    )}
                    <p
                      sx={{
                        mb: 8,
                        mt: 8,
                        pl: 6,
                      }}
                    >
                      {title}
                    </p>
                  </div>
                  <Link
                    sx={{
                      color: "action",
                      ml: 6,
                    }}
                    to={`/cases/${slug}`}
                  >
                    View the Case
                  </Link>
                </Flex>
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
          category: Category
          centerLat: Center_Latitude
          centerLong: Center_Longitude
          published: Published
          slug: Slug
          status: Status
          title: Title
          twitterImage: Twitter_Image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 440) {
                  ...GatsbyImageSharpFluid
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
