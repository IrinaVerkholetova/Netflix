import React from 'react';
import './add-movie-modal.css';

import { Modal, Button, Input, DatePicker, Select, InputNumber, Form } from 'antd';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const AddMovie = ({ message, visible, setVisible }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const dispatch = useDispatch();
  const addMovieAction = (form, callback) =>
    dispatch(moviesThunkActions.addMovieThunk(form, callback));

  const defaultValues = {
    // title: 'La La Land',
    // vote_average: 7.9,
    // release_date: "2016-12-29",
    // poster_path: 'https://2.bp.blogspot.com/-mmN8FiPcWDc/WWCUELUuZzI/AAAAAAAAAGQ/ztsHb0INa1cp6JgxvG6KBxwmjtN09oLcgCLcBGAs/s1600/POSTER.jpg',
    // overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    // runtime: 128,
    // genres: [],

    title: '',
    vote_average: null,
    release_date: '',
    poster_path: '',
    overview: '',
    runtime: null,
    genres: [],
  };

  const handleCancel = () => setVisible(false);

  const onFinish = (values) => {
    const callback = () => {
      setVisible(false);
      SuccessNotification(message);
    };
    addMovieAction({ ...values, release_date: values.release_date._d }, callback);
  };

  return (
    <Modal title="ADD MOVIE" visible={visible} onCancel={handleCancel} footer={null}>
      <Form onFinish={onFinish} initialValues={defaultValues}>
        <div className="formContainer">
          <div className="column">
            <div className="item">
              <h3 htmlFor="title" required>
                TITLE
              </h3>
              <Form.Item name="title" rules={[{ required: true, message: 'Title is required.' }]}>
                <Input placeholder="Enter title" />
              </Form.Item>
            </div>

            <div className="item">
              <h3>MOVIE URL</h3>
              <Form.Item
                name="poster_path"
                rules={[{ required: true, message: 'URL is required.' }]}
              >
                <Input placeholder="https://" />
              </Form.Item>
            </div>

            <div className="item">
              <h3>GENRE</h3>
              <Form.Item name="genres" rules={[{ required: true, message: 'Genre is required.' }]}>
                <Select className="selectGenre" mode="multiple" placeholder="Select Genre">
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
                <DatePicker placeholder="Select Date" format={'YYYY-MM-DD'} />
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
                />
              </Form.Item>
            </div>

            <div className="item">
              <h3>RUNTIME</h3>
              <Form.Item
                name="runtime"
                rules={[{ required: true, message: 'Runtime is required.' }]}
              >
                <InputNumber className="numberInput" placeholder="Enter minutes" controls={false} />
              </Form.Item>
            </div>
          </div>
        </div>

        <h3>OVERVIEW</h3>
        <Form.Item name="overview" rules={[{ required: true, message: 'Overview is required.' }]}>
          <TextArea autoSize={{ minRows: 4, maxRows: 10 }} placeholder="Movie description" />
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
