import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';
import { FC } from 'react';

const InputContainer = styled.label`
    background-color: var(--colors-ui-base);
    padding: 10px;
    display: flex;
    align-items: center;
    border-radius: var(--radii);
    box-shadow: var(--shadow);
    width: 100%;
    margin-bottom: 10px;

    @media (min-width: 767px) {
        width: 280px;
        margin-bottom: 0;
    }
`;

const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'Поиск',
})`
    margin-left: 5px;
    border: none;
    outline: none;
    color: var(--colors-text);
    background-color: transparent;
`;

interface SearchProps {
    value: string;
    searchHendler(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const Search: FC<SearchProps> = ({ value, searchHendler}) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input value={value} onChange={searchHendler} />
        </InputContainer>
    )
}