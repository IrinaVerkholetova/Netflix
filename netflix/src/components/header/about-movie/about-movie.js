import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { moviesThunkActions } from '../../../redux/thunks';
import { getMovie } from '../../../redux/selectors';

import './about-movie.css';

import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Netflix } from './../../logo/logo';
import { MovieImage } from '../../main/movie-card/movie-image';

const AboutMovie = React.memo(() => {
  const location = useLocation();
  const currentMovieId = +location.pathname.split('/')[2];

  const currentMovie = useSelector(getMovie, shallowEqual);

  const dispatch = useDispatch();
  const getMovieAction = (id) => dispatch(moviesThunkActions.getMovieByIdThunk(id));

  useEffect(() => {
    getMovieAction(currentMovieId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentMovieId]);

  return (
    <div className="aboutMovieContainer">
      <div className="headerSection">
        <Netflix />
        <Button shape="circle" icon={<SearchOutlined />} />
      </div>

      {currentMovie && (
        <div className="movieSection">
          <MovieImage movie={currentMovie} />

          <div className="description">
            <div className="rowSection">
              <h1>{currentMovie.title}</h1>
              <div className="ratingCircle">{currentMovie.vote_average}</div>
            </div>

            <span className="movieGenre">{currentMovie.genres.join(' & ')}</span>

            <div className="rowSection">
              <span className="year_runtime">{currentMovie.release_date.split('-')[0]}</span>
              <span className="year_runtime">{currentMovie.runtime} minutes</span>
            </div>

            <p className="overview">{currentMovie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
});

export default AboutMovie;
