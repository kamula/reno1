import React from "react";
import {useDispatch,useSelector } from 'react-redux'
import TopNav from "./TopNav";
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart,FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../actions/userActions'



function Header() {
  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin
  const dispatch = useDispatch()
  const logoutHandler = ()=>{
    dispatch(logout())
  }
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
            <LinkContainer to="/">
                <Nav.Link>
                   Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>
                   About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart</Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.first_name+' '+ userInfo.last_name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ):(
                <LinkContainer to ="/login">
                <Nav.Link><FaUser /> Login</Nav.Link>              
              </LinkContainer>
              )}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}


export default Header;
