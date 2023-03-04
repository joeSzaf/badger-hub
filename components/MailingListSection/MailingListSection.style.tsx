import styled from '@emotion/styled';

export const MailingListWrapper = styled.footer`
  background-color: #2b2b2b;
  color: white;
  display: flex;
  justify-content: center;

  .sectionContent {
    align-items: center;
    display: flex;
    flex-grow: 100;
    justify-content: space-between;
    max-width: 1200px;
    padding: 16px;

    .MuiButtonBase-root {
      border-radius: 16px;
      border: 3px solid white;
      color: white;
      height: auto;
      font-size: 24px;

      :hover {
        background-color: #474747;
      }
    }

    @media screen and (max-width: 950px) {
      text-align: center;
      flex-direction: column;
      justify-content: center;
      gap: 32px;

      h1,
      h2 {
        width: 100%;
      }
    }
  }

  h2 {
    width: 450px;
  }
`;
