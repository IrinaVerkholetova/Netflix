import React from 'react';
import './release-date.css';
import { Select } from 'antd';

export const ReleaseDate = () => {
  const { Option } = Select;
  const provinceData = ['Zhejiang', 'Jiangsu'];

  const handleProvinceChange = (value) => {
    console.log(value);
  };

  return (
    <Select placeholder="RELEASE DATE" className="select" onChange={handleProvinceChange}>
      {provinceData.map((province) => (
        <Option key={province}>{province}</Option>
      ))}
    </Select>
  );
};
