import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

export const MailingListWrapper = styled.section`
  ${sectionContent}
  align-items: center;
  justify-content: space-between;
  padding: 64px 16px;

  h2 {
    max-width: 450px;
  }

  .MuiButtonBase-root {
    border-radius: 16px;
    border: 3px solid white;
    color: white;
    font-size: 24px;

    :hover {
      background-color: #474747;
      border: 3px solid white;
    }
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 16px;
    justify-content: center;
    text-align: center;

    h1,
    h2 {
      width: 100%;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 16px 16px;

    .MuiButtonBase-root {
      font-size: 16px;
    }

    h2 {
      font-size: 16px;
    }
  }
`;
