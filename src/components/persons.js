/** @jsx jsx */
import { Flex, jsx, Styled } from "theme-ui"

import Person from "components/person"

const Persons = ({ persons }) => {
  return (
    <section sx={{ p: [16, 16, 24] }}>
      <Styled.h2
        sx={{
          fontSize: "calc(3vw + 3vh + 2.5vmin)",
          lineHeight: "single",
          mb: 16,
          mt: 0,
          textAlign: ["left", null, null, null, "center"],
        }}
      >
        Persons of Interest
      </Styled.h2>
      <Flex
        sx={{
          flexWrap: "wrap",
        }}
      >
        {persons.map(person => (
          <Person key={person.data.name} person={person}></Person>
        ))}
      </Flex>
    </section>
  )
}

export default Persons
