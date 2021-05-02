import React, {useState, useEffect} from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const { Search } = Input;

const CoordinatesInput = () => {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const Demo = () => {
    const onFinish = (values: any) => {
      console.log('Success:', values);
  }}

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  
  const [inputCoorLat, setInputCoorlat] = useState()
  const [inputCoorLon, setInputCoorLon] = useState()


  const onSearch = value => {
    // console.log(value)
    let coordinates = value.split(',')
    let coorLat = coordinates[0]
    let coorLon = coordinates[1]
    // console.log(coorLon)
    setInputCoorlat(coorLat)
    setInputCoorLon(coorLon)

  };

  return (
    <>
    <Search placeholder="xx.xx,yy.yy" allowClear onSearch={onSearch} style={{ width: 200 }} />

    
    </>

  )
}

export default CoordinatesInput
