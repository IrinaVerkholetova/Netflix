import React, { useState } from 'react';
import './add-movie-modal.css';
import { Modal, Button, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

export const AddMovie = ({ netflix }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');

  const { TextArea } = Input;

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => setVisible(false);

  return (
    <div className="header">
      {netflix}
      <button className="addMovie" onClick={() => setVisible(true)}>
        <PlusOutlined /> ADD MOVIE
      </button>
      <Modal
        title="ADD MOVIE"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
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
        <h3>OVERVIEW</h3>
        <TextArea rows={4} placeholder="Movie description" />
      </Modal>
    </div>
  );
};
