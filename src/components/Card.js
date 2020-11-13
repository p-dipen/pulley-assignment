import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import TitleDescription from './TitleDescription';
const CardStyled = styled(Row)`
  background-color: var(--light-green);
  border: 1.5px solid var(--clr-secondary);
  box-sizing: border-box;
  border-radius: 5px;
  padding: 14px 0px;
  &:hover {
    cursor: pointer;
    box-shadow: var(--dark-shadow);
    border-color: var(--clr-tertiary);
  }
  -webkit-transition: box-shadow 500ms ease-out;
  -moz-transition: box-shadow 500ms ease-out;
  -o-transition: box-shadow 500ms ease-out;
`;
const ImgContainer = styled(Col)`
  text-align: center;
  padding: 0px;
  img {
    max-height: 67px;
    max-width: 67px;
  }
`;
const card = ({ icon, title, description }) => {
  return (
    <CardStyled>
      <ImgContainer xs={12} sm={3} md={2} lg={2}>
        <img src={icon} alt="icon" />
      </ImgContainer>
      <TitleDescription title={title} description={description} />
    </CardStyled>
  );
};

export default card;
