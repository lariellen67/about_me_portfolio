import styled from 'styled-components';

interface IWelcome {
  welcome?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const WelcomeContent = styled.div<IWelcome>`
  display: ${({ welcome }) => (welcome ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.BACKGROUND.LIGHT};
  width: 33%;
  margin-right: 20px;
  padding: 15px;
`;
