import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';

export const HeaderWrapper = styled(AppBar)`
  .largeScreenHeader {
    padding: 8px 0;
  }

  .smallScreenHeader {
    padding: 4px 0;

    .logoText {
      font-size: 32px;
      margin-left: 8px;
    }
  }

  .logoSection {
    align-items: center;
    color: inherit;
    display: flex;

    :hover {
      cursor: pointer;

      .badgerLogo {
        transform: rotate(-15deg);
        transform-origin: bottom left;
      }
    }
  }

  .logoText {
    font-family: Bungee, sans-serif;
    font-size: 36px;
    font-weight: normal;
    letter-spacing: 4px;
    margin-bottom: 0;
    margin-left: 12px;
  }
`;

export const NavButton = styled(Button)`
  font-weight: 700;
  :hover {
    background-color: #474747;
  }

  :active {
    background-color: #5c5c5c;
  }
`;

export default HeaderWrapper;
