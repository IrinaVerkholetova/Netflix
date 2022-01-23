import React from 'react';
import './edit-movie-modal.css';
import { Modal, Button, Input, DatePicker, Rate, Select } from 'antd';
import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const EditMovie = ({ message, visible, setVisible }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const handleOk = () => {
    setTimeout(() => {
      setVisible(false);
      SuccessNotification(message);
    }, 2000);
  };
  const handleCancel = () => setVisible(false);

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <Modal
      title="EDIT MOVIE"
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
              {genres.map((item, index) => (
                <Option key={index}>{item.toLocaleLowerCase()}</Option>
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
  );
};
