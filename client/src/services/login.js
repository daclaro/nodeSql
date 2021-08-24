import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/auth'

const login = async (credentials) => {
  const response = await axios.post(baseUrl, credentials)
  console.log('response')
  return response.data
}

export default login