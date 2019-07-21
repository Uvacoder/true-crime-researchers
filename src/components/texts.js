/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Text from "components/text"

const Texts = ({ texts }) => {
  return (
    <section sx={{ p: [16, 16, 24], textAlign: "center" }}>
      <Styled.h2
        sx={{
          mb: 8,
        }}
      >
        Read
      </Styled.h2>

      <div
        sx={{
          display: "inline-block",
        }}
      >
        {texts.map(text => {
          const { title } = text.data
          return <Text key={title} text={text} />
        })}
      </div>
    </section>
  )
}

export default Texts
