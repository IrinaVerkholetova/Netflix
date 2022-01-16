import React from 'react';
import './home.css';
import { PlusOutlined } from '@ant-design/icons';
import { TabsCategories } from '../tabs/tabs';

export const HomaPage = () => {
  return (
    <div className="container">
      <section className="headerContainer">
        <div className="header">
          <span className="title">
            <b>netflix</b>roulette
          </span>
          <button className="addMovie">
            <PlusOutlined /> ADD MOVIE
          </button>
        </div>
        <h1>FIND YOUR MOVIE</h1>
        <div className="search">
          <input placeholder="What do you want to watch?" />
          <button>SEARCH</button>
        </div>
      </section>

      <section className="mainContainer">
        <TabsCategories />
      </section>

      <section className="footerContainer">
        <span className="title">
          <b>netflix</b>roulette
        </span>
      </section>
    </div>
  );
};
