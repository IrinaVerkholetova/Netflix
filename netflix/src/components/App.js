import React from 'react';
import './App.css';
import { Header } from './header/header';
import { TabsPanel } from './main/tabs/tabs-panel';
import { Footer } from './footer/footer';

export default function App() {
  return (
    <>
      <Header />
      <TabsPanel />
      <Footer />
    </>
  );
}
