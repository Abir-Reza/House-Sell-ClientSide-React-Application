import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        <div className="">
           <Navbar collapseOnSelect expand="md" bg="light">
                <Container>
                <Navbar.Brand href="#home">Dream House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to= "/home#home">Home</Nav.Link> 
                        
                        <Nav.Link as={HashLink} to= "/allhouses">Explore House</Nav.Link> 
                        
                        
                       

                        
                        {user?.email ?
                               <Nav> 
                                    <Nav.Link as={HashLink} to= "/dashboard">DashBoard</Nav.Link>
                                    <Button onClick={logOut} className='btn btn-warning '>LogOut </Button> 
                                     <p className=""> {user.displayName} </p>
                                    
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

export default Header;