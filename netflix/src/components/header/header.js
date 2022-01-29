import React, { useState } from 'react';
import './header.css';
import { Input } from 'antd';
import { PlusOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { AddMovie } from '../modals/add-movie/add-movie-modal';
import { Netflix } from '../logo/logo';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { Search } = Input;

  const [visible, setVisible] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const onSearch = (value) => console.log(value);

  return (
    <div className="background">
      <div className="background__content">
        <div className="header">
          <Netflix />
          <div>
            <button className="addMovie" onClick={() => setVisible(true)}>
              <PlusOutlined /> ADD MOVIE
            </button>
            {isLogin ? (
              <span className="currentUser">
                <UserOutlined /> user name
              </span>
            ) : (
              <Link to="/login" className="loginLink">
                <LoginOutlined /> Log in
              </Link>
            )}
          </div>
        </div>
        {visible && (
          <AddMovie
            message={'The movie has been added to database successfully'}
            visible={visible}
            setVisible={setVisible}
          />
        )}
        <h1>FIND YOUR MOVIE</h1>
        <div className="search">
          <Search
            placeholder="What do you want to watch?"
            enterButton="SEARCH"
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
};