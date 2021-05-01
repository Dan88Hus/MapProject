import axios from 'axios'

const PATH = "http://localhost:8000/api"

export const listAllCities = async () => {
  console.log("functions listAllCities")
  return await axios.get(`${PATH}/cities`)
}