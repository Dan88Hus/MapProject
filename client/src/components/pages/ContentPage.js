import React, {useState, useEffect} from 'react'
import { Row, Col, Divider } from 'antd';
import CityDropdown from './CityDropdown'
import CountyDropdown from './CountyDropdown'
import {listAllCities} from '../../functions/Cities'


const ContentPage = () => {

  const [cities,setCities] = useState([])


  useEffect(()=>{
    loadAllCities()
  },[])

  const loadAllCities = async () => {
    const allFetchedCities = await listAllCities()
    setCities(allFetchedCities)
    console.log("all cities",cities)
  }

  return (
    <div>
       <Divider orientation="left">Please Select City</Divider>
    <Row>
      <Col span={6} order={3}>
        <CityDropdown/>
        {JSON.stringify(cities, null ,4)}
      </Col>

      <Col span={6} order={3}>
        <CountyDropdown/>
      </Col>
    </Row>
    </div>
  )
}

export default ContentPage
