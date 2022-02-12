import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getFilteredMoviesList, useAppSelector } from '../../../redux/selectors';

import css from './movies-list.module.css';
import { MovieCard } from '../movie-card/movie-card';

const MoviesList = React.memo(({ genre }) => {
  const navigate = useNavigate();
  const moviesFiltered = useAppSelector((state) => getFilteredMoviesList(state)(genre));

  // const moviesFiltered = useMemo(
  //   () => ToolServices.moviesFilted(moviesList, genre),
  //   [moviesList, genre],
  // );

  return (
    <>
      <div className={css.result}>
        {moviesFiltered?.length ? (
          <span>
            <b>{moviesFiltered.length}</b> movies found
          </span>
        ) : (
          <span>Not results found</span>
        )}
      </div>

      {!!moviesFiltered?.length && (
        <ul className={css.container}>
          {moviesFiltered.map((item) => {
            return (
              <li
                key={item.id}
                className={css.card}
                onClick={() => navigate(`/aboutmovie/${item.id}`)}
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

// const mapStateToProps = ({ moviesList }) => {
//   return { moviesList };
// };
// export default connect(mapStateToProps)(MoviesList);
export default MoviesList;
