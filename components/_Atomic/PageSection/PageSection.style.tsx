import styled from '@emotion/styled';

interface PageSectionWrapperProps {
  backgroundColor?: string;
  textColor?: string;
}

export const PageSectionWrapper = styled.div<PageSectionWrapperProps>`
  background-color: #${({ backgroundColor }) => backgroundColor};
  color: #${({ textColor }) => textColor};
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;
