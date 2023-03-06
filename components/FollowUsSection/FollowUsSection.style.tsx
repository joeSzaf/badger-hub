import styled from '@emotion/styled';
import { sectionContent } from '../../styles/shared';

export const FollowUsSectionWrapper = styled.section`
  ${sectionContent}
  align-items: center;
  flex-grow: 100;
  justify-content: space-between;
  padding: 16px;

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

    h1,
    h2 {
      width: 100%;
    }
  }

  h2 {
    margin-bottom: 0;
    width: 450px;
  }
`;
