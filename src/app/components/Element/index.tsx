import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span<{ size: string }>`
  width: ${props => props.size};
  height: ${props => props.size};
`;

const ElementImg = styled.img`
  width: 100%;
  align-self: center;
`;

export default ({ element, size }) => {
  const setElementIcon = () => {
    switch (element) {
      case 'Fire':
        return '/public/ic_fire.svg';
      case 'Water':
        return '/public/ic_water.svg';
      case 'Air':
        return '/public/ic_air.svg';
      case 'Earth':
        return '/public/ic_earth.svg';
      case 'Plasma':
        return '/public/ic_plasma.svg';
      case 'Psychic':
        return '/public/ic_psychic.svg';
      case 'Physical':
        return '/public/ic_physical.svg';
    }
  };

  return (
    <Wrapper size={size}>
      <ElementImg src={setElementIcon()} />
    </Wrapper>
  );
};
