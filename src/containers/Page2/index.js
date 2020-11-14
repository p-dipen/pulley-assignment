import React, { useState, useRef } from 'react';
import BigText from '../../components/BigText';
import Text from '../../components/Text';
import { Grid, Row, Col } from 'react-flexbox-grid';
import backIcon from '../../assets/icons/Path 131.svg';
import Checkbox from '../../components/Checkbox';
import TitleDescription from '../../components/TitleDescription';
import { Options } from '../../constants/Options';
import Button from '../../components/Button';
import TemplateExcel from '../../assets/templates/templateCap.xlsx';
import {
  BackButton,
  ButtonGroupBy,
  CheckBoxLabel,
  ColCheckbox,
  DownloadFile,
  UploadLabel,
  TextShow,
} from './Page2Style';
import { isFileTypeXlsx } from '../../utils/helper';
import UploadSuccessFully from '../../components/UploadSuccessFully';
import Modal from '../../components/Modal';

const Page2 = ({ prevPage }) => {
  const [options, setOptions] = useState(Options);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const inputEl = useRef(null);
  const onChangeChecked = (index) => {
    let opts = [...options];
    if ('checked' in opts[index]) {
      opts[index]['checked'] = !opts[index]['checked'];
    } else {
      opts[index]['checked'] = true;
    }
    setOptions(opts);
  };
  const onFileChange = (e) => {
    if (e.target.value) {
      const validate = isFileTypeXlsx(e.target.value);
      if (!validate) {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
        inputEl.current.value = null;
      } else {
        setShowError(false);
        inputEl.current.value = null;
        setShowSuccess(true);
      }
    }
  };
  const openChooseFile = (e) => {
    setShowError(false);
    inputEl.current.click();
  };
  const uploadAnotherFile = () => {
    let opts = [...options];
    opts.map((value) => (value.checked = false));
    setOptions(opts);
    prevPage();
  };
  return (
    <Grid>
      {showSuccess && (
        <Modal
          visible={showSuccess}
          children={
            <UploadSuccessFully submitted={() => uploadAnotherFile()} />
          }
        />
      )}
      <Row>
        <Col xs={12}>
          <BigText weight={800} fontSize={'1.44rem'}>
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
            lastitem={options.length - 1 === index || false}
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
      <ButtonGroupBy>
        <DownloadFile href={TemplateExcel} download="TemplateExcel.xlsx">
          <Button>
            <img
              src="https://img.icons8.com/material/16/000000/download--v1.png"
              alt="download"
            />
            Download
          </Button>
        </DownloadFile>
        <UploadLabel>
          <input
            type="file"
            ref={inputEl}
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={onFileChange}
          />
          <Button onClick={openChooseFile}>
            <img
              src="https://img.icons8.com/material/16/000000/upload--v1.png"
              alt="upload"
            />
            Upload
          </Button>
        </UploadLabel>
      </ButtonGroupBy>
      {showError && (
        <Row center="xs">
          <Col xs={12}>
            <TextShow align="center" color="red">
              You have uploaded an invalid file type.
            </TextShow>
          </Col>
        </Row>
      )}
    </Grid>
  );
};

export default Page2;
