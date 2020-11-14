import React from 'react';
import BigText from '../../components/BigText';
import Text from '../../components/Text';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from '../../components/Card';
import excelLogo from '../../assets/icons/noun_excel_150055 (3) 3.svg';
import csvLogo from '../../assets/icons/noun_papers_2044084 (1) 1.svg';
import { RowOfCard, TextStyled } from './Page1Style';

const Page1 = ({ nextPage }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <BigText weight={800} fontSize={'1.44rem'}>
            Let’s Create your Cap Table!
          </BigText>
        </Col>
        <Col xs={12}>
          <Text>Select how you would like to create your cap table.</Text>
        </Col>
      </Row>
      <RowOfCard>
        <Col xs={12} onClick={() => nextPage()}>
          <Card
            icon={excelLogo}
            title={'Upload Spreadsheet'}
            description={
              'Download a cap table spreadsheet template, fill it out, upload the completed template. '
            }
          />
        </Col>
        <Col xs={12}>
          <TextStyled>
            <Text>Or</Text>
          </TextStyled>
        </Col>
        <Col xs={12}>
          <Card
            icon={csvLogo}
            title={'Upload Investment Documents'}
            description={
              'Download a cap table spreadsheet template, fill it out, upload the completed template.'
            }
            disablecard={true}
          />
        </Col>
      </RowOfCard>
    </Grid>
  );
};

export default Page1;