import * as React from 'react';
import styled, { keyframes } from 'styled-components';
import { HeadingFour, Paragraph } from '../../components/Typography';

const Overlay = styled.div`
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
  max-width: 600px;
  padding: 1rem;
  border-radius: 4px;
  background: #fff;
  z-index: 101;
`;

interface IHeroModalProps {
  open: boolean;
}

export const HeroModal: React.FC<IHeroModalProps> = ({ open, ...props }) => {
  return (
    <Overlay {...props}>
      <Modal>Perkele</Modal>
    </Overlay>
  );
};
