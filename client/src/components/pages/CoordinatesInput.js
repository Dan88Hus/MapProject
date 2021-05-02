import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



const CoordinatesInput = () => {
  const [form] = Form.useForm();
  const [forceUpdate, setForceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    setForceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
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
      
    </div>
  )
}

export default CoordinatesInput
