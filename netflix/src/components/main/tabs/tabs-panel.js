import React from 'react';
import './tabs-panel.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import { categories } from '../../../helper/constants/categories';
import { MoviesList } from '../movies-list/movies-list';

export const TabsPanel = () => {
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
      <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
        {categories.map((item) => {
          return (
            <TabPane tab={item.category} key={item.key}>
              <div className="result">
                <b>39</b> movies found
              </div>
              <div>Content of Tab Pane {item.category}</div>
              <MoviesList />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
