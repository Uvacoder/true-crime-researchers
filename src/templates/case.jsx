import { graphql } from "gatsby"
/** @jsx jsx */
import { jsx } from "theme-ui"

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
                margin: "0",
                position: "relative",
                textTransform: "uppercase",
              }}
            >
              {category}
              <div
                sx={{
                  alignItems: "center",
                  bottom: "0",
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  left: "0",
                  right: "0",
                  top: "0",
                  zIndex: "1",
                }}
              >
                <span
                  sx={{
                    bg: "white",
                    borderTop: "3px solid #AA2E00",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",
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
                  Status: <span sx={{ color: "open" }}>{status}</span>
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

        {places && <Places places={places} />}

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
    ) {
      nodes {
        data {
          Cases {
            data {
              category: Category
              status: Status
              summary: Summary
              title: Title
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
                        fixed(width: 150) {
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
                        fixed(width: 260) {
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
