/** @jsx jsx */
import { jsx } from "theme-ui"

import statusColor from "helpers/statusColor"

const CTA = ({ ctaPhone, ctaText, ctaUrl, ctaUrlText, status }) => {
  return (
    <article
      sx={{
        backgroundColor: statusColor(status),
        color: "textInvert",
        mt: 32,
        p: 8,
        textAlign: "center",
      }}
    >
      {ctaText && ctaText}{" "}
      {ctaUrlText && (
        <a href={ctaUrl} sx={{ color: "textInvert" }}>
          {ctaUrlText}
        </a>
      )}{" "}
      {ctaPhone && ctaPhone}
    </article>
  )
}

export default CTA
