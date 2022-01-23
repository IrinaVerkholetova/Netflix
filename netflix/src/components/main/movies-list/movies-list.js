import React from 'react';
import css from './movies-list.module.css';
import { moviesTemp } from '../../../helper/constants/movies';
import { MovieCard } from '../movie-card/movie-card';
import { useNavigate } from 'react-router-dom';
import ToolServices from './../../../helper/services';

export const MoviesList = ({ genre }) => {
  const navigate = useNavigate();

  const moviesFilted = ToolServices.moviesFilted(genre, moviesTemp);

  return (
    <>
      <div className={css.result}>
        {moviesFilted.length ? (
          <span>
            <b>{moviesFilted.length}</b> movies found
          </span>
        ) : (
          <span>Not results found</span>
        )}
      </div>

      {Boolean(moviesFilted.length) && (
        <ul className={css.container}>
          {moviesFilted.map((item) => {
            return (
              <li
                key={item.key}
                className={css.card}
                onClick={(event) => {
                  event.stopPropagation();
                  navigate(`/aboutmovie/${item.key}`);
                }}
              >
                <MovieCard movie={item} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
