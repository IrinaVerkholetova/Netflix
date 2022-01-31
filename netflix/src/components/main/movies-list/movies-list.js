import React, { useMemo } from 'react';
import css from './movies-list.module.css';
import { MovieCard } from '../movie-card/movie-card';
import { useNavigate } from 'react-router-dom';
import ToolServices from './../../../helper/services';
import { withContext } from './../../with-context';

const MoviesList = (props) => {
  const navigate = useNavigate();
  const { context, genre } = props;

  const moviesFilted = useMemo(
    () => ToolServices.moviesFilted(context?.data, genre),
    [context?.data, genre],
  );

  return (
    <>
      <div className={css.result}>
        {moviesFilted?.length ? (
          <span>
            <b>{moviesFilted.length}</b> movies found
          </span>
        ) : (
          <span>Not results found</span>
        )}
      </div>

      {!!moviesFilted?.length && (
        <ul className={css.container}>
          {moviesFilted.map((item) => {
            return (
              <li
                key={item.id}
                className={css.card}
                onClick={(event) => {
                  // event.stopPropagation();
                  navigate(`/aboutmovie/${item.id}`);
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

export default withContext(MoviesList);
