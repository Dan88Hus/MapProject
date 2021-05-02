import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {closest} from '../../functions/SliceFilter'




const CoordinatesInput = () => {
  const [form] = Form.useForm();
  const [forceUpdate, setForceUpdate] = useState({}); // To disable submit button at the beginning.
  const [commitSplittedLatCor, setCommitSplittedLatCor] = useState()
  const [commitSplittedLonCor, setCommitSplittedLonCor] = useState()

  useEffect(() => {
    setForceUpdate({});
  }, []);

  const onFinish = async (values) => {
    console.log('Finish:', values);
    let splittedCoordinates = values.Coordinates.split(',')
    console.log(splittedCoordinates)
    let splittedLatCor = splittedCoordinates[0] 
    let splittedLonCor = splittedCoordinates[1]
    // console.log(splittedLonCor)
    setCommitSplittedLatCor(splittedLatCor)
    setCommitSplittedLonCor(splittedLonCor)
    localStorage.setItem('UserLat', splittedCoordinates[0] );
    localStorage.setItem('UserLon', splittedCoordinates[1]);
    await closest(splittedCoordinates[0], splittedCoordinates[1])
    .then((res)=>{
      console.log("CoordinatesInput RES", res.data)
    })

  };



  return (
    <div>
      <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
      <Form.Item
        name="Coordinates"
        rules={[
          {
            required: true,
            message: 'Please input your coordinates!',
          },
        ]}
      >
        <Input placeholder="xx.xx,yy.yy" 
        // prefix={<UserOutlined className="site-form-item-icon" />}
        />
      </Form.Item>
      <br></br>
      
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Find Closest Places
          </Button>
        )}
      </Form.Item>
    </Form>

    User input Lat: {commitSplittedLatCor} 
    <br></br>
    User input Lon: {commitSplittedLonCor}
  
      
    </div>
  )
}

export default CoordinatesInput
