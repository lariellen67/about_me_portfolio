import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px 70px;
  gap: 20px;
  background-color: ${({ theme }) => theme.palette.GENERAL.PRIMARY};

  @media (max-width: 460px) {
    margin: 54px 0 0;
    padding: 0;
  }
`;
