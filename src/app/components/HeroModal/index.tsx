import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingTwo, Paragraph, BoldParagraph, HeadingFour } from '../../components/Typography';
import Health from '../../components/HeroCard/Health';

import { IHero } from '../../types/Hero';
import { HeroAttributes } from '../../components/HeroAttributes';
import { Hero } from 'src/server/entities/hero';

import Element from '../../components/Element';

interface IHeroModalProps {
  open: boolean;
  currentHeroIndex: number;
  heroes: IHero[];
  handleModalClose: any;
}

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
  max-width: 900px;
  height: 85vh;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  z-index: 101;
  overflow: scroll;
  font-family: 'Montserrat', sans-serif;
`;

const TopSection = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-rows: min-content;
  grid-auto-columns: 240px 1fr;
  grid-template-areas: 'name health' 'image attributes';
  background: #001147;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Stats = styled.div`
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

const BottomSection = styled.div`
  padding: 1.5rem;
`;

const Heading = styled(HeadingFour)`
  color: #000;
`;

const ModalParagraph = styled(Paragraph)`
  letter-spacing: initial;
  font-size: 14px;
`;

const CloseButton = styled.div`
  padding: 1rem;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 25px;
  top: 25px;
  /* background-image: url('/public/ic_close.svg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */
  cursor: pointer;
`;

const CloseSvg = styled.svg`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #fff;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;

  line {
    transition: 0.15s ease-out;
    transform-origin: center;
  }

  &:hover {
    line {
      transform: rotate(45deg);

      &:last-of-type {
        transform: rotate(-45deg);
      }
    }
  }
`;

export const HeroModal: React.FC<IHeroModalProps> = ({
  open,
  heroes,
  currentHeroIndex,
  handleModalClose
}) => {
  const hero = heroes[currentHeroIndex];

  return (
    <Overlay open={open}>
      <Modal>
        <CloseButton onClick={handleModalClose}>
          <CloseSvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='15' y1='9' x2='9' y2='15'></line>
            <line x1='9' y1='9' x2='15' y2='15'></line>
          </CloseSvg>
        </CloseButton>
        <TopSection>
          <NameWrapper>
            <Name>{hero.name}</Name>
          </NameWrapper>
          <Health />
          <ImgWrapper>
            <HeroImg src={hero.imgUrl} />
          </ImgWrapper>
          <Stats>
            <Stat>
              {hero.attributes.map((attr, index) => (
                <HeroAttributes key={index} attr={attr} isDarkBg={true} />
              ))}
            </Stat>
          </Stats>
        </TopSection>
        <BottomSection>
          <Heading>Skills</Heading>
          <div>
            {hero.skills.map((skill, index) => (
              <div key={index}>
                <p>{skill.name}</p>
                <Element element={skill.element} />
              </div>
            ))}
          </div>
          <Heading>Description</Heading>
          <ModalParagraph>{hero.description}</ModalParagraph>

          <Heading>Backstory</Heading>
          <ModalParagraph>{hero.backStory}</ModalParagraph>
        </BottomSection>
      </Modal>
    </Overlay>
  );
};
