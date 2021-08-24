import axios from 'axios'
const baseUrl = 'http://localhost:5000/api/notes'

const postService = async (posta, header) => {
  const headers = {
    'x-auth-token': header,
  }

  const response = await axios.post(baseUrl, posta, {
    headers: headers,
  })
  console.log(response.data)
  //{token:"ksdlskds"}
  return response.data
}
const getPostService = async () => {
  const response = await axios.get(baseUrl)
  //{token:"ksdlskds"}
  return response.data
}
const exporta = { postService, getPostService }
export default exporta
