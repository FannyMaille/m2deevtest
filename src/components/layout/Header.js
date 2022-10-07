import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import Container from "react-bootstrap/Container";
import SwitchDarkMode from "../switch/SwitchDarkMode";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Cours React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../../App.js">TodoList</Nav.Link>
            <Nav.Link href="../../Api.js">Api</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <SwitchDarkMode />
      </Container>
    </Navbar>
  );
}

export default Header;
