import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './header/header';
import { TabsPanel } from './main/tabs/tabs-panel';
import { Footer } from './footer/footer';
import { LoginPage } from './login/login';
import { AboutMovie } from './header/about-movie/about-movie';
import { WithLoading } from './loader/loader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies`)
      .then((json) => json.json())
      .then((repos) => {
        setIsLoading(false);
        setRepos(repos?.data);
      });
  }, []);

  console.log(repos);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <WithLoading isLoading={isLoading}>
            <Header />
            <TabsPanel list={repos} />
            <Footer />
          </WithLoading>
        }
      />
      <Route
        path="/aboutmovie/:id"
        element={
          <WithLoading isLoading={isLoading}>
            <AboutMovie list={repos} />
            <TabsPanel list={repos} />
            <Footer />
          </WithLoading>
        }
      />
      <Route
        path="/login"
        element={
          <WithLoading isLoading={isLoading}>
            <LoginPage />
          </WithLoading>
        }
      />
    </Routes>
  );
}
