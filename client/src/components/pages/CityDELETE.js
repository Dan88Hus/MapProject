import React, {useState, useEffect} from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import {Link} from 'react-router-dom'


const CityDropdown = ({cities}) => {

const [selectedCity,setSelectedCity] = useState()

useEffect(()=>{

})



  const handleClickId = (c) => {
    // console.log("clicked city", c)
    setSelectedCity(c)
    // console.log("selectedCityyy",c.city)
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        {cities.map((c)=>( 
          <Link key={c._id} value={c.city}
          onClick={()=> handleClickId(c)}
          
          >{c.city}
          </Link>
        ))}
      </Menu.Item>
    </Menu>
  );

  return (
    <>
    <div>
    <Dropdown overlay={menu} trigger={['click']}>
    <a href="#" className="ant-dropdown-link" onClick={e => {e.preventDefault()
    console.log("whta")}}
    >
    Please Select City <DownOutlined />
    </a>
  </Dropdown>
  {JSON.stringify(selectedCity, null ,4)}
    </div>
    <div>

    </div>
    </>
  )
}

export default CityDropdown
