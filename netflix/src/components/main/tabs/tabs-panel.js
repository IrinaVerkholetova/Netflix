import React from 'react';
import './tabs-panel.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import { MoviesList } from '../movies-list/movies-list';
import { genres } from '../../../helper/constants/categories';

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
      <Tabs defaultActiveKey={genres[0]} onChange={callback} tabBarExtraContent={operations}>
        {genres.map((item, index) => {
          return (
            <TabPane tab={item} key={index}>
              {/* <div>Content of Tab Pane {item.category}</div> */}
              <MoviesList genre={item} />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
