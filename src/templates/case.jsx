import React from "react"
import { graphql } from "gatsby"
/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Audios from "components/audios"
import Events from "components/events"
import Layout from "components/layout"
import Persons from "components/persons"
import Places from "components/places"
import Suspects from "components/suspects"
import SEO from "components/seo"
import Texts from "components/texts"
import Timeline from "components/timeline"
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
      <main>TEst</main>
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
