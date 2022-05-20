import React, { FC, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { NotFound } from './pages/NotFound';


import { Header } from './components/Header';
import { Main } from './components/Main';
import { ICard } from './interfacases';

import axios from 'axios';
import {BASE_URL, KEY} from './config';


const App: FC = () => {

  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    if (!cards.length)
      axios.get(BASE_URL + KEY).then(({ data }) => setCards(data.results));
  }, []);

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage cards={cards} />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
