import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/Homepage';
import { GamePage } from './pages/GamePage';
import { NotFound } from './pages/NotFound';


import { Header } from './components/Header';
import { Main } from './components/Main';


const App: FC = () => {

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/games/:name" element={GamePage} />
          <Route element={NotFound} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
