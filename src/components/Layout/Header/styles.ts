import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.palette.GENERAL.SECONDARY};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px 70px;
`;

export const Logo = styled.img`
  height: 26px;
`;

export const RightContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 70px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  list-style: none;
  text-decoration: none;
`;

export const Item = styled.li`
  text-decoration: none;
  list-style: none;

  span {
    font-size: 14px;
    font-family: 'Share Tech Mono', monospace;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.TEXT.CONTRAST_TWO};

    &:hover {
      color: ${({ theme }) => theme.palette.LAYOUT.BUTTON};
      cursor: pointer;
    }
  }
`;

export const Touchable = styled.a`
  padding: 0;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  margin: 0 35px;
`;

export const GitHubIcon = styled(FaGithub).attrs((props) => ({
  ...props,
  backgroundColor: 'transparent',
  color: props.theme.palette.TEXT.CONTRAST_TWO,
  size: 18,
}))``;
