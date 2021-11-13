import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';


const ManageProduct = ({house}) => {
    const { _id,title,place,country,description,img} = house;

    const handleDeleteProduct = (id) => {
        alert("Confirm Delete ? ");
        const url = `http://localhost:5000/houses/${id}`;
        fetch (url, {
            method : 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('deleted ', data);
        })
    }

   
    return (
        <div>
             <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <span><b>{place},{country}</b></span>

                    <Card.Text>
                        {description}
                    </Card.Text>       

                    <Button onClick={() => handleDeleteProduct(_id)} className='btn-regular' variant="warning">Delete Product</Button>  
                                                                          
                    </Card.Body>
                    
                </Card>
            </Col>
            
        </div>
    );
};

export default ManageProduct;