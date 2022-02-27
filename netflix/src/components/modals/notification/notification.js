import './notification.css';
import { notification } from 'antd';
import { PropTypes } from 'prop-types';

export const StatusTypes = {
  SUCCESS: 'success',
  INFO: 'info',
  ERROR: 'error',
  WARNING: 'warning',
};

export const Notification = (message, status) => {
  return notification[status]({
    description: message,
    className: 'notification',
  });
};

Notification.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string,
};
