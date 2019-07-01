import React from "react"

const Person = ({ person }) => {
  const { description, name, personPhoto, sex } = person.data
  return (
    <article>
      <img
        alt="{firstName} {lastName}"
        src={personPhoto[0].thumbnails.full.url}
        width={150}
      />
      <span>{sex}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Person
