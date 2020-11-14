import { Col } from 'react-flexbox-grid';
import styled from 'styled-components';
import Text from '../../components/Text';

export const BackButton = styled(Col)`
  &:hover {
    cursor: pointer;
    color: var(--clr-primary);
    img {
      filter: invert(1);
    }
  }
  display: flex;
  flex-direction: row;
  margin: 20px 0px;
  span {
    margin-left: 20px;
  }
  color: var(--cool-grey);
`;

export const ColCheckbox = styled(Col)`
  padding: 13px;
  border-top: 1px solid var(--cool-grey2);
  ${({ lastitem }) => lastitem && `border-bottom: 1px solid var(--cool-grey2);`}
  &:hover {
    cursor: pointer;
    background-color: var(--light-green2);
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonGroupBy = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const DownloadFile = styled.a`
  text-decoration: none;
`;

export const UploadLabel = styled.div`
  input {
    display: none;
  }
`;

export const TextShow = styled(Text)`
  transition: 500ms ease-int;
`;
