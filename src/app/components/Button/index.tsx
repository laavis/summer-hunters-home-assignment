import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: #fc427b;
  cursor: pointer;
  transition: transform 0.15s ease;

  @media (max-width: 769px) {
    width: 100%;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

export default ({ text, onclick }) => {
  return <Button onClick={onclick}>{text}</Button>;
};
