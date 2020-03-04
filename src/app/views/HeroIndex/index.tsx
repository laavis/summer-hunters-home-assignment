import * as React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import styled from 'styled-components';

import { TopBar } from '../../components/TopBar';
import { Hero } from '../../components/Hero';
import { Section } from '../../components/Section';
import { Footer } from '../../components/Footer';
import { HeroCard } from '../../components/HeroCard';
import { HeroModal } from '../../components/HeroModal';

const HEROES_QUERY = gql`
  query {
    heroes {
      name
      imgUrl
      description
      backStory
      strength
      intelligence
      stamina
      healthpoints
      mana
      agility
      speed
      resistance
      weakness
      skills {
        name
        damage
        element
      }
    }
  }
`;

interface IHeroIndexProps {}

interface IHero {
  name: string;
  imgUrl: string;
  description: string;
  backStory: string;
  strength: number;
  intelligence: number;
  stamina: number;
  healthpoints: number;
  mana: number;
  agility: number;
  speed: number;
  resistance: string;
  weakness: string;
  skills: object[];
  // extend this to match query above
}

const HeroCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 50px;
  align-self: center;
  justify-content: center;
  max-width: 1150px;
  @media (min-width: 1400px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const handleLoading = () => <div>Loading...</div>;

const handleError = (message: string) => <div>Error! {message}</div>;

export const HeroIndex: React.FC<IHeroIndexProps> = () => {
  const {
    data: { heroes },
    error,
    loading
  } = useQuery<{ heroes: IHero[] }>(HEROES_QUERY);

  const [open, setOpen] = React.useState(null);

  if (error) {
    return handleError(error.message);
  }

  if (loading) {
    return handleLoading();
  }

  const handleModalOpen = index => isOpen => {
    setOpen(isOpen ? index : null);
    console.log('open modal ', index);
  };

  return (
    <main>
      <TopBar />
      <Hero />
      <Section
        heading={'Hunter Index'}
        paragraph={`
          Professor Hoax gave us this Hunter Index -tool 
          so we can see how our heroes manage against evildoers. 
          Unfortunately he forgot to implement their HeroCards. 
          It's your job to finish his work before we can continue
          on our journey together!
        `}
      />

      {/** Improve this section. Data provided is defined on top in GraphQL query. You can decide what you use and what you dont't.*/}
      <HeroCardContainer>
        {heroes.map((hero, index) => (
          <HeroCard key={index} handleModalOpen={handleModalOpen(index)} {...hero} />
        ))}
      </HeroCardContainer>
      <HeroModal open={open} />

      <Footer />
    </main>
  );
};
