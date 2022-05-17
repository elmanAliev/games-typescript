import React, {useState, useEffect, FC} from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Wrapper = styled.main`
    padding: 10px 0;

    @media (min-width: 767px) {
        padding: 20px 0;
    }
`;

export const Main = ({children}: {children: React.ReactNode}) => {

    return (
        <Wrapper>
            <Container>{children}</Container>
        </Wrapper>
    )
}