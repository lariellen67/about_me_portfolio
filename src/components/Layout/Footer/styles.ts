import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.GENERAL.SECONDARY};
  color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};
  padding: 40px 70px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;
