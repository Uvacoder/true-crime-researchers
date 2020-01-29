/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Person from "components/person"

const Persons = ({ persons }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          mb: 24,
          mt: 0,
          textAlign: ["left", null, null, null, "center"],
        }}
      >
        Persons of Interest
      </Styled.h2>
      <Flex as="article" sx={{ flexWrap: "wrap", justifyContent: "center" }}>
        {persons.map(person => (
          <Person key={person.data.name} person={person}></Person>
        ))}
      </Flex>
    </section>
  )
}

export default Persons
