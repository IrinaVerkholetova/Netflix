import React, { useState } from 'react';
import './add-movie-modal.css';
import { Modal, Button, Input, DatePicker, Rate, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { categories } from './../../const';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const AddMovie = ({ netflix }) => {
  const [visible, setVisible] = useState(false);

  const { TextArea } = Input;
  const { Option } = Select;

  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
      SuccessNotification();
    }, 2000);
  };
  const handleCancel = () => setVisible(false);

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <div className="header">
      {netflix}
      <button className="addMovie" onClick={() => setVisible(true)}>
        <PlusOutlined /> ADD MOVIE
      </button>
      <Modal
        title="ADD MOVIE"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            RESET
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            SUBMIT
          </Button>,
        ]}
      >
        <div className="formContainer">
          <div className="column">
            <div className="item">
              <h3>TITLE</h3>
              <Input placeholder="Enter title" />
            </div>
            <div className="item">
              <h3>MOVIE URL</h3>
              <Input placeholder="https://" />
            </div>
            <div className="item">
              <h3>GENRE</h3>
              <Select
                className="selectGenre"
                mode="multiple"
                placeholder="Select Genre"
                onChange={handleChange}
              >
                {categories.map((item) => (
                  <Option key={item.key}>{item.category.toLocaleLowerCase()}</Option>
                ))}
              </Select>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <h3>RELEASE DATE</h3>
              <DatePicker placeholder={'Select Date'} format={'DD.MM.YYYY'} />
            </div>
            <div className="item">
              <h3>RATING</h3>
              <Rate allowHalf defaultValue={0} />
            </div>
            <div className="item">
              <h3>RUNTIME</h3>
              <Input placeholder="minutes" />
            </div>
          </div>
        </div>

        <h3>OVERVIEW</h3>
        <TextArea rows={4} placeholder="Movie description" />
      </Modal>
    </div>
  );
};
