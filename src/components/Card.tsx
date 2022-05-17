import styled from 'styled-components';
import { FC } from 'react';
import { ICard } from '../interfacases';

const Wrapper = styled.article`
   background-color: var(--colors-ui-base);
   color: var(--colors-text);
   border-radius: var(--radii);
   box-shadow: var(--shadow);
   overflow: hidden;
   transition: all 0.1s linear;
   text-decoration: none;
   cursor: pointer;

   :hover{
       opacity: .6;
   }
`;

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
`;

const CardBody = styled.div`
    padding: 10px;
`;

const CardTitle = styled.h2`
    font-size: var(--fs-bg);
    font-weight: var(--fw-bold);
    margin: 0;
    margin-right: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
`;

const CardDetails = styled.p`
    font-size: var(--fs-sm);
    margin: 0;
    font-weight: var(--fw-light);
`;


export const Card = ({ background_image, name, rating, released }: ICard) => {
    return (
    <Wrapper>
        <CardImage src={background_image} alt={name} />
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardInfo>
                <CardDetails>{rating}</CardDetails>
                <CardDetails>{released}</CardDetails>
            </CardInfo>
        </CardBody>
    </Wrapper>
    )
}