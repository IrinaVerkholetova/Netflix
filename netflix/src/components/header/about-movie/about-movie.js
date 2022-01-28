import React, { useEffect } from 'react';
import './about-movie.css';
import { Netflix } from './../../logo/logo';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import ToolServices from './../../../helper/services';
import { MovieImage } from '../../main/movie-card/movie-image';

export const AboutMovie = ({ list }) => {
  const location = useLocation();

  const currentMovieId = +location.pathname.split('/')[2];

  const movie = ToolServices.foundMovie(list, currentMovieId);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // }, [currentMovieId]);

  return movie ? (
    <div className="aboutMovieContainer">
      <div className="header">
        <Netflix />
        <Button shape="circle" icon={<SearchOutlined />} />
      </div>
      <div className="movieSection">
        <MovieImage movie={movie} />
        <div className="description">
          <div className="rowSection">
            <h1>{movie.title}</h1>
            <div className="ratingCircle">{movie.vote_average}</div>
          </div>

          <span className="movieGenre">{movie.genres.join(' & ')}</span>

          <div className="rowSection">
            <span className="year_runtime">{movie.release_date.split('-')[0]}</span>
            <span className="year_runtime">{movie.runtime} minutes</span>
          </div>

          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  ) : null;
};
