/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import Layout from "components/layout"
import SEO from "components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <section
        sx={{
          mb: 0,
          mr: 1,
          ml: 2,
          mt: 3,
        }}
      >
        <Styled.h1>HTML Ipsum Presents</Styled.h1>

        <p>
          <Styled.strong>Pellentesque habitant morbi tristique</Styled.strong>{" "}
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.{" "}
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
          wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui.{" "}
          <Styled.a href="#">Donec non enim</Styled.a> in turpis pulvinar
          facilisis. Ut felis.
        </p>

        <Styled.h2
          css={{ fontSize: "8vw", lineHeight: "1", marginBottom: "1rem" }}
        >
          Timeline
        </Styled.h2>

        <ol>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ol>

        <blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
            molestie gravida. Curabitur massa. Donec eleifend, libero at
            sagittis mollis, tellus est malesuada tellus, at luctus turpis elit
            sit amet quam. Vivamus pretium ornare est.
          </p>
        </blockquote>

        <Styled.h3>Header Level 3</Styled.h3>

        <ul>
          <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
          <li>Aliquam tincidunt mauris eu risus.</li>
        </ul>

        <Styled.h4>Header Level 4</Styled.h4>

        <p>
          <Styled.strong>Pellentesque habitant morbi tristique</Styled.strong>{" "}
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.{" "}
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
          wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,
          wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
          rutrum orci, sagittis tempus lacus enim ac dui.{" "}
          <Styled.a href="#">Donec non enim</Styled.a> in turpis pulvinar
          facilisis. Ut felis.
        </p>

        <Styled.h5>Header Level 5</Styled.h5>

        <p>
          <Styled.strong>Pellentesque habitant morbi tristique</Styled.strong>{" "}
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.{" "}
          <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo.
          Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
          wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,
          wisi.
        </p>

        <Styled.h6>Header Level 6</Styled.h6>

        <p>
          <Styled.strong>Pellentesque habitant morbi tristique</Styled.strong>{" "}
          senectus et netus et malesuada fames ac turpis egestas. Vestibulum
          tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
          Donec eu libero sit amet quam egestas semper.
        </p>

        <article>
          <Styled.a href="#">
            <Styled.h3>34 - Emma Fillipoff - Part 5, Mikaela</Styled.h3>
          </Styled.a>

          <ul>
            <li>
              <Styled.a href="https://www.nighttimepodcast.com/episodes/emmafillipoff5">
                URL
              </Styled.a>
            </li>
            <li>
              <Styled.a href="http://www.stitcher.com/podcast/boneparty/the-night-time-podcast/e/34-emma-fillipoff-part-5-mikaela-49451104">
                Stitcher
              </Styled.a>
            </li>
            <li>
              <Styled.a href="https://itunes.apple.com/us/podcast/34-emma-fillipoff-part-5-mikaela/id1054220508?i=1000382676659&amp;mt=2">
                iTunes
              </Styled.a>
            </li>
            <li>The Night Time Podcast</li>
            <li>44</li>
          </ul>
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
