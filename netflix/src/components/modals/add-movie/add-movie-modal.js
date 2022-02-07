import React from 'react';
import './add-movie-modal.css';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Modal, Button, Input, DatePicker, Select, Slider, InputNumber, Row, Col } from 'antd';
import moment from 'moment';
import ToolServices from '../../../helper/tool-services';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';

const customResolver = (values) => {
  const errors = {};
  if (!values.title.length) {
    errors.title = { type: 'required', message: 'Title is required.' };
  }
  if (!values.vote_average) {
    errors.vote_average = { type: 'required', message: 'Rating is required.' };
  }
  if (!values.release_date) {
    errors.release_date = { type: 'required', message: 'Release date is required.' };
  }
  if (!values.poster_path) {
    errors.poster_path = { type: 'required', message: 'URL is required.' };
  }
  if (!values.overview) {
    errors.overview = { type: 'required', message: 'Overview is required.' };
  }
  if (!values.genres.length) {
    errors.genres = { type: 'required', message: 'Genre is required.' };
  }
  return {
    values,
    errors,
  };
};

export const AddMovie = ({ message, visible, setVisible }) => {
  const { TextArea } = Input;
  const { Option } = Select;

  const dispatch = useDispatch();
  const addMovieAction = (form, callback) =>
    dispatch(moviesThunkActions.addMovieThunk(form, callback));

  const defaultValues = {
    // title: 'La La Land',
    // tagline: "Here's to the fools who dream.",
    // vote_average: 7.9,
    // vote_count: 6782,
    // release_date: "2016-12-29",
    // poster_path: 'https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg',
    // overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    // budget: 30000000,
    // revenue: 445435700,
    // runtime: 128,
    // genres: [],

    title: '',
    vote_average: null,
    release_date: new Date(),
    poster_path: '',
    overview: '',
    runtime: 0,
    genres: [],
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { isDirty, isValid, errors },
    watch,
  } = useForm({
    defaultValues,
    resolver: (values) => customResolver(values),
    criteriaMode: 'all',
    mode: 'onSubmit',
  });

  const formWatch = watch();

  const onSubmit = () => {
    const callback = () => {
      setVisible(false);
      SuccessNotification(message);
    };
    addMovieAction(formWatch, callback);
  };

  const handleCancel = () => setVisible(false);
  console.log(errors);
  return (
    <Modal
      title="ADD MOVIE"
      visible={visible}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          RESET
        </Button>,
        <Button
          key="submit"
          type="primary"
          htmlType="submit"
          disabled={!isDirty}
          onClick={onSubmit}
        >
          SUBMIT
        </Button>,
      ]}
    >
      <div className="formContainer">
        <div className="column">
          <div className="item">
            <h3 htmlFor="title" required>
              TITLE
            </h3>
            <Controller
              name="title"
              control={control}
              error={errors.title && errors.title.message}
              rules={{ required: true, message: 'Title is required.' }}
              render={({ field: { value, onChange } }) => (
                <>
                  <Input placeholder="Enter title" value={value} onChange={onChange} />
                  <ErrorMessage
                    errors={errors}
                    name="title"
                    render={({ message }) => <p>{message}</p>}
                  />
                </>
              )}
            />
          </div>
          <div className="item">
            <h3>MOVIE URL</h3>
            <Controller
              name="poster_path"
              control={control}
              errorMessage={errors.poster_path && errors.poster_path.message}
              rules={{ required: true, message: 'URL is required.' }}
              render={({ field: { value, onChange } }) => (
                <Input placeholder="https://" value={value} onChange={onChange} />
              )}
            />
          </div>
          <div className="item">
            <h3>GENRE</h3>
            <Controller
              name="genres"
              control={control}
              errorMessage={errors.genres && errors.genres.message}
              rules={{ required: true, message: 'Genre is required.' }}
              render={({ field: { value, onChange } }) => (
                <Select
                  className="selectGenre"
                  mode="multiple"
                  placeholder="Select Genre"
                  value={value}
                  onChange={onChange}
                >
                  {genres.map((item) => (
                    <Option key={item.key}>{item.category}</Option>
                  ))}
                </Select>
              )}
            />
          </div>
        </div>
        <div className="column">
          <div className="item">
            <h3>RELEASE DATE</h3>
            <Controller
              name="release_date"
              control={control}
              errorMessage={errors.release_date && errors.release_date.message}
              rules={{ required: true, message: 'Release date is required.' }}
              render={({ field: { value, onChange } }) => (
                <DatePicker
                  value={moment(value, 'YYYY-MM-DD')}
                  placeholder="Select Date"
                  format={'YYYY-MM-DD'}
                  onChange={(value) => {
                    onChange(ToolServices.onFormatDate(value._d));
                  }}
                />
              )}
            />
          </div>
          <div className="item">
            <h3>RATING</h3>
            <Controller
              name="vote_average"
              control={control}
              errorMessage={errors.vote_average && errors.vote_average.message}
              rules={{ required: true, message: 'Rating is required.' }}
              render={({ field: { value, onChange } }) => (
                <Row>
                  <Col span={12}>
                    <Slider min={0} max={10} value={value} onChange={onChange} />
                  </Col>
                  <Col span={4}>
                    <InputNumber
                      min={0}
                      max={10}
                      value={value}
                      onChange={onChange}
                      style={{ margin: '0 16px' }}
                    />
                  </Col>
                </Row>
              )}
            />
          </div>
          <div className="item">
            <h3>RUNTIME</h3>
            <Controller
              name="runtime"
              control={control}
              errorMessage={errors.runtime && errors.runtime.message}
              rules={{ required: true, message: 'Runtime is required.' }}
              render={({ field: { value, onChange } }) => (
                <InputNumber
                  className="runtime"
                  min={0}
                  placeholder="minutes"
                  value={value}
                  onChange={onChange}
                />
              )}
            />
          </div>
        </div>
      </div>
      <h3>OVERVIEW</h3>
      <Controller
        name="overview"
        control={control}
        errorMessage={errors.overview && errors.overview.message}
        rules={{ required: true, message: 'Overview is required.' }}
        render={({ field: { value, onChange } }) => (
          <TextArea
            autoSize={{ minRows: 4, maxRows: 10 }}
            placeholder="Movie description"
            value={value}
            onChange={onChange}
          />
        )}
      />
    </Modal>
  );
};
