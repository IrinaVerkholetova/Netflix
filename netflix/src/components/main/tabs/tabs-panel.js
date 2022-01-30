import React from 'react';
import './tabs-panel.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import { MoviesList } from '../movies-list/movies-list';
import { genres } from '../../../helper/constants/categories';
import { WrapperMoviesList } from '../movies-list/wrapper-movies-list';

export const TabsPanel = ({ list }) => {
  const { TabPane } = Tabs;
  const callback = (key) => console.log(key);
  const operations = (
    <>
      <span className="sortBy">SORT BY</span>
      <ReleaseDate />
    </>
  );

  const props = {};

  return (
    <div className="mainContainer">
      <Tabs defaultActiveKey={genres[0]} onChange={callback} tabBarExtraContent={operations}>
        {genres.map((item) => {
          return (
            <TabPane tab={item.category.toUpperCase()} key={item.key}>
              <WrapperMoviesList
                list={list}
                genre={item.category}
                Component={MoviesList}
                {...props}
              />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
