import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import { ALL_GAMES } from '../config';

import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ICard } from '../interfacases';

export const HomePage: FC = () => {

    const [cards, setCards] = useState<ICard[]>([]);

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(ALL_GAMES)
            .then(({ data }) => {
                setCards(data.results)
            })
    }, []);

    return (
        <>
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
        </>
    )
}