import React from 'react';
import PropTypes from 'prop-types';
import './custom-modal-form.css';

import { Modal, Button, Input, DatePicker, Select, InputNumber, Form } from 'antd';

import { useDispatch } from 'react-redux';

import { genres } from '../../../helper/constants/categories';
import { Notification, StatusTypes } from '../notification/notification';

export const CustomModalForm = ({
  action,
  message,
  title,
  initialValues,
  movie = null,
  visible,
  setVisible,
}) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const dispatch = useDispatch();
  const dispatchAction = (form, callback) => dispatch(action(form, callback));

  const [form] = Form.useForm();

  const handleCancel = (event) => {
    event.stopPropagation();
    setVisible(false);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    const callback = () => {
      setVisible(false);
      Notification(message, StatusTypes.SUCCESS);
    };
    const submitData = title.includes('EDIT')
      ? { ...values, release_date: values.release_date._d, id: movie?.id }
      : { ...values, release_date: values.release_date._d };
    dispatchAction(submitData, callback);
  };

  return (
    <Modal title={title} visible={visible} onCancel={handleCancel} footer={null}>
      <Form form={form} name="basic" onFinish={onFinish} initialValues={initialValues}>
        <div className="formContainer">
          <div className="row">
            <div className="item">
              <label htmlFor="title" required>
                TITLE
              </label>
              <Form.Item name="title" rules={[{ required: true, message: 'Title is required.' }]}>
                <Input placeholder="Enter title" />
              </Form.Item>
            </div>

            <div className="item">
              <label>RELEASE DATE</label>
              <Form.Item
                name="release_date"
                rules={[{ required: true, message: 'Release date is required.' }]}
              >
                <DatePicker placeholder="Select Date" format={'YYYY-MM-DD'} />
              </Form.Item>
            </div>
          </div>

          <div className="row">
            <div className="item">
              <label>MOVIE URL</label>
              <Form.Item
                name="poster_path"
                rules={[{ required: true, message: 'URL is required.' }]}
              >
                <Input placeholder="https://" />
              </Form.Item>
            </div>
            <div className="item">
              <label>RATING</label>
              <Form.Item
                name="vote_average"
                rules={[{ required: true, message: 'Rating is required.' }]}
              >
                <InputNumber min={0} max={10} placeholder="Enter rating" controls={false} />
              </Form.Item>
            </div>
          </div>
          <div className="row">
            <div className="item">
              <label>GENRE</label>
              <Form.Item name="genres" rules={[{ required: true, message: 'Genre is required.' }]}>
                <Select className="selectGenre" mode="multiple" placeholder="Select Genre">
                  {genres.map((item) => (
                    <Option key={item.key}>{item.category}</Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="item">
              <label>RUNTIME</label>
              <Form.Item
                name="runtime"
                rules={[{ required: true, message: 'Runtime is required.' }]}
              >
                <InputNumber className="numberInput" placeholder="Enter minutes" controls={false} />
              </Form.Item>
            </div>
          </div>
        </div>

        <label>OVERVIEW</label>
        <Form.Item name="overview" rules={[{ required: true, message: 'Overview is required.' }]}>
          <TextArea autoSize={{ minRows: 4, maxRows: 10 }} placeholder="Movie description" />
        </Form.Item>

        <Form.Item className="modalButtons">
          <Button key="reset" htmlType="button" onClick={onReset} className="resetButton">
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

CustomModalForm.propTypes = {
  action: PropTypes.func,
  message: PropTypes.string,
  title: PropTypes.string,
  initialValues: PropTypes.object,
  movie: PropTypes.object || PropTypes.null,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};
