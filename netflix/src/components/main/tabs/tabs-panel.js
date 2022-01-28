import React from 'react';
import './tabs-panel.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import { MoviesList } from '../movies-list/movies-list';
import { genres } from '../../../helper/constants/categories';

export const TabsPanel = ({ list }) => {
  const { TabPane } = Tabs;
  const callback = (key) => console.log(key);
  const operations = (
    <>
      <span className="sortBy">SORT BY</span>
      <ReleaseDate />
    </>
  );

  return (
    <div className="mainContainer">
      <Tabs defaultActiveKey={genres[0]} onChange={callback} tabBarExtraContent={operations}>
        {genres.map((item) => {
          return (
            <TabPane tab={item.category.toUpperCase()} key={item.key}>
              <MoviesList list={list} genre={item.category} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
