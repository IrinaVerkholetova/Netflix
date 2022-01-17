import React from 'react';
import './tabs.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';
import { categories } from '../const';

export const TabsCategories = () => {
  const { TabPane } = Tabs;
  const callback = (key) => console.log(key);
  const operations = (
    <>
      <span className="sortBy">SORT BY</span>
      <ReleaseDate />
    </>
  );

  return (
    <div className="tabs">
      <Tabs defaultActiveKey="1" onChange={callback} tabBarExtraContent={operations}>
        {categories.map((item) => {
          return (
            <TabPane tab={item.category} key={item.key}>
              <div className="result"> movies found</div>
              Content of Tab Pane {item.category}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
