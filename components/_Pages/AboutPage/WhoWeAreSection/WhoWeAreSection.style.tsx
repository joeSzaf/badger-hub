import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

export const WhoWeAreSectionWrapper = styled.section`
  ${sectionContent}
  align-items: left;
  flex-grow: 100;
  flex-direction: column;
  padding: 16px;
`;

export const AboutBlock = styled.div`
  margin-bottom: 8px;

  p {
    margin-bottom: 16px;
  }

  h2 {
    margin-bottom: 4px;
  }
`;

export default WhoWeAreSectionWrapper;
