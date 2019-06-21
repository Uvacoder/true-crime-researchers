import { graphql } from "gatsby"

/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
        }}
      >
        {data.allAirtable.nodes.map(node => (
          <article key={node.data.title}>
            <h2>{node.data.title}</h2>
            <p>{node.data.summary}</p>
          </article>
        ))}
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable {
      nodes {
        data {
          summary: Summary
          title: Title
        }
      }
    }
  }
`

export default IndexPage
