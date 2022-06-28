import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg" className="navbar px-5 shadow sticky-top">
      <Container>
        <BSNavbar.Brand href="#home">
          <Logo />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="basic-BSnavbar-nav">
          <Nav className="ms-auto gap-2 text-uppercase">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">service</Nav.Link>
            <Nav.Link href="#openings">openings</Nav.Link>
            <Nav.Link href="#menu">menu</Nav.Link>
            <Nav.Link href="#team">team</Nav.Link>
            <Nav.Link href="#contact">contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
