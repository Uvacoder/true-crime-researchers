/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const VictimsTemplate = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <main
        css={{
          color: "text",
          fontFamily: "body",
        }}
      >
        <h1>Victims Template</h1>
      </main>
    </Layout>
  )
}

export default VictimsTemplate
