import React, { useState } from 'react';
import './movie-card.css';
import { Button, Dropdown, Menu, Tooltip } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { DeleteMovie } from '../../modals/delete-movie/delete-movie';
import { EditMovie } from '../../modals/edit-movie-modal';
import { MovieImage } from './movie-image';
import { useSelector, shallowEqual } from 'react-redux';
import { getCurrentUser } from './../../../redux/selectors';
import { PropTypes } from 'prop-types';

export const MovieCard = ({ movie }) => {
  const currentUser = useSelector(getCurrentUser, shallowEqual);

  const [editMovie, setEditMovie] = useState(false);
  const [delMovie, setDelMovie] = useState(false);

  const menu = (
    <Menu>
      <Menu.Item key="edit">
        <Button
          className="actionButton"
          onClick={(event) => {
            event.stopPropagation();
            setEditMovie(true);
          }}
        >
          Edit
        </Button>
      </Menu.Item>
      <Menu.Item key="delete">
        <Button
          className="actionButton"
          onClick={(event) => {
            event.stopPropagation();
            setDelMovie(true);
          }}
        >
          Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="container">
      {delMovie && <DeleteMovie movieId={movie.id} visible={delMovie} setVisible={setDelMovie} />}
      {editMovie && <EditMovie movie={movie} visible={editMovie} setVisible={setEditMovie} />}

      <Dropdown disabled={!currentUser?.login} overlay={menu} placement="bottomCenter">
        <Tooltip
          placement="top"
          title={!currentUser?.login && "You cann't edit or delete movie. You need log in."}
        >
          <Button className="actions" onClick={(event) => event.stopPropagation()}>
            <MoreOutlined />
          </Button>
        </Tooltip>
      </Dropdown>

      <MovieImage movie={movie} />
      <div className="movie_year">
        <h2 className="movie_name">{movie.title}</h2>
        <div className="year">{movie.release_date.split('-')[0]}</div>
      </div>
      <span className="genre">{movie.genres.join(' & ')}</span>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};
