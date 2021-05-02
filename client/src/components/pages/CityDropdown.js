import React, {useState, useEffect} from 'react'
import { Row, Col } from 'antd';
import {listAllCities} from '../../functions/Cities'
import {countyList} from '../../functions/County'
import CoordinatesInput from './CoordinatesInput'
import FindClosest from './FindClosest'


// import { DownOutlined } from '@ant-design/icons';
// import { Menu, Dropdown } from 'antd';
// import {Link} from 'react-router-dom'


import { Select } from 'antd';

const { Option } = Select;





const CityDropdown = () => {

const [selectedCity,setSelectedCity] = useState()
const [selectedCounty,setSelectedCounty] = useState()
const [commitCounty,setCommitCounty] = useState([])
const [loading,setLoading] = useState(false)

const [cities,setCities] = useState([])



useEffect(()=>{
  loadAllCities()
},[])

const loadAllCities = async () => {
  const allFetchedCities = await listAllCities()
  .then((res) => {
    console.log("allFetchedCities", res.data)
    setCities(res.data)
    console.log("all cities",cities)
  })
  
}

const onChange = async (value) => {
  console.log(`selected city ${value}`);
  setSelectedCity(value)
  setLoading(true)
  const selectAbleCountyList = await countyList(value)
  .then((res)=>{
    console.log("CountyListRESPONSE",res.data)
    setSelectedCounty(res.data)
  })
}

const onCountyChange = async (value) => {
  console.log(`selected county ${value}`);
  setCommitCounty(value)
  setLoading(true)
  console.log("commitCounty", commitCounty)
}

function onBlur(value) {
  console.log('blur value', value);
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


// useEffect(()=>{

// })

  return (
    <>
    <Row>
    <Col span={6} order={3}>

    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select City"
    optionFilterProp="children"
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
  {cities.map((c)=>( 
      <Option key={c._id} value={c.city}>{c.city}</Option>
    )
    )}
  </Select>
  </Col>

  <Col span={6} order={4}>
  {loading && (
    <Select
    showSearch
    style={{ width: 200 }}
    placeholder="Select County"
    optionFilterProp="children"
    onChange={onCountyChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onSearch={onSearch}
    // filterOption={(input, option) =>
    //   option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    // }
  >
    {selectedCounty && selectedCounty.map((co)=>( 
      <Option key={co._id} value={co.county}>{co.county}</Option>
    )
    )}
  </Select>
  )}
  </Col>


  <Col span={4} order={5}>
    
  <CoordinatesInput/>
 
  </Col>


  <Col span={1} order={5}>
    
  <FindClosest/>
 
  </Col>

  

  </Row>
  {/* selectableCounty
  {JSON.stringify(selectedCounty,null,4)}
  <br></br>
  commitCounty
  {JSON.stringify(commitCounty,null,4)} */}

    </>
  )
}

export default CityDropdown


