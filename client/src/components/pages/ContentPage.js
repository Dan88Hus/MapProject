import React, {useState, useEffect} from 'react'
import { Divider } from 'antd';
import CityDropdown from './CityDropdown'
// import CountyDropdown from './CountyDropdown'


const ContentPage = () => {
  
  return (
    <div className="container-fluid">
    <Divider orientation="left"></Divider>

    <CityDropdown/>

    </div>
  )
}

export default ContentPage
