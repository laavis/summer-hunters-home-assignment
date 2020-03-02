// It is your job to implement this. More info in README

import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour, Paragraph } from '../../components/Typography';

const Card = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 40px;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12), 0px 12px 20px rgba(0, 0, 0, 0.08);
  /* @media (min-width: 1400px) {
    margin-right: 20px;
    &:last-of-type {
      margin-right: 0px;
    }
  } */
`;

const ImgWrapper = styled.div`
  display: flex;
`;

const HeroImg = styled.img`
  width: 100%;
`;

interface IHeroCardProps {
  name: string;
  imgUrl: string;
  description: string;
  // extend this
}

export const HeroCard: React.FC<IHeroCardProps> = ({ name, imgUrl, description }) => {
  return (
    <Card>
      <HeadingFour>{name}</HeadingFour>
      <HeroImg src={imgUrl} alt='' />
      <div>
        <Paragraph>{description}</Paragraph>
      </div>
    </Card>
  );
};
