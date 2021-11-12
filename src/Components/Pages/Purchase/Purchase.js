import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';


const Purchase = () => {
    const [house, setHouse] = useState({});
    const {houseId} = useParams();
    const {user} = useAuth();
    const intialInfo = {clientName : user.displayName, clientEmail: user.email, address:" ", clientCity: " ", clientCountry: " "};
    const [purchaseInfo, setPurchaseInfo] = useState(intialInfo);

    useEffect( ()=>{
        const url = `http://localhost:5000/houses/${houseId}` ;
        fetch(url)
        .then(res => res.json())
        .then(data => setHouse(data))
    },[])

    console.log(house);
    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPurchaseInfo = { ...purchaseInfo};
        newPurchaseInfo[field] = value;
        setPurchaseInfo(newPurchaseInfo);
        console.log(purchaseInfo);

        
    }
    const handlePurchaseOrder = (e) => {

        const purchaseOrder = {
            ...purchaseInfo,
            houseId: houseId,
            houseTitle: house.title,
            housePlace: house.place,
            houseCountry: house.country,
            houseDescription: house.description,
            houseImg: house.img
            
        }

         // send to the server
         fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(purchaseOrder);
            });

        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>
            
            <h1 className="text-center mt-4 mb-5"> House Detail</h1>

            <Container >

                <Card className="" style={{ width: '35rem', marginBottom:"50px" }}>
                    <Card.Img variant="top" src={house.img} />
                    <Card.Body>
                        <Card.Title>{house.title}</Card.Title>
                        <span><b>{house.place},{house.country}</b></span>

                        <Card.Text>       
                        {house.description}
                        </Card.Text>

                    </Card.Body>
                </Card>
            <Form onSubmit={handlePurchaseOrder}>
                <h1 className="text-center mt-4 mb-5"> Order your Dream House</h1>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Client Name</Form.Label>
                    <Form.Control 
                    onChange={handleonChange} 
                    name="clientName" 
                    defaultValue= {user.displayName}
                    placeholder="Client Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                    onChange={handleonChange} 
                    defaultValue= {user.email}
                    name="clientEmail" type="email" placeholder="Enter email" />
                    </Form.Group>

                    
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onChange={handleonChange} name="address" placeholder="1234 Main St" />
                </Form.Group>

    
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleonChange} name="clientCity" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCountry">
                    <Form.Label>Country</Form.Label>
                    <Form.Control onChange={handleonChange} name="clientCountry" />
                    </Form.Group>
                </Row>


                <Button variant="success" type="submit">
                   Purchase
                </Button>
            </Form>
            </Container>

            <br></br>
            <br></br>
            
        </div>
    );
};

export default Purchase;