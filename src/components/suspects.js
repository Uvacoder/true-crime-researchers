/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Suspect from "components/suspect"

const Suspects = ({ suspects }) => {
  return (
    <section
      sx={{
        bg: "pending",
        mt: 48,
        p: [16, 16, 24],
        position: "relative",
        "&:before": {
          bg: "pending",
          content: `""`,
          position: "absolute",
          top: "-50px",
          left: 0,
          width: "100%",
          height: "calc(100% + 100px)",
          clipPath: "polygon(0% 48px, 100% 0, 100% calc(100% - 48px), 0% 100%)",
        },
      }}
    >
      <div
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        <Styled.h2
          sx={{
            color: "textInvert",
            mb: 24,
            mt: 0,
            textAlign: "center",
          }}
        >
          Suspect
        </Styled.h2>
        {suspects.map(suspect => {
          const { name } = suspect.data
          return <Suspect key={name} suspect={suspect}></Suspect>
        })}
      </div>
    </section>
  )
}

export default Suspects
