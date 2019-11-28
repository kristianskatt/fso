import React from 'react'
import ReactDOM from 'react-dom'


// Testing
const test = {
    u: 0,
    v: 1,
    funk: (a,b) => a+b,
    funk2: (a,b) => {
        return a-b
    }
}
console.log(test.funk(1,2))


const Header = (props) => {
    return <h1>{props.course.name}</h1>
}

const Content = (props) => {
    const parts = props.course.parts // Testing use of variable.
    return (
        <div>
            <Part part = {parts[0]}/>
            <Part part = {parts[1]}/>
            <Part part = {parts[2]}/>
        </div>
    )
}

const Part = (props) => {
    return <p>{props.part.name} {props.part.exercises}</p> 
}

const Total = (props) => {
    return <p>Number of exercises {props.course.parts.map(part => part.exercises).reduce((a,b) => a+b)}</p>
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
    
  return (
      <div>
          <Header course = {course}/>
          <Content course = {course}/>
          <Total course = {course}/>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
