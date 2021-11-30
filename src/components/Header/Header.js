import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
 
const Header = () => {
    return (
        <div className="container" >
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto">
                <Link to="/"><span className="topbar">Home</span></Link>
                <Link to="/services"><span className="topbar">Services</span></Link>
                <Link to="/about"><span className="topbar">About Us</span></Link>
                <Link to="/contact"><span className="topbar">Contact Us</span></Link>
                <h4><i className="text-warning top ">Music Station</i></h4>
             </Nav>
           </Container>
       </Navbar>
        </div>
    );
};

export default Header;