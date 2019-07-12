import React from "react"
import Img from "gatsby-image"
/** @jsx jsx */
import { Box, jsx, Styled } from "theme-ui"

import convertRuntime from "helpers/convertRuntime"

import IconItunes from "images/icons/itunes.svg"
import IconStitcher from "images/icons/stitcher.svg"

const Audio = ({ audio }) => {
  const {
    itunes,
    runtime,
    source,
    stitcher,
    thumbnail,
    title,
    url,
  } = audio.data
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "698px",
        order: 1,
        p: 12,
        width: ["100%", null, null, null, null, "50%"],
      }}
    >
      <div
        sx={{
          alignItems: "center",
          bg: "background",
          borderLeft: [0, null, theme => `3px solid ${theme.colors.open}`],
          borderTop: [theme => `3px solid ${theme.colors.open}`, null, 0],
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: ["column", null, "row"],
          p: 12,
          textAlign: "center",
          width: "100%",
        }}
      >
        <Img
          alt="{source}"
          fixed={thumbnail.localFiles[0].childImageSharp.fixed}
          sx={{
            flexShrink: 0,
          }}
        />
        <div
          sx={{
            mt: 8,
            pl: [null, null, 12],
            textAlign: "left",
          }}
        >
          <span sx={{ fontSize: "75%", textTransform: "uppercase" }}>
            {source}
          </span>
          <Styled.a href={url}>
            <Styled.h4 sx={{ mb: 0, mt: 0 }}>{title}</Styled.h4>
          </Styled.a>
          <p sx={{ fontSize: "80%", mb: 8, mt: 4 }}>
            {convertRuntime(runtime)}
          </p>
          <ul
            sx={{
              alignItems: "center",
              display: "flex",
              listStyle: "none",
              m: 0,
              p: 0,
            }}
          >
            <li>
              <Styled.a
                href={itunes}
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img alt="iTunes" src={IconItunes} sx={{ mr: 4 }} width={32} />
                iTunes
              </Styled.a>
            </li>
            <li sx={{ ml: 16 }}>
              <Styled.a
                href={stitcher}
                sx={{
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <img
                  alt="Stitcher"
                  src={IconStitcher}
                  sx={{ mr: 4 }}
                  width={48}
                />
                Stitcher
              </Styled.a>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  )
}

export default Audio
