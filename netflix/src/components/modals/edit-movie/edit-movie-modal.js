import React from 'react';
import './edit-movie-modal.css';

import { Modal, Button, Input, DatePicker, Select, InputNumber, Form } from 'antd';
import moment from 'moment';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const EditMovie = ({ message, movie, visible, setVisible }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const dispatch = useDispatch();
  const updateMovieAction = (form, callback) =>
    dispatch(moviesThunkActions.updateMovieThunk(form, callback));

  const handleCancel = (event) => {
    event.stopPropagation();
    setVisible(false);
  };

  const onFinish = (values) => {
    const callback = () => {
      setVisible(false);
      SuccessNotification(message);
    };
    const submitData = { ...values, release_date: values.release_date._d, id: movie.id };
    updateMovieAction(submitData, callback);
  };

  return (
    <Modal title="EDIT MOVIE" visible={visible} onCancel={handleCancel} footer={null}>
      <Form
        onFinish={onFinish}
        initialValues={{ ...movie, release_date: moment(movie.release_date, 'YYYY-MM-DD') }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="formContainer">
          <div className="column">
            <div className="item">
              <h3>TITLE</h3>
              <Form.Item name="title" rules={[{ required: true, message: 'Title is required.' }]}>
                <Input placeholder="Enter title" value={movie.title} />
              </Form.Item>
            </div>

            <div className="item">
              <h3>MOVIE URL</h3>
              <Form.Item
                name="poster_path"
                rules={[{ required: true, message: 'URL is required.' }]}
              >
                <Input placeholder="https://" value={movie.poster_path} />
              </Form.Item>
            </div>

            <div className="item">
              <h3>GENRE</h3>
              <Form.Item name="genres" rules={[{ required: true, message: 'Genre is required.' }]}>
                <Select
                  className="selectGenre"
                  mode="multiple"
                  placeholder="Select Genre"
                  value={movie.genres}
                >
                  {genres.map((item) => (
                    <Option key={item.key}>{item.category}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>

          <div className="column">
            <div className="item">
              <h3>RELEASE DATE</h3>
              <Form.Item
                name="release_date"
                rules={[{ required: true, message: 'Release date is required.' }]}
              >
                <DatePicker
                  placeholder="Select Date"
                  format="YYYY-MM-DD"
                  value={moment(movie.release_date, 'YYYY-MM-DD')}
                />
              </Form.Item>
            </div>

            <div className="item">
              <h3>RATING</h3>
              <Form.Item
                name="vote_average"
                rules={[{ required: true, message: 'Rating is required.' }]}
              >
                <InputNumber
                  className="numberInput"
                  min={0}
                  max={10}
                  placeholder="Enter rating"
                  controls={false}
                  value={movie.vote_average}
                />
              </Form.Item>
            </div>

            <div className="item">
              <h3>RUNTIME</h3>
              <Form.Item
                name="runtime"
                rules={[{ required: true, message: 'Runtime is required.' }]}
              >
                <InputNumber
                  className="numberInput"
                  placeholder="Enter minutes"
                  controls={false}
                  value={movie.runtime}
                />
              </Form.Item>
            </div>
          </div>
        </div>

        <h3>OVERVIEW</h3>
        <Form.Item name="overview" rules={[{ required: true, message: 'Overview is required.' }]}>
          <TextArea
            autoSize={{ minRows: 4, maxRows: 10 }}
            placeholder="Movie description"
            value={movie.overview}
          />
        </Form.Item>

        <Form.Item className="modalButtons">
          <Button key="back" onClick={handleCancel} className="resetButton">
            RESET
          </Button>
          <Button key="submit" type="primary" htmlType="submit">
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
