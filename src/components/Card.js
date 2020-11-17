import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import TitleDescription from './TitleDescription';
const CardStyled = styled(Row)`
  background-color: var(--light-green);
  border: 1.5px solid rgba(83, 181, 141, 0.8);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 10.5px 0px;
  ${({ disablecard }) =>
    disablecard
      ? `&:hover { cursor: not-allowed;
        pointer-events: all !important;}`
      : `&:hover {
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    border-color: var(--clr-tertiary);
  }`}
  -webkit-transition: box-shadow 500ms ease-out;
  -moz-transition: box-shadow 500ms ease-out;
  -o-transition: box-shadow 500ms ease-out;
`;
const ImgContainer = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  max-height: 91px;
  width: 67px;
  ${({ iconName }) => iconName === 'csv' && 'img {margin: 8px 0px;}'}
`;
const card = ({
  icon,
  title,
  description,
  disablecard,
  iconHeight,
  iconName,
}) => {
  return (
    <CardStyled disablecard={disablecard || false}>
      <ImgContainer xs={3} sm={2} iconName={iconName}>
        <img src={icon} alt={iconName} height={iconHeight} />
      </ImgContainer>
      <TitleDescription
        xs={9}
        sm={10}
        title={title}
        description={description}
      />
    </CardStyled>
  );
};

export default card;
