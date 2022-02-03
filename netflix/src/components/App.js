import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './header/header';
import { TabsPanel } from './main/tabs/tabs-panel';
import { Footer } from './footer/footer';
import { LoginPage } from './login/login';
import AboutMovie from './header/about-movie/about-movie';
import { WithLoading } from './loader/loader';

export const StoreContext = React.createContext();

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    let canceled = false;
    setIsLoading(true);
    fetch(`http://localhost:4000/movies`)
      .then((json) => json.json())
      .then((repos) => {
        if (!canceled) {
          setIsLoading(false);
          setRepos({ data: repos?.data, currentUser: 'Irina Verkholetova' });
        }
      });
    return () => (canceled = true);
  }, []);

  return (
    <StoreContext.Provider value={repos}>
      <Routes>
        <Route
          path="/"
          element={
            <WithLoading isLoading={isLoading}>
              <Header />
              <TabsPanel />
              <Footer />
            </WithLoading>
          }
        />
        <Route
          path="/aboutmovie/:id"
          element={
            <WithLoading isLoading={isLoading}>
              <AboutMovie />
              <TabsPanel />
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
    </StoreContext.Provider>
  );
}
