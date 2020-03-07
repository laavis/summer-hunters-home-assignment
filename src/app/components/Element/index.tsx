import * as React from 'react';
import styled from 'styled-components';

const ElementImg = styled.img`
  width: 32px;
  align-self: center;
`;

export default ({ element }) => {
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
    }
  };

  return <ElementImg src={setElementIcon()} />;
};
