import axios from 'axios'

const PATH = "http://localhost:8000/api"

//this func will be used to filter county based on selected city
export const countyList = async (selectedCity) => {
  console.log("functionsCounty selectedCityId", selectedCity)
  return await axios.post(`${PATH}/counties`, {selectedCity})
}