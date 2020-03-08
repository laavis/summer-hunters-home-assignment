import * as React from 'react';

import styled from 'styled-components';

const Container = styled.header<Partial<ITopBar>>`
  background: #001147;
  height: 60px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    margin-right: 30px;
  }

  @media (max-width: 769px) {
    height: 80px;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 65%;
  @media (max-width: 769px) {
    height: 50%;
  }
`;

const Back = styled.img`
  padding-left: 40px;
  position: relative;
  :active {
    top: 1px;
  }
`;

interface ITopBar {}

export const TopBar: React.FC<ITopBar> = () => (
  <Container>
    <Logo src={'/public/hoxhunt_logo.svg'} />
  </Container>
);
