import styled, { keyframes } from 'styled-components';

export interface ISliderProps {
  active?: boolean;
}

interface ISlideControlProps {
  rightControl?: boolean;
}

const fade = keyframes`
  from {opacity: .4} 
  to {opacity: 1}
`

export const CarouselContainer = styled.div` 
  max-width: 800px;
  overflow: hidden;
  position: relative;
  margin: auto;
`;

export const Slider = styled.div<ISliderProps>`
  display: ${props => props.active ? 'block' : 'none'};
  height: 600px;
  animation-name: ${fade};
  animation-duration: 1.5s;
`;

export const SlideControl = styled.a<ISlideControlProps>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: ${props => props.rightControl ? '3px 0 0 3px' : '0 3px 3px 0'};
  user-select: none;
  right: ${props => props.rightControl ? 0 : 'auto'};
  background-color: rgba(0,0,0,0.6);

  :hover {
    background-color: rgba(0,0,0,1.2);
  }
`;