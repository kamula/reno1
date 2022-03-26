import React from "react";
import TopNav from "./TopNav";
import { Navbar,Nav,Container } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';



function Header() {
  
  return (
    <header>
      <TopNav />
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect  >
        <Container>
          <Navbar.Brand href="/">
          <img
          alt=""
          src="/images/logo.jpeg"
          width="60"
          height="40"
          className="d-inline-block align-top"
          />{' '}
            Renotech
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link><FaUser /> Login</Nav.Link>              
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}


export default Header;
