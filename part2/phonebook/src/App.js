import React, { useState, useEffect } from 'react'
import pbService from './services/phonebook'



const Person = ({person, remove}) => (
  <div>{person.name} {person.number}
    <button onClick = {remove}>delete</button>
  </div>
)

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)

  useEffect(() => {
    pbService
    .getAll()
    .then(persons => setPersons(persons))
  }, [])

  const removePerson = id => {
    if (window.confirm(`Delete ${persons.find(p => p.id === id).name}?`)) {
      pbService.removePerson(id)
      setPersons(persons.filter(p => p.id !== id))
    }
  }

  const numbers = () => {
    const p = persons.map(p =>
      <Person
        key = {p.id}
        person = {p} 
        remove = {() => removePerson(p.id)}/>)
      console.log(p)
    return(p)
  }

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const showNotification = (message, duration=5000) => {
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage(null)
    }, duration)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(persons.findIndex(p => p.name === newName) >= 0) {
      alert(`${newName} is already added to phonebook`)
    } else {
      console.log(newPerson)
      pbService
      .addPerson(newPerson)
      .then(person => setPersons(persons.concat(person)))
      setNewName('')
      setNewNumber('')
      showNotification(`Added ${newName}`)
    }
  }

  const Notification = ({message}) => {
    if (message == null) {
      return null
    }
    return (
      <div className="notification">{message}</div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message = {notificationMessage}/>
      <form onSubmit = {addPerson}>
        <div>
          name: <input 
          value = {newName} // What text is shown in the text field.
          onChange = {handleInputChange} // What happens when a character is typed into the text field.
          />
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange = {handleNumberChange}
          /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{numbers()}</div>
    </div>
  )
}

export default App
