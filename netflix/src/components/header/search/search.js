import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './search.css';

import { Input, AutoComplete } from 'antd';

import { useSelector, shallowEqual } from 'react-redux';
import { getMoviesList } from '../../../redux/selectors';

export const SearchMovie = () => {
  const navigate = useNavigate();
  const moviesList = useSelector(getMoviesList, shallowEqual);
  const [options, setOptions] = useState([]);

  const searchResult = (query) => {
    const string = query.toLowerCase();
    return moviesList
      .filter(
        (movie) =>
          movie.title.toLowerCase().includes(string) ||
          movie.release_date.includes(query) ||
          movie.genres.map((genre) => genre.toLowerCase()).includes(string),
      )
      .map((movie) => {
        return {
          value: movie.title,
          label: (
            <div className="resultFound" onClick={() => navigate(`/aboutmovie/${movie.id}`)}>
              <span>
                Found:{' '}
                <b>
                  {movie.title}, {movie.release_date.split('-')[0]}
                </b>
              </span>
            </div>
          ),
        };
      });
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  return (
    <AutoComplete
      className="search"
      notFoundContent={<span className="resultFound">Movie not found</span>}
      options={options}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="What do you want to watch?" enterButton="SEARCH" />
    </AutoComplete>
  );
};
