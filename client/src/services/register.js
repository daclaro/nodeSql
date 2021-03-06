import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/users'

const register = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log(`response data is ${response.data}`)
  return response.data
}

export default register
