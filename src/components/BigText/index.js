import styled from 'styled-components';

const BigText = styled.h1`
  color: ${({ color }) => color || 'inherit'};
  display: block;
  margin: ${({ margin }) => margin || '8px 0px'};
  font-weight: ${({ weight }) => weight || '600'};
  ${({ fontSize }) => fontSize && `font-size: ${fontSize};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing:${letterSpacing};`}
  text-align: ${({ align }) => align || 'left'};
  padding: 2px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
`;

export default BigText;
