import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  HeadingTwo,
  Paragraph,
  BoldParagraph,
  HeadingFour
} from '../../components/Typography';
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

  &.open {
    &::after {
      opacity: 0.7;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 100vh;
    position: fixed;
    background: #000;
    opacity: 0;
    z-index: 100;
    transition: opacity 0.3s ease;
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
  transform: translateY(20px);
  transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: 0;

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }
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

const Skills = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const SkillCircle = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 2px solid #dadada;
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;

  &:last-of-type {
    margin-right: 0;
  }
`;

const SkillDamage = styled.span`
  margin-top: 1rem;
  font-size: 22px;
  font-weight: 800;
`;

const SkillName = styled.span`
  margin-top: 0.5rem;
  font-weight: 600;
`;

export const HeroModal: React.FC<IHeroModalProps> = ({
  open,
  heroes,
  currentHeroIndex,
  handleModalClose
}) => {
  const hero = heroes[currentHeroIndex];

  return (
    <Overlay open={open} className={open ? 'open' : ''}>
      <Modal className={open ? 'animate' : ''}>
        <CloseButton onClick={handleModalClose}>
          <CloseSvg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
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
          <Skills>
            {hero.skills.map((skill, index) => (
              <Skill key={index}>
                <SkillCircle>
                  <Element element={skill.element} />
                </SkillCircle>
                <SkillDamage>{skill.damage}</SkillDamage>
                <SkillName>{skill.name}</SkillName>
              </Skill>
            ))}
          </Skills>
          <Heading>Description</Heading>
          <ModalParagraph>{hero.description}</ModalParagraph>
        </BottomSection>
      </Modal>
    </Overlay>
  );
};
