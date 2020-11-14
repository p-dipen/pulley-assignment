import mediaSize from '../constants/MediaSize';
import styled from 'styled-components';

const Button = styled.button`
  margin: 0px 10px;
  padding: ${({ padding }) => padding || '10px'};
  border-radius: 5px;
  border: 1px;
  color: ${({ color }) => color || 'white'};
  font-size: ${({ fontSize }) => fontSize || '0.75rem'};
  ${({ weight }) => weight && `font-weight: ${weight}`};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--clr-secondary)'};
  text-align: ${({ align }) => align || 'left'};
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${mediaSize.tablet} {
    font-size: ${({ fontSize }) => fontSize || '1rem'};
  }
  cursor: pointer;
  text-decoration: none;
  outline: none;
  white-space: nowrap;
  ::-moz-focus-inner {
    border: 0;
  }
  user-select: none;
  transition: all 0.1s ease-in;
  &:hover {
    opacity: 0.9;
    transform: translateY(-3px);
  }
  img {
    filter: invert(1);
  }
  display: flex;
  align-items: center;
`;

export default Button;
