import axios from 'axios'

const PATH = "http://localhost:8000/api"

//this req is used for listiong all cities at the starting stage
export const listAllCities = async () => {
  console.log("functions listAllCities")
  return await axios.get(`${PATH}/cities`)
}