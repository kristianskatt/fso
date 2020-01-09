import React, { useState, useEffect } from 'react'
import pbService from './services/phonebook'
import PersonForm from './components/PersonForm'
import AllPersons from './components/AllPersons'
import PersonFilter from './components/PersonFilter'
import Notification from './components/Notification'


const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)
  const [ filter, setFilter] = useState('')

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

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    const value = event.target.value
    setFilter(value)
    pbService
    .getAll()
    .then(allPersons => {
      setPersons(allPersons.filter(person => person.name.toLowerCase().startsWith(value.toLowerCase())))
    })
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
      if(window.confirm(`${newPerson.name} is already in the phonebook, do you want to replace the older number with a new one?`)) {
        pbService.updatePerson(newPerson).then(person => setPersons(persons.filter(p => p.name !== newName).concat(person)))
        showNotification(`Changed the number of ${newName} to ${newNumber}`)
      }
    } else {
      console.log(newPerson)
      pbService
      .addPerson(newPerson)
      .then(person => setPersons(persons.concat(person)))
      showNotification(`Added ${newName}`)
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonFilter 
      value = {filter}
      handleInputChange = {handleFilterChange}
      />
      <h3>Add person</h3>
      <Notification message = {notificationMessage}/>
      <PersonForm 
      addPerson = {addPerson}
      newName = {newName} 
      handleInputChange = {handleInputChange}
      newNumber = {newNumber}
      handleNumberChange = {handleNumberChange}
      />
      <h3>Numbers</h3>
      <AllPersons
      persons = {persons}
      removePerson = {removePerson}
      />
    </div>
  )
}

export default App
