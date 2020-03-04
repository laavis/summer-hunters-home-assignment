import * as React from 'react';

import styled from 'styled-components';

const headingDefaults = `
  color: #001147;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
`;

export const HeadingOne = styled.h1`
  ${headingDefaults}
  font-size: 60px;
  line-height: 100px;
  letter-spacing: 2.15px;
  margin: 0;
  overflow-wrap: break-word;
`;

export const HeadingTwo = styled.h2`
  ${headingDefaults}
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 1.15px;
`;

export const HeadingThree = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #fff;
  font-size: 22px;
  line-height: 25px;
  letter-spacing: 1.15px;
`;

export const HeadingFour = styled.h4`
  ${headingDefaults}
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #fff;
  letter-spacing: 1.15px;
`;

export const Paragraph = styled.p`
  color: #191919;
  font-weight: 500;
  letter-spacing: 0.65px;
  line-height: 32px;
  font-family: 'Montserrat', sans-serif;
`;
