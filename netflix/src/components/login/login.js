import React from 'react';
import './login.css';
import { Form, Input, Button } from 'antd';
import { Netflix } from '../logo/logo';

export const LoginPage = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const validateMessages = {
    required: "'${name}' is required!",
  };

  return (
    <div className="loginContainer">
      <div className="formLogin">
        <h1>LOG IN</h1>
        <Form
          name="basic"
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          validateMessages={validateMessages}
        >
          <label>USER ID*</label>
          <Form.Item
            name="userId"
            rules={[
              { required: true, message: 'Please input your username!' },
              { type: 'username', warningOnly: true },
              { type: 'string', min: 6 },
            ]}
          >
            <Input />
          </Form.Item>

          <label>PASSWORD*</label>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { type: 'password', warningOnly: true },
              { type: 'string', min: 6 },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
            <Button key="back" className="buttonLogin">
              RESET
            </Button>
            <Button type="primary" htmlType="submit" className="buttonLogin">
              LOG IN
            </Button>
          </Form.Item>
          <span style={{ color: '#fff' }}>*Mandatory</span>
        </Form>
      </div>
      <Netflix style={{ marginTop: '60px', fontSize: '48px' }} />
    </div>
  );
};
