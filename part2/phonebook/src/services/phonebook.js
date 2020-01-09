import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons/'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const addPerson = newPerson => {
    return axios.post(baseUrl, newPerson).then(response => response.data)
}

const removePerson = (id) => {
    axios.delete(`${baseUrl}${id}`)
}

const updatePerson = person => {
    return axios.put(baseUrl, person).then(response => response.data)
}

export default {
    getAll,
    addPerson,
    removePerson,
    updatePerson
}