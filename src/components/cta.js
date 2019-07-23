/** @jsx jsx */
import { jsx } from "theme-ui"

import statusColor from "helpers/statusColor"

const CTA = ({ ctaPhone, ctaText, ctaUrl, ctaUrlText, status }) => {
  return (
    <article
      sx={{
        backgroundColor: statusColor(status),
        color: "textInvert",
        fontSize: 6,
        mt: 32,
        p: 8,
        textAlign: ["left", null, null, null, "center"],
      }}
    >
      <div
        sx={{
          margin: "0 auto",
          maxWidth: "900px",
        }}
      >
        {ctaText && ctaText}{" "}
        {ctaUrlText && (
          <a href={ctaUrl} sx={{ color: "textInvert" }}>
            {ctaUrlText}
          </a>
        )}
        {ctaPhone && ctaPhone}.
      </div>
    </article>
  )
}

export default CTA
