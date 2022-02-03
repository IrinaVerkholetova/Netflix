import React, { useMemo } from 'react';
import './tabs-panel.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import MoviesList from '../movies-list/movies-list';
import { genres } from '../../../helper/constants/categories';

export const TabsPanel = () => {
  const { TabPane } = Tabs;
  const operations = useMemo(
    () => (
      <>
        <span className="sortBy">SORT BY</span>
        <ReleaseDate />
      </>
    ),
    [],
  );

  return (
    <div className="mainContainer">
      <Tabs defaultActiveKey={genres[0]} tabBarExtraContent={operations}>
        {genres.map((item) => {
          return (
            <TabPane tab={item.category.toUpperCase()} key={item.key}>
              <MoviesList genre={item.category} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
