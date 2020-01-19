/** @jsx jsx */
import { jsx } from "theme-ui"

import statusColor from "helpers/statusColor"

const CTA = ({ ctaPhone, ctaText, ctaUrl, ctaUrlText, status }) => {
  return (
    <article
      sx={{
        fontSize: 6,
        mt: 16,
        p: 8,
        textAlign: ["left", null, null, null, "center"],
      }}
    >
      <div
        sx={{
          borderBottom: theme => `1px dashed ${theme.colors.detail}`,
          borderTop: theme => `1px dashed ${theme.colors.detail}`,
          display: "inline-block",
          margin: "0 auto",
          maxWidth: "900px",
          textAlign: "center",
          py: 8,
        }}
      >
        {ctaText && ctaText}{" "}
        {ctaUrlText && (
          <a href={ctaUrl} sx={{ color: statusColor(status) }}>
            {ctaUrlText}
          </a>
        )}
        {ctaPhone && ctaPhone}.
      </div>
    </article>
  )
}

export default CTA
