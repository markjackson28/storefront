import { Container, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">Store Front</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
