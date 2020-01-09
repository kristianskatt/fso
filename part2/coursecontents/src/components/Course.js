
import React from 'react'

const Header = props =>
  <h1>{props.course}</h1>

const Total = ({parts}) => {
  const sum = parts.map(p => p.exercises).reduce((e1,e2)=>e1+e2);
  //const total = parts.reduce((p1, p2) => p1.exercises + p2.exercises) does not work, the elements need to be numbers I think!
  return <p>yhteensä {sum} tehtävää</p>
}

const Part = props =>
  <p>{props.part.name} {props.part.exercises}</p>

const Content = ({parts}) => (
  <div>{parts.map(part => <Part part = {part} />)}</div>
)

const Course = ({course}) => {
    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )
}

export default Course