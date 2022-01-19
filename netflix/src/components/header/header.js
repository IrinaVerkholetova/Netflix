import React from 'react';
import './header.css';
import { Input } from 'antd';
import { AddMovie } from '../modals/add-movie/add-movie-modal';

export const Header = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  return (
    <div className="headerContainer">
      <AddMovie />
      <h1>FIND YOUR MOVIE</h1>
      <div className="search">
        <Search placeholder="What do you want to watch?" enterButton="SEARCH" onSearch={onSearch} />
      </div>
    </div>
  );
};
