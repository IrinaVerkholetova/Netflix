import React from 'react';
import './back-top.css';
import { BackTop } from 'antd';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

const BackTopComponent = () => {
  return (
    <BackTop>
      <div className="backTop">
        <VerticalAlignTopOutlined />
      </div>
    </BackTop>
  );
};

export default BackTopComponent;
