import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const DashBoardHeader = () => {
    const {user,logOut} = useAuth();
    const {admin} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="me-auto"> 
                        <Nav.Link as={HashLink} to= "/home">Back to Home</Nav.Link> 
                    </Nav>
                    <Nav className="ms-auto">
                        
                        {
                            admin && 
                            <Nav>
                                <h5 className="navbar-text">Admin DashBoard</h5>
                                <Nav.Link as={HashLink} to= "/manageallorders">Manage All Orders</Nav.Link>
                                <Nav.Link as={HashLink} to= "/addproduct">Add a Product</Nav.Link>
                                <Nav.Link as={HashLink} to= "/manageproduct">Manage Product</Nav.Link>
                                <Nav.Link as={HashLink} to= "/makeadmin">Make Admin</Nav.Link>
                            </Nav> } 

                            {
                                !admin && 
                                <Nav>
                                     <h5 className="navbar-text  ">User DashBoard</h5>
                                    <Nav.Link as={HashLink} to= "/myorders">My Orders</Nav.Link> 
                                    <Nav.Link as={HashLink} to= "/reviews">Reviews</Nav.Link> 
                                    <Nav.Link as={HashLink} to= "/pay">pay</Nav.Link>
                            </Nav>
                            }
                                             
                               <Nav> 
                                    
                                    <Button onClick={logOut} className='btn btn-warning '>LogOut </Button>
                                    
                               </Nav> 
                                                
                        
                    </Nav>
                    
                    
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default DashBoardHeader;