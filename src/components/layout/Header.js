import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import SwitchDarkMode from "../switch/SwitchDarkMode";

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Cours React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <SwitchDarkMode />
      </Container>
    </Navbar>
  );
}

export default Header;
