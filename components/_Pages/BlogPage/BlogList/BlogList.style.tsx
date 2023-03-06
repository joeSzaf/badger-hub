import styled from '@emotion/styled';
import { sectionContent } from 'styles/shared';

export const BlogListWrapper = styled.section`
  ${sectionContent}
  align-items: left;
  flex-grow: 100;
  flex-direction: column;
  padding: 16px;

  p {
    margin-bottom: 16px;
  }
`;

export default BlogListWrapper;
