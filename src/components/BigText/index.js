import styled from 'styled-components';
import mediaSize from '../../constants/MediaSize';

const BigText = styled.h1`
  color: ${({ color }) => color || 'inherit'};
  display: block;
  margin: ${({ margin }) => margin || '8px 0px'};
  font-weight: ${({ weight }) => weight || '800 '};
  font-size: ${({ fontSize }) => fontSize || '1.25rem'};
  @media ${mediaSize.tablet} {
    font-size: ${({ fontSize }) => fontSize || '1.44rem'};
  }
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
