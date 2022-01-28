import React from "react";
import TopNav from "./TopNav";
import { Navbar,Nav,Container } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
;



function Header() {
  
  return (
    <header>
      <TopNav />
      <Navbar bg="info" variant="dark" expand="lg" collapseOnSelect  >
        <Container>
          <Navbar.Brand href="/">Renotech</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/cart"> <FaShoppingCart /> Cart</Nav.Link>
              <Nav.Link href="/login"><FaUser /> Login</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}


export default Header;
