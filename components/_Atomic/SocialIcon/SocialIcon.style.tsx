import styled from '@emotion/styled';

const SocialIconWrapper = styled.div`
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  height: 48px;
  width: 48px;

  svg {
    color: #5c5c5c;
    path {
      fill: #5c5c5c;
    }
    height: 32px;
  }

  :hover {
    background-color: #f5f5f5;
    cursor: pointer;

    svg {
      color: #707070;
      path {
        fill: #707070;
      }
      height: 32px;
    }
  }
`;

export const SocialGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export default SocialIconWrapper;
