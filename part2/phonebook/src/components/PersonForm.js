
import React from 'react'

const PersonForm = ({addPerson, newName, handleInputChange, newNumber, handleNumberChange}) => (
    <div><form onSubmit = {addPerson}>
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
    </form></div>
)


export default PersonForm