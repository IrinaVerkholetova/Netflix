import React from 'react';
import { PropTypes } from 'prop-types';
import './delete-movie.css';

import { useNavigate } from 'react-router-dom';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { Modal, Button } from 'antd';
import { Notification, StatusTypes } from '../notification/notification';

export const DeleteMovie = ({ movieId, visible, setVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteMovieAction = (movieId, callback) =>
    dispatch(moviesThunkActions.deleteMovieThunk(movieId, callback));

  const handleOk = (event) => {
    event.stopPropagation();
    const callback = () => {
      Notification('The movie has been deleted from database successfully', StatusTypes.SUCCESS);
    };
    deleteMovieAction(movieId, callback);
    setVisible(false);
    navigate('/');
  };

  const handleCancel = (event) => {
    event.stopPropagation();
    setVisible(false);
  };

  return (
    <Modal
      title="DELETE MOVIE"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <Button key="submit" type="primary" className="confirmButton" onClick={handleOk}>
          Confirm
        </Button>,
      ]}
    >
      <div className="messageContainer">Are you sure you want to delete this movie?</div>
    </Modal>
  );
};

DeleteMovie.propTypes = {
  movieId: PropTypes.number,
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
};
