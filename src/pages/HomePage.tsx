import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import {BASE_URL, ALL_GAMES} from '../config';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ICard } from '../interfacases';

interface ICards {
    cards: ICard[];
    setCards(data: []): void
}


export const HomePage: FC<ICards> = ({ cards, setCards}) => {

    const [filteredCards, setFilteredCards] = useState<ICard[]>([]);

    useEffect(() => {
        if (!cards.length)
        axios.get(BASE_URL+ALL_GAMES).then(({ data }) => setCards(data.results));
    }, []);

    const hendleSearch = (search: string, filter: {value: string}) => {
        let data = [...cards];

        console.log(filter.value)

        if(filter) {
            data.filter(a => a.platforms?.some(b => b.platform.name === filter.value));
        }
        
        if(search) {
            data.filter(card => card.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredCards(data)
    }

    return (
        <>
            <Controls onSearch={hendleSearch} />
            <List>
                {
                    filteredCards.map(card => {
                        return <Card
                            background_image={card.background_image}
                            name={card.name}
                            rating={card.rating}
                            released={card.released}
                            id = {card.id}
                            key={card.id}
                        />
                    })
                }
            </List>
        </>
    )
}