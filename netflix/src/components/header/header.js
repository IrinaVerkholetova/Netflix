import React, { useState } from 'react';
import './header.css';
import { Input, Tooltip } from 'antd';
import { PlusOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { AddMovie } from '../modals/add-movie-modal';
import { Netflix } from '../logo/logo';
import { Link } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { getCurrentUser } from './../../redux/selectors';

export const Header = () => {
  const { Search } = Input;

  const [visible, setVisible] = useState(false);

  const currentUser = useSelector(getCurrentUser, shallowEqual);

  const onSearch = (value) => console.log(value);

  return (
    <div className="background">
      <div className="background__content">
        <div className="header">
          <Netflix />
          <div>
            <Tooltip
              placement="bottom"
              title={!currentUser?.login && "You cann't add new movie. You need log in."}
            >
              <button
                className="addMovie"
                disabled={!currentUser?.login}
                title="Add movie"
                onClick={() => setVisible(true)}
              >
                <PlusOutlined /> ADD MOVIE
              </button>
            </Tooltip>

            {currentUser?.login ? (
              <span className="currentUser" title="Current user">
                <UserOutlined /> {currentUser.login}
              </span>
            ) : (
              <Link to="/login" className="loginLink" title="Log in">
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
