import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import Text from '../../components/Text';

export const RowOfCard = styled(Row)`
  margin: 30px 0px;
`;
export const TextStyled = styled(Text)`
  display: flex;
  justify-content: flex-start;
  &:after,
  &:before {
    content: '';
    border-top: 1px solid var(--cool-grey2);
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

export const BorderCol = styled(Col)`
  padding: 0px;
`;
