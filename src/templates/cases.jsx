import { graphql } from "gatsby"
import Img from "gatsby-image"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Audio from "components/audio"
import Layout from "components/layout"
import Read from "components/read"
import SEO from "components/seo"

const CasesTemplate = ({ data }) => {
  const {
    audio,
    category,
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

        <h2>Listen</h2>
        {audio.map(item => (
          <Audio audio={item}></Audio>
        ))}

        <h2>Read</h2>
        {texts.map(text => (
          <Read text={text} />
        ))}
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
            }
          }
        }
      }
    }
  }
`

export default CasesTemplate
