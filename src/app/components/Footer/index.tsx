import * as React from 'react';

import styled, { keyframes } from 'styled-components';
import { HeadingThree } from '../../components/Typography';

const Img = styled.img`
  margin: 0 auto;
  width: 250px;
`;

const ContactInfo = styled.div`
  flex: 1 0 33%;
  @media (max-width: 769px) {
    margin-top: 30px;
    text-align: center;
  }
`;

const EmptyContainer = styled.div`
  flex: 1 0 33%;
`;

const LeftSection = styled.div`
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 500;
  margin-top: 80px;
  @media (max-width: 769px) {
    margin-top: 50px;
  }
`;

const LogoContainer = styled.div`
  color: #fff;
  font-family: 'Montserrat';
  font-weight: 500;
  display: flex;
`;

const StyledFooter = styled.footer`
  background: #001147;
  /* min-height: 500px; */
  > img {
    padding-top: 100px;
  }
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 769px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <LogoContainer>
          <Img src={'/public/summer_hunters_logo.svg'} />
        </LogoContainer>
        <EmptyContainer />
      </Container>
    </StyledFooter>
  );
};
