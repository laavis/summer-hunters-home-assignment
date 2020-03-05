import * as React from 'react';
import styled from 'styled-components';
import { IAttribute } from 'src/app/types/Hero';

interface IHeroAttributeProps {
  isDarkBg: boolean;
  attr: IAttribute;
}

const AttributeContainer = styled.ul<{ isDarkBg: boolean }>`
  font-family: 'Montserrat', sans-serif;
  max-width: 40em;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  color: ${props => (props.isDarkBg ? 'white' : 'black')};

  span:last-of-type {
    font-weight: 600;
  }

  li:before {
    float: left;
    width: 0;
    white-space: nowrap;
    background: ${props => (props.isDarkBg ? '#001147' : 'white')};
    color: #fc427b;
    content: '. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . ';
  }
  span:first-child {
    padding-right: 0.33em;
    background: ${props => (props.isDarkBg ? '#001147' : 'white')};
  }
  span + span {
    float: right;
    padding-left: 0.33em;
    background: ${props => (props.isDarkBg ? '#001147' : 'white')};
  }
`;

const AttributeText = styled.span`
  text-transform: capitalize;
`;

export const HeroAttributes: React.FC<IHeroAttributeProps> = ({ attr, isDarkBg }) => {
  return (
    <AttributeContainer isDarkBg={isDarkBg}>
      <li>
        <AttributeText>{attr.name}</AttributeText>
        <span>{attr.value}</span>
      </li>
    </AttributeContainer>
  );
};
