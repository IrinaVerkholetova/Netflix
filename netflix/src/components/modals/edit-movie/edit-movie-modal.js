import React from 'react';
import './edit-movie-modal.css';
import { Modal, Button, Input, DatePicker, Select, Slider, InputNumber, Row, Col } from 'antd';
import moment from 'moment';
import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const EditMovie = ({ message, movie, visible, setVisible }) => {
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
            <Input
              placeholder="Enter title"
              value={movie.title}
              onChange={(event, value) => {
                event.stopPropagation();
              }}
            />
          </div>
          <div className="item">
            <h3>MOVIE URL</h3>
            <Input placeholder="https://" value={movie.poster_path} />
          </div>
          <div className="item">
            <h3>GENRE</h3>
            <Select
              className="selectGenre"
              mode="multiple"
              placeholder="Select Genre"
              value={movie.genres}
              onChange={handleChange}
            >
              {genres.map((item) => (
                <Option key={item.key}>{item.category}</Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="column">
          <div className="item">
            <h3>RELEASE DATE</h3>
            <DatePicker
              placeholder={'Select Date'}
              format={'YYYY-MM-DD'}
              value={moment(movie.release_date, 'YYYY-MM-DD')}
            />
          </div>
          <div className="item">
            <h3>RATING</h3>
            <Row>
              <Col span={12}>
                <Slider
                  min={0}
                  max={10}
                  // onChange={onChange}
                  value={movie.vote_average}
                />
              </Col>
              <Col span={4}>
                <InputNumber
                  min={0}
                  max={10}
                  style={{ margin: '0 16px' }}
                  value={movie.vote_average}
                  // onChange={onChange}
                />
              </Col>
            </Row>
          </div>
          <div className="item">
            <h3>RUNTIME</h3>
            <Input placeholder="minutes" value={movie.runtime} />
          </div>
        </div>
      </div>
      <h3>OVERVIEW</h3>
      <TextArea
        autoSize={{ minRows: 4, maxRows: 10 }}
        placeholder="Movie description"
        value={movie.overview}
      />
    </Modal>
  );
};
