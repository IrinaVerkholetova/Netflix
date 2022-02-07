import React, { useEffect } from 'react';
import './about-movie.css';
import { Netflix } from './../../logo/logo';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { MovieImage } from '../../main/movie-card/movie-image';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { moviesThunkActions } from '../../../redux/thunks';

const AboutMovie = ({ currentMovie }) => {
  const location = useLocation();
  const currentMovieId = +location.pathname.split('/')[2];

  const dispatch = useDispatch();
  const getMovieAction = (id) => dispatch(moviesThunkActions.getMovieByIdThunk(id));

  // const movie = useMemo(
  //   () => ToolServices.foundMovie(list, currentMovieId),
  //   [list, currentMovieId],
  // );

  useEffect(() => {
    getMovieAction(currentMovieId);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [currentMovieId]);

  return currentMovie ? (
    <div className="aboutMovieContainer">
      <div className="header">
        <Netflix />
        <Button shape="circle" icon={<SearchOutlined />} />
      </div>
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
    </div>
  ) : null;
};

const mapStateToProps = ({ currentMovie }) => {
  return { currentMovie };
};

export default connect(mapStateToProps)(AboutMovie);
