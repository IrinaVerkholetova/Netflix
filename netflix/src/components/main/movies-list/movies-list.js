import React, { useMemo } from 'react';
import css from './movies-list.module.css';
import { MovieCard } from '../movie-card/movie-card';
import { useNavigate } from 'react-router-dom';
import ToolServices from '../../../helper/tool-services';
import { connect } from 'react-redux';

const MoviesList = React.memo(({ moviesList, genre }) => {
  const navigate = useNavigate();

  const moviesFilted = useMemo(
    () => ToolServices.moviesFilted(moviesList, genre),
    [moviesList, genre],
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
});

const mapStateToProps = ({ moviesList }) => {
  return { moviesList };
};

export default connect(mapStateToProps)(MoviesList);
