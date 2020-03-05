import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingTwo, Paragraph } from '../../components/Typography';

import { IHero } from '../../types/Hero';
import { HeroAttributes } from '../../components/HeroAttributes';

const Overlay = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};

  &::after {
    content: '';
    width: 100%;
    height: 100vh;
    position: fixed;
    background: #000;
    opacity: 0.7;
    z-index: 100;
  }
`;

const Modal = styled.div`
  width: 100%;
  max-width: 700px;
  height: 70vh;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  z-index: 101;
  font-family: 'Montserrat', sans-serif;
`;

const TopSection = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-rows: min-content;
  grid-auto-columns: 240px 1fr;
  grid-template-areas: 'name name' 'image attributes';
  background: #001147;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Stats = styled.div`
  /* display: flex; */
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  grid-area: attributes;
`;

const Stat = styled.div`
  flex: 0 0 50%;
`;

const NameWrapper = styled.div`
  grid-area: name;
`;

const Name = styled(HeadingTwo)`
  color: #fff;
  margin: 0 0 1.5rem 0;
`;

const ImgWrapper = styled.div`
  grid-area: image;
  color: #fff;
`;

interface IHeroModalProps {
  open: boolean;
  currentHeroIndex: number;
  heroes: IHero[];
}

export const HeroModal: React.FC<IHeroModalProps> = ({ open, heroes, currentHeroIndex }) => {
  const hero = heroes[currentHeroIndex];

  return (
    <Overlay open={open}>
      <Modal>
        <TopSection>
          <NameWrapper>
            <Name>{hero.name}</Name>
          </NameWrapper>
          <ImgWrapper>
            <HeroImg src={hero.imgUrl} />
          </ImgWrapper>
          <Stats>
            <Stat>
              <p>terve</p>
            </Stat>
            <Stat>
              {hero.attributes.map((attr, index) => (
                <HeroAttributes key={index} attr={attr} isDarkBg={true} />
              ))}
            </Stat>
          </Stats>
        </TopSection>

        <Paragraph>{hero.description}</Paragraph>
      </Modal>
    </Overlay>
  );
};
