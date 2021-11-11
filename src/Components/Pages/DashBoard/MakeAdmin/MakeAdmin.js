import React, { useState } from 'react';
import { Alert, Button, Container, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email,setEmail] =  useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
      
    }

    const handleAdminForm = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                
                console.log(data);
                setSuccess(true);
                
            })

        e.preventDefault();
    }

    return (
        <div>
            <h2 className="text-center mt-5 mb-5">Make an Admin</h2>
            <Container>
                <Form onSubmit={handleAdminForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address of new admin</Form.Label>
                        <Form.Control 
                        onBlur={handleOnBlur}
                        type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Make Admin
                    </Button>
                </Form>

                {success && <Alert variant="success">Admin made successfully</Alert>}
            </Container>
            
        </div>
    );
};

export default MakeAdmin;