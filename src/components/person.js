import React from "react"
import Img from "gatsby-image"

const Person = ({ person }) => {
  const { description, name, personPhoto, sex } = person.data
  console.log(personPhoto.localFiles[0].childImageSharp.fixed)
  return (
    <article>
      <Img
        alt="{firstName} {lastName}"
        fixed={personPhoto.localFiles[0].childImageSharp.fixed}
        width={150}
      />
      <span>{sex}</span>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Person
