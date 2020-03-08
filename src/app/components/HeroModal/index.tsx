import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingTwo, Paragraph, BoldParagraph, HeadingFour } from '../../components/Typography';
import { IHero } from '../../types/Hero';
import { HeroAttributes } from '../../components/HeroAttributes';
import Trait from '../../components/Trait';
import Feature from '../../components/Feature';
import Element from '../../components/Element';
import Button from '../../components/Button';

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
    @media (max-width: 769px) {
      display: block;
      overflow: scroll;
    }
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

const Wrapper = styled.div`
  position: relative;
  z-index: 101;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  background: #fff;
  z-index: 101;
  font-family: 'Montserrat', sans-serif;
  transform: translateY(20px);
  transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  opacity: 0;

  &.animate {
    transform: translateY(0);
    opacity: 1;
  }

  @media (min-width: 769px) {
    height: 85vh;
    border-radius: 4px;
  }

  @media (min-width: 1000px) {
    max-width: 900px;
  }
`;

const TopSection = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-column-gap: 1rem;
  grid-template-rows: min-content;
  background: #001147;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'name name'
    'features features'
    'image image'
    'attributes attributes';

  @media (min-width: 769px) {
    grid-template-areas: 'name features' 'image attributes';
  }

  @media (min-width: 1000px) {
    grid-template-columns: 340px 1fr;
  }
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

  @media (max-width: 769px) {
    text-align: center;
  }
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

  button {
    @media (min-width: 769px) {
      display: none;
    }
  }
`;

const Heading = styled(HeadingFour)`
  color: #000;
  flex: 100%;
  font-weight: 800;
`;

const ModalParagraph = styled(Paragraph)`
  letter-spacing: initial;
  font-size: 14px;
`;

const CloseButton = styled.div`
  padding: 0;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(2.5rem, -2.5rem);
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

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 769px) {
    justify-content: space-evenly;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0rem 1.5rem 0;

  &:last-of-type {
    margin-right: 0;
  }

  @media (min-width: 769px) {
    margin: 1rem 3rem 2rem 0;
    grid-template-areas: 'name features' 'image attributes';
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

const Features = styled(Flex)`
  justify-content: flex-end;
  align-items: flex-start;
  grid-area: features;

  @media (max-width: 769px) {
    margin-bottom: 1rem;
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
    <Overlay open={open} className={open ? 'open' : ''}>
      <Wrapper>
        <CloseButton onClick={handleModalClose}>
          <CloseSvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <circle cx='12' cy='12' r='10'></circle>
            <line x1='15' y1='9' x2='9' y2='15'></line>
            <line x1='9' y1='9' x2='15' y2='15'></line>
          </CloseSvg>
        </CloseButton>
        <Modal className={open ? 'animate' : ''}>
          <TopSection>
            <NameWrapper>
              <Name>{hero.name}</Name>
            </NameWrapper>
            <Features>
              <Feature feature='mana' value={hero.mana} />
              <Feature feature='health' value={hero.healthpoints} />
            </Features>
            <ImgWrapper>
              <HeroImg src={hero.imgUrl} />
            </ImgWrapper>
            <Stats>
              <Stat>
                {hero.attributes.map((attr, index) => (
                  <HeroAttributes key={index} attr={attr} isDarkBg={true} />
                ))}
              </Stat>
              <Flex>
                <Trait type='Resistance' element={hero.resistance} iconSize='32px' darkBg={true} />
                <Trait type='Weakness' element={hero.weakness} iconSize='32px' darkBg={true} />
              </Flex>
            </Stats>
          </TopSection>
          <BottomSection>
            <Flex>
              <Heading>Skills</Heading>
              {hero.skills.map((skill, index) => (
                <Skill key={index}>
                  <Element size='48px' element={skill.element} />
                  <SkillDamage>{skill.damage}</SkillDamage>
                  <SkillName>{skill.name}</SkillName>
                </Skill>
              ))}
            </Flex>
            <Heading>Description</Heading>
            <ModalParagraph>{hero.description}</ModalParagraph>
            <Button text='Close' onclick={handleModalClose} />
          </BottomSection>
        </Modal>
      </Wrapper>
    </Overlay>
  );
};
