import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './header/header';
import { TabsPanel } from './main/tabs/tabs-panel';
import { Footer } from './footer/footer';
import { LoginPage } from './login/login';
import { AboutMovie } from './header/about-movie/about-movie';

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <TabsPanel />
            <Footer />
          </>
        }
      />
      <Route
        path="/aboutmovie"
        element={
          <>
            <AboutMovie />
            <TabsPanel />
            <Footer />
          </>
        }
      />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
