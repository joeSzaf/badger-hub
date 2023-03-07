import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

export const FollowUsSectionWrapper = styled.section`
  ${sectionContent}
  align-items: center;
  flex-grow: 100;
  justify-content: space-between;
  padding: 16px;

  h2 {
    margin-bottom: 0;
    max-width: 450px;
  }

  .MuiButtonBase-root {
    border-radius: 16px;
    border: 3px solid white;
    color: white;
    font-size: 24px;
    height: auto;

    :hover {
      background-color: #474747;
    }
  }

  @media screen and (max-width: 950px) {
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 16px 0;

    h1,
    h2 {
      width: 100%;
    }
  }
`;
