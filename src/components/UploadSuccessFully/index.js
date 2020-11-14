import React from 'react';
import Text from '../Text';
import { StyledCheckbox, Icon } from './UploadSuccessFullyStyle';
import { Row, Col } from 'react-flexbox-grid';
import Button from '../Button';

const UploadSuccessFully = ({ submitted }) => {
  return (
    <Row center="xs">
      <Col xs={12}>
        <StyledCheckbox>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </Col>
      <Col xs={12}>
        <br />
        <Text align="center">Your file is uploaded successfully.</Text>
      </Col>
      <Col>
        <br />
        <Button align="center" onClick={() => submitted()}>
          Upload another file
        </Button>
      </Col>
    </Row>
  );
};

export default UploadSuccessFully;
