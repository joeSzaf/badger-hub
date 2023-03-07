import styled from '@emotion/styled';
import { Button } from '@mui/material';

const BigButtonWrapper = styled(Button)`
  border-radius: 32px;
  font-size: 36px;
  height: 96px;
  margin-top: -32px;
  width: 400px;

  @media screen and (max-width: 480px) {
    border-radius: 16px;
    font-size: 24px;
    height: 48px;
    margin-top: -24px;
    width: 100%;
  }
`;

export default BigButtonWrapper;
