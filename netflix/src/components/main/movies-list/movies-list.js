import React from 'react';
import css from './movies-list.module.css';
import { moviesTemp } from '../../../helper/constants/movies';
import { MovieCard } from '../movie-card/movie-card';
import { useNavigate } from 'react-router-dom';

export const MoviesList = () => {
  const navigate = useNavigate();

  const handleEvent = (event) => {
    event.stopPropagation();
    console.log('About movie');
    navigate('/aboutmovie');
  };
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
