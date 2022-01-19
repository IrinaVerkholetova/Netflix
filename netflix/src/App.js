import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { TabsPanel } from './components/main/tabs/tabs-panel';
import { Footer } from './components/footer/footer';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <TabsPanel />
        <Footer />
      </div>
    </div>
  );
}
