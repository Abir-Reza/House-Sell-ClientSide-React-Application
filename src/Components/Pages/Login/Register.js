import React, { useState } from 'react';
import { Alert, Button, Container, Form, Spinner } from 'react-bootstrap';
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory(); 

    const {user,registerUser,isLoading,authError} = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
        
    }

    const handleLoginSubmit=(e)=> {
       
        if(loginData.password !== loginData.password2){
            alert("Password does not match");
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        console.log(loginData);
        alert("form submit");
        e.preventDefault();
    }
    return (
        <div className="d-flex flex-column align-items-center mt-5">
            <h1> Register </h1>
            <Container>
            <Form onSubmit={handleLoginSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={handleOnChange} name="name" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleOnChange} name="email" type="email" placeholder="Enter email" />    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={handleOnChange} name="password2" type="password" placeholder="Confirm Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Register
                </Button> 
                {/* {isLoading && <Spinner animation="border" variant="secondary" />} */}

                {user?.email && 
                <Alert key='success' variant="success"> registered successfully </Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
                
            </Form>
            </Container>
            <br/>
            <NavLink style={{textDecoration:"none" }} to="/login"><Button variant="light">Already registered ? Login Here </Button></NavLink>


           

        </div>
    );
};

export default Register;