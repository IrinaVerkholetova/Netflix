import React from 'react';
import './add-movie-modal.css';
import { useForm, Controller } from 'react-hook-form';
import { Modal, Button, Input, DatePicker, Rate, Select } from 'antd';
import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const AddMovie = ({ message, visible, setVisible }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const defaultValues = {
    title: '',
    movieUrl: '',
    genre: null,
    releaseDate: new Date(),
    rating: 0,
    runtime: 0,
    overview: '',
  };

  const {
    handleSubmit,
    control,
    setValue,
    // formState: { errors, isDirty, isValid },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (form) => {
    console.log('form', form);
    handleOk();
  };

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        title="ADD MOVIE"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            RESET
          </Button>,
          <Button type="primary" onClick={onSubmit}>
            SUBMIT
          </Button>,
        ]}
      >
        <div className="formContainer">
          <div className="column">
            <div className="item">
              <h3>TITLE</h3>
              <Controller
                name="title"
                control={control}
                rules={{
                  required: true,
                  message: 'This input is number only.',
                }}
                render={() => (
                  <Input
                    placeholder="Enter title"
                    onChange={(value) => {
                      setValue('title', value, { shouldValidate: true, shouldDirty: true });
                    }}
                  />
                )}
              />
              {/* {errors.title?.type === 'required' && 'Title is required'} */}
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
                {genres.map((item) => (
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
        <TextArea rows={6} placeholder="Movie description" />
      </Modal>
    </form>
  );
};
