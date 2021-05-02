import axios from 'axios'

const PATH = "http://localhost:8000/api"

//this func will be used to slice and filter based user input coordinates
export const closest = async (splittedLatCor,splittedLonCor) => {
  console.log("functionsClosest splittedLatCor", splittedLatCor)
  console.log("functionsClosest splittedLonCor", splittedLonCor)
  // console.log("functionsClosest splittedCoordinates", splittedCoordinates)


  return await axios.post(`${PATH}/closest`, {splittedLatCor,splittedLonCor} )
}