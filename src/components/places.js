import { graphql, useStaticQuery } from "gatsby"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"
/** @jsx jsx */
import { Box, Flex, jsx, Styled } from "theme-ui"

const Places = ({ centerLat, centerLong, places, zoom }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: [8, 8, 8, 8, 24],
          textAlign: "center",
        }}
      >
        Places of Interest
      </Styled.h2>

      <Flex sx={{ alignItems: "center", flexWrap: "wrap" }}>
        <Box
          sx={{
            flexGrow: 1,
            width: ["100%", null, null, null, "60%"],
          }}
        >
          <div
            sx={{
              bg: "background",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
              p: 6,
            }}
          >
            <LoadScript
              id="script-loader"
              googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                id="marker-example"
                mapContainerStyle={{
                  height: "600px",
                  width: "100%",
                }}
                zoom={zoom}
                center={{
                  lat: centerLat,
                  lng: centerLong,
                }}
              >
                {places.map(place => {
                  const { label, latitude, longitude } = place.data
                  return (
                    <Marker
                      key={label}
                      label={{
                        color: "#ffffff",
                        text: label,
                      }}
                      position={{
                        lat: latitude,
                        lng: longitude,
                      }}
                    />
                  )
                })}
              </GoogleMap>
            </LoadScript>
          </div>
        </Box>

        <Box
          sx={{
            mt: [16, null, null, null, 0],
            pl: [0, null, null, null, 16],
            width: ["100%", null, null, null, "40%"],
          }}
        >
          {places.map(place => {
            const { description, label, title } = place.data
            return (
              <Flex
                key={label}
                sx={{
                  alignItems: "flex-start",
                  "&:not(:last-of-type)": {
                    borderBottom: theme => `1px dashed ${theme.colors.detail}`,
                    mb: 12,
                    pb: 12,
                  },
                }}
              >
                <Flex
                  sx={{
                    alignItems: "center",
                    bg: "#e94235",
                    borderRadius: "50%",
                    color: "textInvert",
                    flexShrink: 0,
                    fontSize: ["100%", null, null, "80%"],
                    height: 32,
                    mr: 4,
                    justifyContent: "center",
                    width: 32,
                  }}
                >
                  {label}
                </Flex>
                <Box>
                  <Styled.h3
                    sx={{
                      mt: -2,
                      mb: 0,
                    }}
                  >
                    {title}
                  </Styled.h3>
                  <p sx={{ m: 0 }}>{description}</p>
                </Box>
              </Flex>
            )
          })}
        </Box>
      </Flex>
    </section>
  )
}

export default Places
