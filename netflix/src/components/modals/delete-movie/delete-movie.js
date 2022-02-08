import React from 'react';
import './delete-movie.css';

import { useNavigate } from 'react-router-dom';

import { moviesThunkActions } from '../../../redux/thunks';
import { useDispatch } from 'react-redux';

import { Modal, Button } from 'antd';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const DeleteMovie = ({ message, movie, visible, setVisible }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteMovieAction = (id, callback) =>
    dispatch(moviesThunkActions.deleteMovieThunk(id, callback));

  const handleOk = (event) => {
    event.stopPropagation();
    const callback = () => {
      setVisible(false);
      navigate('/');
      SuccessNotification(message);
    };
    deleteMovieAction(movie.id, callback);
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
