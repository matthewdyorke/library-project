import { Navbar, Container } from "react-bootstrap";

export default function Nav() {
  return (
    <Navbar bg="primary">
      <Container>
        <Navbar.Brand href="/books">SDI Library</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
