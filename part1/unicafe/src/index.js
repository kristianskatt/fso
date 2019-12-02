import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = ({text,value}) => (
    <tr><td>{text}</td><td>{value}</td></tr>
)

const Statistics = ({good,neutral,bad}) => {
    const all = good+neutral+bad
    const average = (good-bad)/all
    const positive = good/all
    const content = (all===0)
      ? 'No feedback given'
      :
      <table>
        <tbody>
        <Statistic text='good' value={good}/>
        <Statistic text='neutral' value={neutral}/>
        <Statistic text='bad' value={bad}/>
        <Statistic text='all' value={all}/>
        <Statistic text='average' value={average}/>
        <Statistic text='positive' value={positive}/>
        </tbody>
      </table>
    return(
        <div>
            <h1>statistics</h1>
            {content}
        </div>
    )
}

const Button = ({text, onClick}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
        <h1>give feedback</h1>
        <Button text='good' onClick={()=>setGood(good+1)}/>
        <Button text='neutral' onClick={()=>setNeutral(neutral+1)}/>
        <Button text='bad' onClick={()=>setBad(bad+1)}/>
        <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)
