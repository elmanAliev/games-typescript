import styled from 'styled-components';

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '35px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected
        ? 'var(--colors-bg)'
        : 'var(--colors-ui-base)',
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;
  margin-bottom: 10px;
  margin-left: 0px;

    @media (min-width: 767px) {
        width: 150px;
        margin-bottom: 0;
        margin-left: 20px;
    }
  & > * {
    box-shadow: var(--shadow);
  }
  & input {
    padding-left: 0.25rem;
  }
  & * {
    color: var(--colors-text) !important;
  }
  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;