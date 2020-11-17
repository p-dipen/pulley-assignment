import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Text from './Text';
import mediaSize from '../constants/MediaSize';

const ColTitleDescription = styled(Col)`
  align-items: center;
  display: flex;
`;
const TitleText = styled(Text)`
  margin-bottom: 2px;
  font-size: 0.8125rem;
  @media ${mediaSize.tablet} {
    font-size: 1.1rem;
  }
`;
const TitleDescription = ({ title, description, ...props }) => {
  return (
    <ColTitleDescription {...props}>
      <Row>
        <Col xs={12}>
          <TitleText weight={600}>{title}</TitleText>
        </Col>
        <Col xs={12}>
          <Text>{description}</Text>
        </Col>
      </Row>
    </ColTitleDescription>
  );
};

export default TitleDescription;
