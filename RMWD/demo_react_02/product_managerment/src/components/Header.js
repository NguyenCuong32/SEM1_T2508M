import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className=" bg-secondary">
      <Container>
        <Navbar.Brand>My Class</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home" className="text-light fw-bold mx-3" href="#home">Home</NavLink>
            <NavLink to="/product" className="text-light fw-bold mx-3" href="#product">Products</NavLink>
            <NavLink to="/aboutme" className="text-light fw-bold mx-3" href="#aboutMe">About Me</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
