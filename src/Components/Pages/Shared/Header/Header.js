import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="">
           <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                <Navbar.Brand href="#home">Dream House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Explore House</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    
                    </Nav>
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;