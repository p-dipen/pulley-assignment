import React from 'react';
import BigText from '../components/BigText';
import Text from '../components/Text';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../components/Card';
import excelLogo from '../assets/icons/noun_excel_150055 (3) 3.svg';
import csvLogo from '../assets/icons/noun_papers_2044084 (1) 1.svg';
import styled from 'styled-components';
const GridPage = styled(Grid)``;
const RowOfCard = styled(Row)`
  margin: 30px 0px;
`;
const TextStyled = styled(Text)`
  display: flex;
  justify-content: flex-start;
  &:after,
  &:before {
    content: '';
    border-top: 1px solid var(--cool-grey);
    margin: 0 20px 0 0;
    align-self: center;
  }
  &:before {
    flex: 0.1 0;
  }
  &:after {
    margin: 0 0 0 20px;
    flex: 1 0;
  }
  margin: 20px 0px;
`;
const Page1 = ({ nextPage }) => {
  return (
    <GridPage>
      <Row>
        <Col xs={12}>
          <BigText weight={800} fontSize={'1.8rem'}>
            Let’s Create your Cap Table!
          </BigText>
        </Col>
        <Col xs={12}>
          <Text>Select how you would like to create your cap table.</Text>
        </Col>
      </Row>
      <RowOfCard>
        <Col lgOffset={2} xs={12} lg={8} onClick={() => nextPage()}>
          <Card
            icon={excelLogo}
            title={'Upload Spreadsheet'}
            description={
              'Download a cap table spreadsheet template, fill it out, upload the completed template. '
            }
          />
        </Col>
        <Col lgOffset={2} xs={12} lg={8}>
          <TextStyled>
            <Text>Or</Text>
          </TextStyled>
        </Col>
        <Col lgOffset={2} xs={12} lg={8} onClick={() => nextPage()}>
          <Card
            icon={csvLogo}
            title={'Upload Investment Documents'}
            description={
              'Download a cap table spreadsheet template, fill it out, upload the completed template.'
            }
          />
        </Col>
      </RowOfCard>
    </GridPage>
  );
};

export default Page1;
