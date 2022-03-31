import React from "react"
import { Row,Col } from 'react-bootstrap'
import { FaPhoneAlt,FaWhatsappSquare,FaFacebook } from "react-icons/fa";

const Footer = () => <footer  className="page-footer font-small blue pt-4 bg-dark text-white">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">About Us</h5>
                <ul className="list-unstyled" >
                    <li ><a className="text-white" href="#!">Who We are</a></li>
                    <li><a className="text-white" href="#!">Terms of sale</a></li>
                    <li><a className="text-white" href="#!">Customer Service</a></li>
                    <li><a className="text-white" href="#!">Delivery Information</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Support</h5>
                <ul className="list-unstyled">
                    <li><a className="text-white" href="#!">Help</a></li>
                    <li><a className="text-white" href="#!">FAQS</a></li>
                    <li><a className="text-white" href="#!">Terms of Service</a></li>
                    <li><a className="text-white" href="#!">Privacy</a></li>
                </ul>
            </div>
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white">Get In Touch</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus vitae suscipit</p>
                <Row>
                  <Col>
                    <FaPhoneAlt color="green" size={20}/> 0797847747
                  </Col>
                  <Col>
                    <FaWhatsappSquare color="green" size={20}/> Whatsapp
                  </Col>
                  <Col>
                  <FaFacebook color="blue" size={22}/> Facebook
                  </Col>
                </Row>
                
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">Copyright &copy; renotech
    </div>

</footer>

export default Footer