import React, { useState } from 'react';
import BigText from '../components/BigText';
import Text from '../components/Text';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import backIcon from '../assets/icons/Path 131.svg';
import Checkbox from '../components/Checkbox';
import TitleDescription from '../components/TitleDescription';
import { Options } from '../constants/Options';

const BackButton = styled(Col)`
  &:hover {
    cursor: pointer;
    color: var(--clr-primary);
  }
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  span {
    margin-left: 20px;
  }
  color: var(--cool-grey);
`;

const ColCheckbox = styled(Col)`
  padding: 10px;
  border-top: 1px solid var(--cool-grey);
  ${({ lastItem }) =>
    lastItem ? `border-bottom: 1px solid var(--cool-grey);` : ''}
  &:hover {
    cursor: pointer;
    background-color: var(--light-green2);
  }
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Page2 = ({ prevPage }) => {
  const [options, setOptions] = useState(Options);
  const onChangeChecked = (index) => {
    let opts = [...options];
    if ('checked' in opts[index]) {
      opts[index]['checked'] = !opts[index]['checked'];
    } else {
      opts[index]['checked'] = true;
    }
    setOptions(opts);
  };
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <BigText weight={800} fontSize={'1.8rem'}>
            Let’s Create your Cap Table!
          </BigText>
        </Col>
        <Col xs={12}>
          <Text>
            Stuck on what to do ? You can always come back here to check on what
            else you’ll need to add to complete your cap table.
          </Text>
        </Col>
      </Row>
      <Row>
        <BackButton xs={12} onClick={() => prevPage()}>
          <img src={backIcon} alt="icon" />
          <Text>Upload Investment Documents</Text>
        </BackButton>
      </Row>
      <Row>
        {options.map((value, index) => (
          <ColCheckbox
            xs={12}
            lastItem={options.length - 1 === index || false}
            key={index}
          >
            <CheckBoxLabel>
              <Checkbox
                onChange={() => onChangeChecked(index)}
                checked={value.checked || false}
              />
              <TitleDescription
                title={value.title}
                description={value.description}
              />
            </CheckBoxLabel>
          </ColCheckbox>
        ))}
      </Row>
    </Grid>
  );
};

export default Page2;
