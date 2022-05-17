import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';

import { Container } from './Container';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.h1`
  color: var(--colors-text);
  font-size: var(--fs-bg);
  text-decoration: none;
  font-weight: var(--fw-bold);
  margin: 0;
`;

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
`;

export const Header = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Games</Title>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light'
                            ? <IoMoonOutline size="14px" />
                            : <IoMoon size="14px" />
                        }
                        {' '}
                        <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    );
};