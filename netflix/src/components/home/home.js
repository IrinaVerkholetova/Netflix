import React from 'react';
import './home.css';
import { TabsCategories } from '../tabs/tabs';
import { AddMovie } from '../modals/add-movie/add-movie-modal';
import { Input } from 'antd';

export const HomaPage = () => {
  const netflix = (
    <span className="title">
      <b>netflix</b>roulette
    </span>
  );

  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <div className="container">
      <section className="headerContainer">
        <AddMovie title={netflix} />

        <h1>FIND YOUR MOVIE</h1>

        <div className="search">
          <Search
            placeholder="What do you want to watch?"
            enterButton="SEARCH"
            onSearch={onSearch}
          />
        </div>
      </section>

      <section className="mainContainer">
        <TabsCategories />
      </section>

      <section className="footerContainer">{netflix}</section>
    </div>
  );
};
