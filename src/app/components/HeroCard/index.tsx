// It is your job to implement this. More info in README

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour, Paragraph, BoldParagraph } from '../../components/Typography';
import { HeroAttributes } from '../../components/HeroAttributes/index';
import Feature from '../../components/Feature';
import Trait from '../../components/Trait';

import { IHero } from '../../types/Hero';

interface IHeroCardProps extends IHero {
  handleModalOpen: any;
}

const Card = styled.div`
  width: 100%;
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

  @media (min-width: 700px) {
    margin-right: 1rem;
    max-width: 300px;
  }

  @media (min-width: 1400px) {
    margin-right: 2rem;
    padding: 1.5rem;
    flex: 0 0 calc(33.333% - 5rem);
  }

  &:last-of-type {
    margin-right: 0px;
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
  max-height: 200px;
  object-fit: cover;
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

  @media (max-width: 700px) {
    width: 100%;
    padding: 1rem;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TraitContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const TraitText = styled(BoldParagraph)`
  margin: 0;
`;

const TraitImg = styled.img`
  width: 32px;
  align-self: center;
`;

export const HeroCard: React.FC<IHeroCardProps> = ({
  name,
  imgUrl,
  healthpoints,
  resistance,
  weakness,
  attributes,
  handleModalOpen
}) => {
  return (
    <Card>
      <FlexWrapper>
        <HeadingFour>{name} </HeadingFour>
        <Feature feature='health' value={healthpoints} />
      </FlexWrapper>
      <HeroImg src={imgUrl} alt='' />
      <Content>
        {attributes.map((attr, index) => (
          <HeroAttributes key={index} attr={attr} isDarkBg={false} />
        ))}
        <FlexWrapper>
          <Trait type='Resistance' element={resistance} iconSize='32px' darkBg={false} />
          <Trait type='Weakness' element={weakness} iconSize='32px' darkBg={false} />
        </FlexWrapper>
      </Content>
      <ViewButton onClick={handleModalOpen}>Read More</ViewButton>
    </Card>
  );
};
