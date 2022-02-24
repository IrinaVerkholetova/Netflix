import './successful-notification.css';
import { notification } from 'antd';
import { PropTypes } from 'prop-types';

export const SuccessNotification = (message) => {
  return notification['success']({
    message: 'CONGRATULATIONS!',
    description: message,
    className: 'notification',
  });
};

SuccessNotification.propTypes = {
  message: PropTypes.string,
};
