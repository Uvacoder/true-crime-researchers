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
            minHeight: "600px",
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
                const {
                  centerLat,
                  centerLong,
                  slug,
                  titleShort,
                } = casefile.data
                const onMarkerClick = evt => {
                  window.location = `/cases/${slug}`
                }
                return (
                  <Marker
                    key={slug}
                    position={{
                      lat: centerLat,
                      lng: centerLong,
                    }}
                    onClick={onMarkerClick}
                    title={titleShort}
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
            const { slug, title, status, caseImage } = casefile.data

            return (
              <Box
                as="article"
                key={title}
                sx={{
                  pt: [8, 12],
                  width: ["100%", null, null, null, "50%"],
                  "&:nth-child(even)": {
                    pl: [null, null, null, null, 8, null, 12],
                  },
                  "&:nth-child(odd)": {
                    pr: [null, null, null, null, 8, null, 12],
                  },
                }}
              >
                <Flex
                  sx={{
                    alignItems: "center",
                    borderBottom: theme => `1px dashed ${theme.colors.detail}`,
                    flexWrap: ["wrap", null, "nowrap"],
                    pb: 16,
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                    }}
                  >
                    {caseImage && (
                      <figure
                        sx={{
                          bg: "background",
                          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                          m: 0,
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
                    )}
                  </Box>
                  <Box
                    sx={{
                      pl: [null, null, 8, 12],
                    }}
                  >
                    <div
                      sx={{
                        fontSize: [
                          "16px",
                          "16px",
                          "16px",
                          "calc(1vw + 1vh + .5vmin)",
                        ],
                        fontWeight: 1,
                        mb: 4,
                      }}
                    >
                      <span sx={{ color: "mute" }}>Status: </span>
                      <span sx={{ color: statusColor(status) }}>{status}</span>
                    </div>
                    <p
                      sx={{
                        maxWidth: "480px",
                        mt: [null, null, null, null, 0],
                      }}
                    >
                      {title}
                    </p>
                    <Link
                      sx={{
                        color: "action",
                        fontWeight: "bold",
                        transition: "opacity 0.3s",
                        "&:hover": {
                          opacity: 0.8,
                        },
                      }}
                      to={`/cases/${slug}`}
                    >
                      View the Case
                    </Link>
                  </Box>
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
          centerLat: Center_Latitude
          centerLong: Center_Longitude
          published: Published
          slug: Slug
          status: Status
          title: Title
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

export default CasesPage
