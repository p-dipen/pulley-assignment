import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Text from './Text';
const ColTitleDescription = styled(Col)`
  align-items: center;
  display: flex;
`;
const TitleText = styled(Text)`
  margin-bottom: 2px;
`;
const TitleDescription = ({ title, description }) => {
  return (
    <ColTitleDescription xs={12} sm={9} md={10} lg={10}>
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
