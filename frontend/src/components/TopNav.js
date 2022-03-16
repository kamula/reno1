import React from "react";
import { Nav } from 'react-bootstrap';
import { FaPhoneAlt,FaWhatsappSquare,FaFacebook } from "react-icons/fa";


function TopNav() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">
            <FaPhoneAlt color="green" size={20}/> 0797847747
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">
            <FaWhatsappSquare color="green" size={20}/> Whatsapp
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">
            <FaFacebook color="blue" size={20}/> Facebook
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default TopNav;
