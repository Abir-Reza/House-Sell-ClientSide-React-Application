import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,isLoading,
        authError, signInWithGoogle} = useAuth();

    const location = useLocation();  
    const history = useHistory(); 

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        console.log(newLoginData);
    }

    const handleLoginSubmit=(e)=> {
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();

        
    }

    const handleSignInGoogle=() => {
        signInWithGoogle(location,history);
    }
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h1> Login </h1>
            {isLoading && <Spinner animation="border" variant="secondary" />}   <br/>

            <Container>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email"
                    onChange={handleOnChange} 
                    type="email" 
                    placeholder="Enter email" />
                    
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    name="password"
                    onChange={handleOnChange}
                    type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Login
                </Button> 
                
                

                
            </Form>
            </Container>
            <br/>
            <NavLink style={{textDecoration:"none" }} to="/register"><Button variant="light">Not registered yet? Register Here</Button></NavLink>
            

        </div>
    );
};

export default Login;