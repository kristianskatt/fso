import React from 'react'
import Person from './Person'

const AllPersons = ({persons, removePerson}) => (
    persons.map(p =>
        <Person
          key = {p.id}
          person = {p} 
          remove = {() => removePerson(p.id)}/>)
)

export default AllPersons