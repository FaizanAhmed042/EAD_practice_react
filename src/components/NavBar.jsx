import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; 
import { LinkContainer } from 'react-router-bootstrap'; 
import logo from '../assets/ptcl logo.png';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top"> 
      <Navbar.Brand>
        <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '10px' }} /> 
        My React App
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
      <Navbar.Collapse id="basic-navbar-nav"> 
        <Nav className="ml-auto"> 
          <LinkContainer to="/"> 
            <Nav.Link>Home</Nav.Link> 
          </LinkContainer>
          <LinkContainer to="/about"> 
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/products"> 
            <Nav.Link>Products</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact"> 
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
