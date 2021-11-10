import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const DashBoardHeader = () => {
    const {user,logOut} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                <Navbar.Brand href="#home">Dream House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to= "/home#home">Home</Nav.Link> 
                        
                        <Nav.Link as={HashLink} to= "/myorders">My Orders</Nav.Link> 
                        <Nav.Link as={HashLink} to= "/reviews">Review</Nav.Link> 
                        <Nav.Link as={HashLink} to= "/pay">pay</Nav.Link>
                        <Nav.Link as={HashLink} to= "/addproduct">Add a Product</Nav.Link>

                        
                        {user?.email ?
                               <Nav> 
                                    
                                    <Button onClick={logOut} className='btn btn-warning '>LogOut </Button>
                                    
                               </Nav> :
                        
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }                      
                        
                    </Nav>
                    
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default DashBoardHeader;