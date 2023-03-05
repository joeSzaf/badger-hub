import styled from '@emotion/styled';

export const FollowUsSectionWrapper = styled.section`
  background-color: white;
  color: 2b2b2b;
  display: flex;
  justify-content: center;
  padding: 16px 0;

  .sectionContent {
    align-items: center;
    display: flex;
    flex-grow: 100;
    justify-content: space-between;
    max-width: 1200px;
    padding: 16px;

    h2 {
      margin-bottom: 0;
    }

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
