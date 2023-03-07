import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

export const FooterWrapper = styled.footer`
  ${sectionContent}
  display: flex;
  flex-direction: column;
  flex-grow: 100;
  justify-content: center;
  padding: 16px;

  .copywright {
    color: white;
    flex-basis: 100%;
    margin-top: 32px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    padding: 8px 16px;
  }
`;

export const FooterSections = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 32px;
    justify-content: flex-start;

    h1,
    h2 {
      margin-bottom: 0;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 24px;

    h1 {
      font-size: 24px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

export const FooterSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;

  a {
    color: white;
    text-decoration-color: white;
  }
`;

export default FooterWrapper;
