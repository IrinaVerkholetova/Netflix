import React from 'react';
import './home.css';
import { TabsCategories } from '../tabs/tabs';
import { AddMovie } from '../modals/add-movie/add-movie-modal';

export const HomaPage = () => {
  const netflix = (
    <span className="title">
      <b>netflix</b>roulette
    </span>
  );

  return (
    <div className="container">
      <section className="headerContainer">
        <AddMovie netflix={netflix} />

        <h1>FIND YOUR MOVIE</h1>

        <div className="search">
          <input placeholder="What do you want to watch?" />
          <button>SEARCH</button>
        </div>
      </section>

      <section className="mainContainer">
        <TabsCategories />
      </section>

      <section className="footerContainer">{netflix}</section>
    </div>
  );
};
