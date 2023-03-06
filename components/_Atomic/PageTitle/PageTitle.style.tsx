import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

const PageTitleWrapper = styled.div`
  ${sectionContent}
  align-items: center;
  flex-grow: 100;
  justify-content: space-between;
  padding: 8px;

  h1 {
    margin: 0;
  }
`;

export default PageTitleWrapper;
