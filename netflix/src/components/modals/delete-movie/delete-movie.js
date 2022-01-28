import React from 'react';
import './delete-movie.css';
import { Modal, Button } from 'antd';
import { SuccessNotification } from '../successful-notification/successful-notification';

export const DeleteMovie = ({ message, movie, visible, setVisible }) => {
  const handleOk = (event) => {
    event.stopPropagation();
    setTimeout(() => {
      setVisible(false);
      SuccessNotification(message);
    }, 2000);
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
