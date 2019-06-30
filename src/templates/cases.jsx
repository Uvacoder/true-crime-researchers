import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Audio from "components/audio"
import Event from "components/event"
import Layout from "components/layout"
import Read from "components/read"
import SEO from "components/seo"

const CasesTemplate = ({ data }) => {
  const {
    audio,
    category,
    events,
    status,
    summary,
    texts,
    title,
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

        <section>
          <h2>Listen</h2>
          {audio.map(item => (
            <Audio audio={item}></Audio>
          ))}
        </section>

        <section>
          <h2>Read</h2>
          {texts.map(text => (
            <Read text={text} />
          ))}
        </section>
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
                  title: Title
                  runtime: Runtime__in_minutes_
                  url: URL
                  stitcher: Stitcher
                  source: Source
                  itunes: iTunes
                  thumbnail: Thumbnail {
                    thumbnails {
                      full {
                        url
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
              events: Events {
                data {
                  date: Date(formatString: "MMMM DD, YYYY")
                  description: Description
                  time: Time(formatString: "hh:mm a")
                  title: Title
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
