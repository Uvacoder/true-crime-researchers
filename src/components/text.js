/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import IconArticle from "images/icons/article.svg"
import IconBook from "images/icons/book.svg"
import IconForum from "images/icons/forum.svg"
import IconWebsite from "images/icons/website.svg"

const Text = ({ text }) => {
  const { sourceName, title, type, url } = text.data

  const iconMap = type => {
    switch (type) {
      case "Post":
        return IconArticle
      case "Book":
        return IconBook
      case "Forum":
        return IconForum
      case "Website":
        return IconWebsite
      default:
        return null
    }
  }

  return (
    <article
      sx={{
        bg: "background",
        borderLeft: theme => `3px solid ${theme.colors.open}`,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
        padding: 8,
        mt: 12,
        textAlign: "left",
      }}
    >
      <span
        sx={{
          alignItems: "center",
          color: "mute",
          display: "flex",
          fontSize: "75%",
        }}
      >
        <img
          alt={`Icon of a ${type}`}
          src={iconMap(type)}
          sx={{ mr: 4 }}
          width={20}
        />{" "}
        {sourceName}
      </span>

      <Styled.a href={url}>
        <Styled.h3 sx={{ mb: 3, mt: 0 }}>{title}</Styled.h3>
      </Styled.a>
    </article>
  )
}

export default Text
