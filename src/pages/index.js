/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
          padding: [8, 16, 24, 32],
        }}
      >
        What to do
      </main>
    </Layout>
  )
}

export default IndexPage
