import React, { useMemo, useReducer } from 'react';
import './add-movie-modal.css';

// import { Modal, Button, Input, DatePicker, Select, InputNumber, Form } from 'antd';
import Select from 'react-select';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { genres } from '../../../helper/constants/categories';
import { SuccessNotification } from '../successful-notification/successful-notification';
import { CustomModal } from './modal/modal';

// export const AddMovie = ({ message, visible, setVisible }) => {
//   const { TextArea } = Input;
//   const { Option } = Select;

//   const dispatch = useDispatch();
//   const addMovieAction = (form, callback) =>
//     dispatch(moviesThunkActions.addMovieThunk(form, callback));

//   const defaultValues = {
//     // title: 'La La Land',
//     // vote_average: 7.9,
//     // release_date: "2016-12-29",
//     // poster_path: 'https://2.bp.blogspot.com/-mmN8FiPcWDc/WWCUELUuZzI/AAAAAAAAAGQ/ztsHb0INa1cp6JgxvG6KBxwmjtN09oLcgCLcBGAs/s1600/POSTER.jpg',
//     // overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
//     // runtime: 128,
//     // genres: [],

//     title: '',
//     vote_average: null,
//     release_date: '',
//     poster_path: '',
//     overview: '',
//     runtime: null,
//     genres: [],
//   };

//   const handleCancel = () => setVisible(false);

//   const onFinish = (values) => {
//     const callback = () => {
//       setVisible(false);
//       SuccessNotification(message);
//     };
//     addMovieAction({ ...values, release_date: values.release_date._d }, callback);
//   };

//   return (
//     <Modal title="ADD MOVIE" visible={visible} onCancel={handleCancel} footer={null}>
//       <Form onFinish={onFinish} initialValues={defaultValues}>
//         <div className="formContainer">
//           <div className="column">
//             <div className="item">
//               <h3 htmlFor="title" required>
//                 TITLE
//               </h3>
//               <Form.Item name="title" rules={[{ required: true, message: 'Title is required.' }]}>
//                 <Input placeholder="Enter title" />
//               </Form.Item>
//             </div>

//             <div className="item">
//               <h3>MOVIE URL</h3>
//               <Form.Item
//                 name="poster_path"
//                 rules={[{ required: true, message: 'URL is required.' }]}
//               >
//                 <Input placeholder="https://" />
//               </Form.Item>
//             </div>

//             <div className="item">
//               <h3>GENRE</h3>
//               <Form.Item name="genres" rules={[{ required: true, message: 'Genre is required.' }]}>
//                 <Select className="selectGenre" mode="multiple" placeholder="Select Genre">
//                   {genres.map((item) => (
//                     <Option key={item.key}>{item.category}</Option>
//                   ))}
//                 </Select>
//               </Form.Item>
//             </div>
//           </div>

//           <div className="column">
//             <div className="item">
//               <h3>RELEASE DATE</h3>
//               <Form.Item
//                 name="release_date"
//                 rules={[{ required: true, message: 'Release date is required.' }]}
//               >
//                 <DatePicker placeholder="Select Date" format={'YYYY-MM-DD'} />
//               </Form.Item>
//             </div>

//             <div className="item">
//               <h3>RATING</h3>
//               <Form.Item
//                 name="vote_average"
//                 rules={[{ required: true, message: 'Rating is required.' }]}
//               >
//                 <InputNumber
//                   className="numberInput"
//                   min={0}
//                   max={10}
//                   placeholder="Enter rating"
//                   controls={false}
//                 />
//               </Form.Item>
//             </div>

//             <div className="item">
//               <h3>RUNTIME</h3>
//               <Form.Item
//                 name="runtime"
//                 rules={[{ required: true, message: 'Runtime is required.' }]}
//               >
//                 <InputNumber className="numberInput" placeholder="Enter minutes" controls={false} />
//               </Form.Item>
//             </div>
//           </div>
//         </div>

//         <h3>OVERVIEW</h3>
//         <Form.Item name="overview" rules={[{ required: true, message: 'Overview is required.' }]}>
//           <TextArea autoSize={{ minRows: 4, maxRows: 10 }} placeholder="Movie description" />
//         </Form.Item>

//         <Form.Item className="modalButtons">
//           <Button key="back" onClick={handleCancel} className="resetButton">
//             RESET
//           </Button>
//           <Button key="submit" type="primary" htmlType="submit">
//             SUBMIT
//           </Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

export const AddMovie = ({ message, visible, setVisible }) => {
  const dispatchAction = useDispatch();
  const addMovieAction = (form, callback) =>
    dispatchAction(moviesThunkActions.addMovieThunk(form, callback));

  const genresOptions = useMemo(
    () =>
      genres.map((item) => ({
        key: item.key,
        value: item.category,
        label: item.category,
      })),
    [],
  );

  const customStyles = useMemo(
    () => ({
      control: (styles) => ({
        ...styles,
        backgroundColor: 'rgba(50, 50, 50, 0.95)',
        borderColor: 'transparent',
        boxShadow: 'none',
        ':hover': {
          ...styles[':hover'],
          borderColor: 'transparent',
        },
      }),
      option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        backgroundColor: isSelected || isFocused ? '#f65261' : 'rgba(50, 50, 50, 0.95)',
        color: 'rgba(255, 255, 255, 1)',
        cursor: isSelected || isFocused ? 'point' : 'default',
      }),
      menu: (styles) => ({ ...styles, backgroundColor: 'rgba(50, 50, 50, 0.95)' }),
    }),
    [],
  );

  const initialFormState = {
    // title: 'La La Land',
    // vote_average: 7.9,
    // release_date: "2016-12-29",
    // poster_path: 'https://2.bp.blogspot.com/-mmN8FiPcWDc/WWCUELUuZzI/AAAAAAAAAGQ/ztsHb0INa1cp6JgxvG6KBxwmjtN09oLcgCLcBGAs/s1600/POSTER.jpg',
    // overview: 'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    // runtime: 128,
    // genres: [],
    form: {
      title: '',
      vote_average: '',
      release_date: '',
      poster_path: '',
      overview: '',
      runtime: '',
      genres: [],
    },
    validation: false,
  };

  const actionTypes = {
    HANDLE_INPUT_TEXT: 'HANDLE_INPUT_TEXT',
    HANDLE_SELECT: 'HANDLE_SELECT',
    RESET: 'RESET',
    VALID_ERROR: 'VALID_ERROR',
  };

  const reducer = (state = initialFormState, action) => {
    switch (action.type) {
      case actionTypes.HANDLE_INPUT_TEXT:
        return { ...state, form: { ...state.form, [action.field]: action.payload } };
      case actionTypes.HANDLE_SELECT:
        return { ...state, form: { ...state.form, genres: action.payload } };
      case actionTypes.VALID_ERROR:
        return { ...state, validation: action.payload };
      case actionTypes.RESET:
        return init(action.payload);
      default:
        return state;
    }
  };

  const init = (initialFormState) => {
    return initialFormState;
  };

  const [formState, dispatch] = useReducer(reducer, initialFormState, init);

  const handleInputChange = (event) => {
    dispatch({
      type: actionTypes.HANDLE_INPUT_TEXT,
      field: event.target.name,
      payload: event.target.value,
    });
  };

  const handleSelectChange = (value) => {
    dispatch({
      type: actionTypes.HANDLE_SELECT,
      payload: value,
    });
  };

  const validation = (status) => {
    dispatch({
      type: actionTypes.VALID_ERROR,
      payload: status,
    });
  };

  const handleReset = () => {
    dispatch({
      type: actionTypes.RESET,
      payload: initialFormState,
    });
  };

  const handleCancel = () => setVisible(false);

  const onSubmit = () => {
    const checking = Object.values(formState.form).some((item) => item.length === 0);
    if (checking) return validation(true);
    validation(false);
    const submitData = {
      ...formState.form,
      genres: formState.form.genres.map((item) => item.value),
      vote_average: +formState.form.vote_average,
      runtime: +formState.form.runtime,
    };
    const callback = () => {
      setVisible(false);
      SuccessNotification(message);
    };
    addMovieAction(submitData, callback);
  };

  const modalProps = {
    title: 'ADD MOVIE',
    visible: visible,
    onCancel: handleCancel,
    onReset: handleReset,
    onSubmit: onSubmit,
  };

  return (
    <CustomModal {...modalProps}>
      <section className="row">
        <div className="first">
          <h3>TITLE</h3>
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            className="input"
            required
            value={formState.form.title}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="second">
          <h3>RELEASE DATE</h3>
          <input
            type="date"
            name="release_date"
            placeholder="Select Date"
            autoComplete="off"
            className="input"
            required
            value={formState.form.release_date}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </section>
      <section className="row">
        <div className="first">
          <h3>MOVIE URL</h3>
          <input
            type="text"
            name="poster_path"
            placeholder="https://"
            className="input"
            required
            value={formState.form.poster_path}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="second">
          <h3>RATING</h3>
          <input
            type="number"
            name="vote_average"
            min={0}
            max={10}
            placeholder="Enter rating"
            className="input"
            required
            value={formState.form.vote_average}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </section>
      <section className="row">
        <div className="first">
          <h3>GENRE</h3>
          <Select
            isMulti
            name="genres"
            styles={customStyles}
            options={genresOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
            placeholder="Select Genre"
            value={formState.form.genres}
            onChange={(value) => handleSelectChange(value)}
          />
        </div>
        <div className="second">
          <h3>RUNTIME</h3>
          <input
            type="number"
            name="runtime"
            min={0}
            placeholder="Enter minutes"
            className="input"
            required
            value={formState.form.runtime}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </section>
      <h3>Overview</h3>
      <textarea
        name="overview"
        className="movie_overview"
        placeholder="Movie description"
        rows={4}
        required
        value={formState.form.overview}
        onChange={(e) => handleInputChange(e)}
      />
    </CustomModal>
  );
};
