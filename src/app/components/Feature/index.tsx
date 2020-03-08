import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour } from '../Typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-right: 2rem;
  &:last-of-type {
    margin-right: 0;
  }
`;

const Icon = styled.span`
  width: 20px;
  height: 20px;
  display: block;
  margin-right: 0.5rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  &.health {
    background-image: url('/public/ic_heart.svg');
  }

  &.mana {
    background-image: url('/public/ic_mana.svg');
  }
`;

const Text = styled(HeadingFour)`
  display: flex;
  align-items: center;
`;

export default ({ feature, value }) => {
  return (
    <Container>
      <Icon className={feature} />
      <Text>{value}</Text>
    </Container>
  );
};
