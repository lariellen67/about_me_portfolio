import logo from '../../../assets/pandinha.png';
import { Button } from '../../Button';
import {
  Container,
  LeftContent,
  Logo,
  RightContent,
  Menu,
  Item,
  Touchable,
  GitHubIcon,
} from './styles';

function Header() {
  return (
    <Container>
      <LeftContent>
        <Logo src={logo} />
      </LeftContent>
      <RightContent>
        <Menu>
          <Item>
            <span>Home</span>
          </Item>
          <Item>
            <span>About</span>
          </Item>
          <Item>
            <span>Services</span>
          </Item>
          <Item>
            <span>Skills</span>
          </Item>
          <Item>
            <span>My Work</span>
          </Item>
          <Item>
            <span>Contact</span>
          </Item>
        </Menu>
        <Touchable href="https://github.com/lariellen67" target="_blank">
          <GitHubIcon />
        </Touchable>
        <Button text="Contact Me" />
      </RightContent>
    </Container>
  );
}

export { Header };
