/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const RelatedCases = ({ relatedCases }) => {
  console.log(relatedCases)
  return (
    <section sx={{ padding: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          mb: [8, 8, 8, 8, 24],
          textAlign: ["left", "left", "left", "left", "center"],
        }}
      >
        Related Cases
      </Styled.h2>
      {relatedCases.map(relatedCase => {
        const { slug, title } = relatedCase.data
        return (
          <p
            key={slug}
            sx={{
              mx: "auto",
              maxWidth: "900px",
            }}
          >
            {title} <Styled.a href={`/cases/${slug}`}>View the case</Styled.a>
          </p>
        )
      })}
    </section>
  )
}

export default RelatedCases
