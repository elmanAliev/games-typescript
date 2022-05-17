import React, { FC, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { ALL_GAMES } from './config';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Controls } from './components/Controls';
import { List } from './components/List';
import { Card } from './components/Card';
import { ICard } from './interfacases';

const App: FC = () => {
  const [cards, setCards] = useState<ICard[]>([]);

  useEffect(() => {
    axios.get(ALL_GAMES)
      .then(({ data }) => {
        setCards(data.results)
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <Main>
        <Controls />
        <List>
          {
            cards.map(card => {
              return <Card
                background_image={card.background_image}
                name={card.name}
                rating={card.rating}
                released={card.released}
                key={card.id}
              />
            })
          }
        </List>
      </Main>
    </div>
  );
}

export default App;
