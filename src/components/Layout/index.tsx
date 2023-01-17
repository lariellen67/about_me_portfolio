import { Footer } from './Footer';
import { Header } from './Header';
import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

function Layout({ children }: IProps) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export { Layout };
