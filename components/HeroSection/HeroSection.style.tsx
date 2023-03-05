import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 900px) {
    align-items: center;
    flex-direction: column;
    gap: 64px;
  }
`;
