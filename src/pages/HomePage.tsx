import { FC, useState, useEffect } from 'react';
import { SORT } from '../config';
import { Controls } from '../components/Controls';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { ICard } from '../interfacases';

interface ICards {
    cards: ICard[];
}


export const HomePage: FC<ICards> = ({ cards }) => {

    const [filteredCards, setFilteredCards] = useState(cards);

    useEffect(() => {
        setFilteredCards(cards)
    }, [cards]);

    const hendleSearch = (search: string, filter: any) => {
        let data = [...cards];

        if (search) {
            data = data.filter(card => card?.name.toLowerCase().includes(search.toLowerCase()));
        }

        if (filter) {
            data = data.filter(a => a.platforms?.some(b => b.platform.name === filter));
        }

        setFilteredCards(data)
    }

    const hendleSort = (sort: any) => {
        let data = [...cards];
        console.log(data)
        if (sort === SORT.RATE_ASC) {
            data = data.sort((a, b) => a.rating - b.rating);
        }

        if (sort === SORT.RATE_DESC) {
            data = data.sort((a, b) => b.rating - a.rating);
        }

        if (sort === SORT.REL_ASC) {
            data = data.sort((a, b) => {
                const date1 = new Date(b.released);
                const date2 = new Date(a.released);
                return date2.getTime() - date1.getTime()
            });
        }

        if (sort === SORT.REL_DESC) {
            data = data.sort((a, b) => {
                const date1 = new Date(b.released);
                const date2 = new Date(a.released);
                return date1.getTime() - date2.getTime()
            });    
        }

        setFilteredCards(data)
        console.log(sort)
    }

    return (
        <>
            <Controls onSearch={hendleSearch} onSort={hendleSort} />
            <List>
                {
                    filteredCards.map(card => {
                        return <Card
                            background_image={card.background_image}
                            name={card.name}
                            rating={card.rating}
                            released={card.released}
                            id={card.id}
                            key={card.id}
                        />
                    })
                }
            </List>
        </>
    )
}