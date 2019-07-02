import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Audio from "components/audio"
import Event from "components/event"
import Layout from "components/layout"
import Read from "components/read"
import Person from "components/person"
import Places from "components/places"
import Suspect from "components/suspect"
import SEO from "components/seo"
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
    videos,
  } = data.allAirtable.nodes[0].data.Cases[0].data

  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
        }}
      >
        <span>{category}</span>
        <h1>{title}</h1>
        <span>{status}</span>
        <p>{summary}</p>

        {suspects && (
          <section>
            <h2>Suspect</h2>
            {suspects.map(suspect => (
              <Suspect suspect={suspect}></Suspect>
            ))}
          </section>
        )}

        {events && (
          <section>
            <h2>Events</h2>
            <ul>
              <li>
                {events.map(event => (
                  <Event event={event} />
                ))}
              </li>
            </ul>
          </section>
        )}

        {places && <Places places={places} />}

        {persons && (
          <section>
            <h2>Persons of Interest</h2>
            {persons.map(person => (
              <Person person={person}></Person>
            ))}
          </section>
        )}

        {videos && (
          <section>
            <h2>Watch</h2>
            {videos.map(video => (
              <Video video={video}></Video>
            ))}
          </section>
        )}

        {audio && (
          <section>
            <h2>Listen</h2>
            {audio.map(item => (
              <Audio audio={item}></Audio>
            ))}
          </section>
        )}

        {texts && (
          <section>
            <h2>Read</h2>
            {texts.map(text => (
              <Read text={text} />
            ))}
          </section>
        )}
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
                        fixed(width: 150) {
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
                  sex: Sex
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
                  type: Type
                  sourceName: Source_Name
                  linkText: Link_Text
                  url: URL
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
