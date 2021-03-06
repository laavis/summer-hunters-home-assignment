import * as React from 'react';
import styled from 'styled-components';
import { BoldParagraph } from '../Typography';
import { Element } from '../Element';

interface ITraitProps {
  type: string;
  element: string;
  iconSize: string;
  darkBg: boolean;
}

const TraitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TraitText = styled(BoldParagraph)<{ darkBg: boolean }>`
  margin: 0;
  color: ${props => (props.darkBg ? '#fff' : '#000')};
`;

export const Trait: React.FC<ITraitProps> = ({ type, element, iconSize, darkBg }) => {
  return (
    <TraitContainer>
      <TraitText darkBg={darkBg}>{type}</TraitText>
      <Element size={iconSize} element={element} />
    </TraitContainer>
  );
};
