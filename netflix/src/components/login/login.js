import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { Form, Input, Button } from 'antd';
import { Netflix } from '../logo/logo';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/actions';

export const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setLoginState = (form) => dispatch(setCurrentUser(form));

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const submitData = { login: values.userId, password: values.password };
    setLoginState(submitData);
    navigate('/');
  };

  const onReset = () => {
    form.resetFields();
  };

  const validateMessages = { required: "'${name}' is required!" };

  return (
    <div className="loginContainer">
      <Netflix style={{ fontSize: '48px' }} />
      <div className="formLogin">
        <h1>LOG IN</h1>
        <Form
          form={form}
          name="basic"
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <label>USER ID*</label>
          <Form.Item
            name="userId"
            rules={[
              { required: true, message: 'Please input your username!' },
              { type: 'string', min: 3 },
            ]}
          >
            <Input />
          </Form.Item>

          <label>PASSWORD*</label>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password!' },
              { type: 'string', min: 6 },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 18 }}>
            <Button key="back" htmlType="button" className="buttonLogin" onClick={onReset}>
              RESET
            </Button>
            <Button type="primary" htmlType="submit" className="buttonLogin">
              LOG IN
            </Button>
          </Form.Item>
          <span style={{ color: '#fff' }}>*Mandatory</span>
        </Form>
      </div>
    </div>
  );
};
