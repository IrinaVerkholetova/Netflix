import './successful-notification.css';
import { notification } from 'antd';

export const SuccessNotification = (message) => {
  return notification['success']({
    message: 'CONGRATULATIONS!',
    description: message,
    className: 'notification',
  });
};
