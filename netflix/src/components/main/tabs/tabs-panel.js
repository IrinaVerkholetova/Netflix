import React, { useState } from 'react';
import './tabs-panel.css';

import { Tabs, Button, Dropdown, Menu } from 'antd';

import { ReleaseDate } from './release-date/release-date';
import MoviesList from '../movies-list/movies-list';
import { genres, SortBY } from '../../../helper/constants/categories';

export const TabsPanel = () => {
  const { TabPane } = Tabs;

  const [sortBy, setSortBy] = useState('SORT BY');

  const sortByOptions = [
    { key: SortBY.TITLE_UP, title: SortBY.TITLE_UP },
    { key: SortBY.TITLE_DOWN, title: SortBY.TITLE_DOWN },
    { key: SortBY.RELEASE_UP, title: SortBY.RELEASE_UP },
    { key: SortBY.RELEASe_DOWN, title: SortBY.RELEASe_DOWN },
  ];

  const menu = (
    <Menu>
      {sortByOptions.map((item) => {
        return (
          <Menu.Item key={item.key}>
            <Button
              className="actionButton"
              onClick={(event) => {
                event.stopPropagation();
                setSortBy(item.title);
              }}
            >
              {item.title}
            </Button>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const operations = (
    <div className="operetions">
      <Dropdown overlay={menu} placement="bottomCenter">
        <Button className="sortBy" onClick={(event) => event.stopPropagation()}>
          <span>{sortBy}</span>
        </Button>
      </Dropdown>

      <ReleaseDate />
    </div>
  );

  return (
    <div className="mainContainer">
      <Tabs defaultActiveKey={genres[0]} tabBarExtraContent={operations}>
        {genres.map((item) => {
          return (
            <TabPane tab={item.category.toUpperCase()} key={item.key}>
              <MoviesList genre={item.category} sortBy={sortBy} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
