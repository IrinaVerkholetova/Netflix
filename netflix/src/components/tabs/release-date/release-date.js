import React, { useState } from 'react';
import './release-date.css';
import { Select } from 'antd';

export const ReleaseDate = () => {
  const { Option } = Select;
  const provinceData = ['Zhejiang', 'Jiangsu'];
  const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
  };
  const [cities, setCities] = useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = useState(cityData[provinceData[0]][0]);
  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    setSecondCity(cityData[value][0]);
  };

  return (
    <Select
      placeholder="RELEASE DATE"
      style={{ width: 145, fontSize: '16px', fontWeight: 600, color: '#fff' }}
      onChange={handleProvinceChange}
    >
      {provinceData.map((province) => (
        <Option key={province}>{province}</Option>
      ))}
    </Select>
  );
};
