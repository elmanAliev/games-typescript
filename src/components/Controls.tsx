import React, { useState, useEffect, FC } from 'react';
import styled from 'styled-components';
import { Search } from './Search';
import { CustomSelect } from './CustomSelect';

const filterOptions = [
    { value: 'ratingDown', label: 'Рейтинг (убыв.)' },
    { value: 'ratingUp', label: 'Рейтинг (возр.)' },
    { value: 'releasedDown', label: 'Релиз (убыв.)' },
    { value: 'releasedUp', label: 'Релиз (возр.)' },
];

const sortOptions = [
    { value: 'PC', label: 'PC' },
    { value: 'PlayStation 5', label: 'PlayStation 5' },
    { value: 'Xbox One', label: 'Xbox One' },
    { value: 'PlayStation 4', label: 'PlayStation 4' },
    { value: 'Xbox Series S/X', label: 'Xbox Series S/X' },
];

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 767px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const Controls = () => {

    const [search, setSearch] = useState<string>('');
    const [selectedSort, setSelectedSort] = useState<string>('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const searchHendler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        setSearch(e.target.value);
    }

    // Сортировка по рейтингу и дате релиза игры (в обе стороны)
    function sortCards(sort: any) : void {
        setSelectedSort(sort);
    }

    // Фильтрация по платформам
    function filterCards(filter: any) : void {
        setSelectedFilter(filter);
    }

    return (
        <div>
            <Wrapper>
                <Search value={search} searchHendler={searchHendler} />
                <SelectWrapper>
                    <CustomSelect
                        options={filterOptions}
                        placeholder="Сортировка"
                        isClearable
                        isSearchable={false}
                        value={selectedSort}
                        onChange={sortCards}
                    />
                    <CustomSelect
                        options={sortOptions}
                        placeholder="Фильтр"
                        isClearable
                        isSearchable={false}
                        value={selectedFilter}
                        onChange={filterCards}
                    />
                </SelectWrapper>
            </Wrapper>
        </div>
    )
}