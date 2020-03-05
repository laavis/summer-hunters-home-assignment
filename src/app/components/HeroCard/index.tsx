// It is your job to implement this. More info in README

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour, Paragraph } from '../../components/Typography';
import { HeroModal } from '../../components/HeroModal/index';
import { HeroAttributes } from '../../components/HeroAttributes/index';

import { IHero } from '../../types/Hero';

const Card = styled.div<{ expanded: boolean }>`
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
  max-width: 320px;

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

const HeroImg = styled.img`
  width: 100%;
`;

const Content = styled.div`
  height: 100%;
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

interface IHeroCardProps extends IHero {
  handleModalOpen: any;
}

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  description,
  healthpoints,
  mana,
  resistance,
  weakness,
  skills,
  attributes,
  handleModalOpen
}) => {
  const [expanded, setExpanded] = React.useState(null);

  return (
    <div>
      <Card expanded={expanded}>
        <HeadingFour>{name}</HeadingFour>
        <HeroImg src={imgUrl} alt='' />
        <Content>
          {attributes.map((attr, index) => (
            <HeroAttributes key={index} attr={attr} isDarkBg={false} />
          ))}
          {/*attributes.map(attr => (
            <AttributeContainer>
              <li>
                <AttributeText>{attr.name}</AttributeText>
                <span>{attr.value}</span>
              </li>
            </AttributeContainer>
          ))*/}
          <div>
            <p>RESISTANCE: {resistance}</p>
            <p>WEAKNESS: {weakness}</p>
          </div>
        </Content>
        <ViewButton onClick={handleModalOpen}>View</ViewButton>
      </Card>
    </div>
  );
};
