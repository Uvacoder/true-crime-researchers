/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Text from "components/text"

const Texts = ({ texts }) => {
  return (
    <section sx={{ p: [16, 16, 24], textAlign: "center" }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
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
        {texts.map(text => (
          <Text text={text} />
        ))}
      </div>
    </section>
  )
}

export default Texts
