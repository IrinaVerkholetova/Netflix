import React from 'react';
import './tabs.css';
import { Tabs } from 'antd';
import { ReleaseDate } from './release-date/release-date';

export const TabsCategories = () => {
  const { TabPane } = Tabs;
  const callback = (key) => console.log(key);
  const operations = (
    <div className="sortBy">
      <span style={{ padding: '0 15px' }}>SORT BY</span>
      <ReleaseDate />
    </div>
  );
  const categories = [
    { key: 1, category: 'ALL' },
    { key: 2, category: 'DOCUMENTARY' },
    { key: 3, category: 'COMEDY' },
    { key: 4, category: 'HORROR' },
    { key: 5, category: 'CRIME' },
  ];

  return (
    <div className="filters">
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        tabBarExtraContent={operations}
        tabPosition={'top'}
      >
        {categories.map((item) => {
          return (
            <TabPane tab={item.category} key={item.key}>
              <div className="results"> movies found</div>
              Content of Tab Pane {item.category}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};
