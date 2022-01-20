import React from 'react';
import css from './movies-list.module.css';
import { moviesTemp } from '../../../helper/constants/movies';
import { MovieCard } from '../movie-card/movie-card';

export const MoviesList = () => {
  const handleEvent = () => console.log('About movie');
  return (
    <ul className={css.container}>
      {moviesTemp.map((item, index) => {
        return (
          <li key={index} className={css.card} onClick={handleEvent}>
            <MovieCard movie={item} />
          </li>
        );
      })}
    </ul>
  );
};
