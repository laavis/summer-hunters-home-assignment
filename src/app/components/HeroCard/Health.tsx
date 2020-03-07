import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour } from '../../components/Typography';

const Health = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: health;
`;

const Icon = styled.span`
  width: 32px;
  height: 32px;
  display: block;
  margin-right: 0.5rem;
  background-image: url('/public/heart.svg');
  background-repeat: no-repeat;
  background-position: center;
`;

const Text = styled(HeadingFour)`
  display: flex;
  align-items: center;
`;

export default () => {
  return (
    <Health>
      <Icon />
      <Text>600</Text>
    </Health>
  );
};
