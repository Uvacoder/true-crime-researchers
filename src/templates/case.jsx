import React from "react"
import { graphql } from "gatsby"
/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Audios from "components/audios"
import Event from "components/event"
import Layout from "components/layout"
import Person from "components/person"
import Places from "components/places"
import Suspect from "components/suspect"
import SEO from "components/seo"
import Texts from "components/texts"
import Timeline from "components/timeline"
import Victim from "components/victim"
import Video from "components/video"

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

          {victims && (
            <div
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                pt: "16",
              }}
            >
              {victims.map(victim => {
                return <Victim victim={victim}></Victim>
              })}
            </div>
          )}

          <h1
            sx={{
              fontSize: "calc(2vw + 2vh + 1vmin)",
            }}
          >
            {title}
          </h1>
          <p sx={{ mx: "auto", my: "0", maxWidth: "900px" }}>{summary}</p>
        </section>

        {suspects && (
          <section sx={{ p: [16, 16, 24] }}>
            <Styled.h2
              sx={{
                fontSize: "calc(3vw + 3vh + 2.5vmin)",
                lineHeight: "single",
                mb: 8,
              }}
            >
              Suspect
            </Styled.h2>
            {suspects.map(suspect => (
              <Suspect suspect={suspect}></Suspect>
            ))}
          </section>
        )}

        {events && (
          <section sx={{ padding: [16, 16, 24] }}>
            <Styled.h2
              sx={{
                fontSize: "calc(3vw + 3vh + 2.5vmin)",
                lineHeight: "single",
                mb: [8, 8, 8, 8, 24],
                textAlign: ["left", "left", "left", "left", "center"],
              }}
            >
              Events
            </Styled.h2>
            <Timeline>
              {events.map(event => (
                <Event event={event} />
              ))}
            </Timeline>
          </section>
        )}

        {places && (
          <section sx={{ p: [16, 16, 24] }}>
            <h2>Places of Interest</h2>
            <Places places={places} />
          </section>
        )}

        {persons && (
          <section sx={{ p: [16, 16, 24] }}>
            <Styled.h2
              sx={{
                fontSize: "calc(3vw + 3vh + 2.5vmin)",
                lineHeight: "single",
                mb: 16,
                mt: 0,
                textAlign: ["left", null, null, null, "center"],
              }}
            >
              Persons of Interest
            </Styled.h2>
            <Flex
              sx={{
                flexWrap: "wrap",
              }}
            >
              {persons.map(person => (
                <Person person={person}></Person>
              ))}
            </Flex>
          </section>
        )}

        {videos && (
          <section sx={{ p: [16, 16, 24] }}>
            <Styled.h2
              sx={{
                fontSize: "calc(3vw + 3vh + 2.5vmin)",
                lineHeight: "single",
                mb: 8,
              }}
            >
              Watch
            </Styled.h2>
            {videos.map(video => (
              <Video video={video}></Video>
            ))}
          </section>
        )}

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
