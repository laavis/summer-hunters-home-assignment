// It is your job to implement this. More info in README

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour, Paragraph } from '../../components/Typography';

const Card = styled.div`
  width: 100%;
  max-width: 320px;
  padding: 1rem;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 12px 20px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  z-index: 10;
  @media (min-width: 1400px) {
    margin-right: 2rem;
    &:last-of-type {
      margin-right: 0px;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 30%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background: #001147;
    z-index: -1;
  }
`;

const AttributeContainer = styled.ul`
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  max-width: 40em;
  padding: 0;
  overflow-x: hidden;
  list-style: none;

  span:last-of-type {
    font-weight: 600;
  }

  li:before {
    float: left;
    width: 0;
    white-space: nowrap;
    color: #fc427b;
    content: '. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . '
      '. . . . . . . . . . . . . . . . . . . . ' '. . . . . . . . . . . . . . . . . . . . ';
  }
  span:first-child {
    padding-right: 0.33em;
    background: white;
  }
  span + span {
    float: right;
    padding-left: 0.33em;
    background: white;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const HeroImg = styled.img`
  width: 100%;
`;

const ViewButton = styled.button`
  width: fit-content;
  padding: 0.5rem 1rem;
  align-self: flex-end;
  border: none;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  background: #fc427b;
  cursor: pointer;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Description = styled(Paragraph)`
  font-size: 14px;
  line-height: 24px;
`;

const Content = styled.div`
  height: 100%;
`;

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  healthpoints: number;
  strength: number;
  stamina: number;
  handleModalOpen: any;
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  healthpoints,
  strength,
  stamina,
  handleModalOpen
}) => {
  const [open, setOpen] = React.useState(null);

  return (
    <Card>
      <HeadingFour>{name}</HeadingFour>
      <HeroImg src={imgUrl} alt='' />
      <Content>
        <AttributeContainer>
          <li>
            <span>Health</span>
            <span>{healthpoints}</span>
          </li>
        </AttributeContainer>
        <AttributeContainer>
          <li>
            <span>Strength</span>
            <span>{strength}</span>
          </li>
        </AttributeContainer>
        <AttributeContainer>
          <li>
            <span>Stamina</span>
            <span>{stamina}</span>
          </li>
        </AttributeContainer>
        <Description>{description}</Description>
      </Content>
      <ViewButton onClick={handleModalOpen}>View</ViewButton>
    </Card>
  );
};
