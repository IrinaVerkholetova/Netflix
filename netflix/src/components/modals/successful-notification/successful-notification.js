import './successful-notification.css';
import { notification } from 'antd';

export const SuccessNotification = () => {
  return notification['success']({
    message: 'CONGRATULATIONS!',
    description: 'The movie has been added to database successfully',
    className: 'notification',
  });
};
