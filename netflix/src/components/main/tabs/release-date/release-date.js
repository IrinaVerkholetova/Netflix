import React from 'react';
import './release-date.css';
import { DatePicker } from 'antd';

export const ReleaseDate = () => {
  return (
    <DatePicker
      className="releaseDate"
      placeholder={'RELEASE DATE'}
      format={'DD.MM.YYYY'}
      showToday={false}
      size={16}
    />
  );
};
