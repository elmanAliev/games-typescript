import React, { FC, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { GamePage } from './pages/GamePage';
import { NotFound } from './pages/NotFound';


import { Header } from './components/Header';
import { Main } from './components/Main';
import { ICard } from './interfacases';


const App: FC = () => {

  const [cards, setCards] = useState<ICard[]>([]);

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage cards={cards} setCards={setCards} />} />
          <Route path="/games/:id" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
