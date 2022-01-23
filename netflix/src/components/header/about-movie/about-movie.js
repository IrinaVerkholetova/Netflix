import React, { useEffect } from 'react';
import './about-movie.css';
import { Netflix } from './../../logo/logo';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import ToolServices from './../../../helper/services';
import { moviesTemp } from '../../../helper/constants/movies';
import { MovieImage } from '../../main/movie-card/movie-image';

export const AboutMovie = () => {
  const location = useLocation();

  const currentMovieId = +location.pathname.split('/')[2];

  const movie = ToolServices.foundMovie(moviesTemp, currentMovieId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentMovieId]);

  return (
    <div className="aboutMovieContainer">
      <div className="header">
        <Netflix />
        <Button shape="circle" icon={<SearchOutlined />} />
      </div>
      <div className="movieSection">
        <MovieImage movie={movie} />
        <div className="description">
          <div className="rowSection">
            <h1>{movie.name}</h1>
            <div className="ratingCircle">{movie.rating}</div>
          </div>

          <span className="movieGenre">{movie.genre}</span>

          <div className="rowSection">
            <span className="year_runtime">{movie.year}</span>
            <span className="year_runtime">{movie.runtime} minutes</span>
          </div>

          <p className="overview">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};
