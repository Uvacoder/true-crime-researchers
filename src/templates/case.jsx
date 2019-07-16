import { graphql } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"

import statusColor from "helpers/statusColor"

import Audios from "components/audios"
import Events from "components/events"
import Layout from "components/layout"
import Persons from "components/persons"
import Places from "components/places"
import Suspects from "components/suspects"
import SEO from "components/seo"
import Texts from "components/texts"
import Victims from "components/victims"
import Videos from "components/videos"

const CasesTemplate = ({ data }) => {
  const {
    audio,
    category,
    centerLat,
    centerLong,
    events,
    persons,
    places,
    status,
    suspects,
    summary,
    texts,
    title,
    victims,
    videos,
    zoom,
  } = data.allAirtable.nodes[0].data.Cases[0].data

  return (
    <Layout>
      <SEO title="Home" />
      <main>
        <section
          sx={{
            px: [16, 16, 24],
          }}
        >
          <div
            sx={{
              textAlign: "center",
            }}
          >
            <span
              sx={{
                display: "block",
                fontSize: [
                  "calc(2vw + 2vh + 12vmin)",
                  "calc(2vw + 2vh + 12vmin)",
                  "calc(2vw + 2vh + 12vmin)",
                  "calc(2vw + 2vh + 12vmin)",
                  "16rem",
                ],
                fontWeight: "heavy",
                lineHeight: "0.8",
                mb: 0,
                mt: 16,
                position: "relative",
                textTransform: "uppercase",
              }}
            >
              {category}
              <div
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
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
                    fontWeight: "bold",
                    px: [2, 2, 2, 6],
                    py: [4, 4, 4, 8],
                  }}
                >
                  <span sx={{ color: "mute" }}>Status: </span>
                  <span sx={{ color: statusColor(status) }}>{status}</span>
                </span>
              </div>
            </span>
          </div>

          {victims && <Victims victims={victims} />}

          <h1
            sx={{
              fontSize: "calc(2vw + 2vh + 1vmin)",
            }}
          >
            {title}
          </h1>
          <p sx={{ mx: "auto", my: "0", maxWidth: "900px" }}>{summary}</p>
        </section>

        {suspects && <Suspects suspects={suspects} />}

        {events && <Events events={events} />}

        {places && (
          <Places
            centerLat={centerLat}
            centerLong={centerLong}
            places={places}
            zoom={zoom}
          />
        )}

        {persons && <Persons persons={persons} />}

        {videos && <Videos videos={videos} />}

        {audio && <Audios audios={audio} />}

        {texts && <Texts texts={texts} />}
      </main>
    </Layout>
  )
}

export const query = graphql`
  query casePageQuery($slug: String!) {
    allAirtable(
      filter: {
        data: { Cases: { elemMatch: { data: { Slug: { eq: $slug } } } } }
      }
      sort: { fields: data___Places___data___Label }
    ) {
      nodes {
        data {
          Cases {
            data {
              category: Category
              centerLat: Center_Latitude
              centerLong: Center_Longitude
              status: Status
              summary: Summary
              title: Title
              zoom: Zoom
              audio: Audio {
                data {
                  itunes: iTunes
                  thumbnail: Thumbnail {
                    localFiles {
                      childImageSharp {
                        fixed(width: 200) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                  runtime: Runtime__in_minutes_
                  source: Source
                  stitcher: Stitcher
                  title: Title
                  url: URL
                }
              }
              events: Events {
                data {
                  date: Date(formatString: "MMMM DD, YYYY")
                  description: Description
                  time: Time(formatString: "hh:mm a")
                  title: Title
                }
              }
              persons: Persons_of_Interest {
                data {
                  description: Description
                  name: Name
                  personPhoto: Person_Photo {
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
              places: Places {
                data {
                  description: Description
                  label: Label
                  latitude: Latitude
                  longitude: Longitude
                  title: Title
                }
              }
              suspects: Suspects {
                data {
                  name: Name
                  ethnicity: Ethnicity
                  sex: Sex
                  heightInFeet: Height_in_feet
                  heightInInches: Height_in_inches
                  weight: Weight
                  hairColor: Hair_Color
                  eyeColor: Eye_Color
                  dateOfBirth: Date_of_Birth
                  suspectPhoto: Suspect_Photo {
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
              texts: Texts {
                data {
                  sourceName: Source_Name
                  title: Title
                  type: Type
                  url: URL
                }
              }
              victims: Victims {
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
                  lastSeen: Last_Seen(formatString: "MMMM DD, YYYY")
                  photo: Photo {
                    localFiles {
                      childImageSharp {
                        fixed(width: 310) {
                          ...GatsbyImageSharpFixed
                        }
                      }
                    }
                  }
                }
              }
              videos: Videos {
                data {
                  description: Description
                  source: Source
                  title: Title
                  url: URL
                }
              }
            }
          }
        }
      }
    }
  }
`

export default CasesTemplate
