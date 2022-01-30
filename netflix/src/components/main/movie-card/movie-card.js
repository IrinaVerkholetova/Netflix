import React, { useState } from 'react';
import './movie-card.css';
import { Button, Dropdown, Menu } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import { DeleteMovie } from '../../modals/delete-movie/delete-movie';
import { EditMovie } from '../../modals/edit-movie/edit-movie-modal';
import { MovieImage } from './movie-image';

export const MovieCard = ({ movie }) => {
  const [editMovie, setEditMovie] = useState(false);
  const [delMovie, setDelMovie] = useState(false);
  const menu = (
    <Menu>
      <Menu.Item>
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
      <Menu.Item>
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
      {delMovie && (
        <DeleteMovie
          message="The movie has been deleted from database successfully"
          movie={movie}
          visible={delMovie}
          setVisible={setDelMovie}
        />
      )}
      {editMovie && (
        <EditMovie
          message={'The movie has been updated to database successfully'}
          movie={movie}
          visible={editMovie}
          setVisible={setEditMovie}
        />
      )}

      <Dropdown overlay={menu} placement="bottomCenter">
        <Button className="actions" onClick={(event) => event.stopPropagation()}>
          <MoreOutlined />
        </Button>
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

export class MovieCard2 extends React.Component {
  constructor() {
    super();
    this.state = {
      editMovie: false,
      delMovie: false,
    };
  }

  menu = (
    <Menu>
      <Menu.Item>
        <Button
          className="actionButton"
          onClick={(event) => {
            event.stopPropagation();
            this.setState(() => ({ editMovie: true }));
          }}
        >
          Edit
        </Button>
      </Menu.Item>
      <Menu.Item>
        <Button
          className="actionButton"
          onClick={(event) => {
            event.stopPropagation();
            this.setState(() => ({ delMovie: true }));
          }}
        >
          Delete
        </Button>
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div className="container">
        {this.state.delMovie && (
          <DeleteMovie
            message="The movie has been deleted from database successfully"
            movie={this.props.movie}
            visible={this.state.delMovie}
            setVisible={this.setState(() => ({ delMovie: true }))}
          />
        )}
        {this.state.editMovie && (
          <EditMovie
            message={'The movie has been updated to database successfully'}
            movie={this.props.movie}
            visible={this.state.editMovie}
            setVisible={this.setState(() => ({ editMovie: true }))}
          />
        )}

        <Dropdown overlay={this.menu} placement="bottomCenter">
          <Button className="actions" onClick={(event) => event.stopPropagation()}>
            <MoreOutlined />
          </Button>
        </Dropdown>

        <MovieImage movie={this.props.movie} />
        <div className="movie_year">
          <h2 className="movie_name">{this.props.movie.title}</h2>
          <div className="year">{this.props.movie.release_date.split('-')[0]}</div>
        </div>
        <span className="genre">{this.props.movie.genres.join(' & ')}</span>
      </div>
    );
  }
}
