import styled from '@emotion/styled';

export const FooterWrapper = styled.footer`
  background-color: #5c5c5c;
  display: flex;
  justify-content: center;

  .footerContent {
    width: 1200px;
    padding: 16px;
  }

  .copywright {
    color: white;
    flex-basis: 100%;
    margin-top: 32px;
    width: 100%;
  }
`;

export const FooterSections = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    gap: 32px;
  }
`;

export const FooterSection = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export default FooterWrapper;
