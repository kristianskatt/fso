
import React from 'react'

const PersonForm = ({value, handleInputChange}) => (
    <div>
        filter shown with: <input 
        value = {value} // What text is shown in the text field.
        onChange = {handleInputChange} // What happens when a character is typed into the text field.
        />
    </div>
)


export default PersonForm