import React from 'react';
import { Button, Card, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Products = (house) => {
    const { _id,title,place,country,description,img} = house.house;


    return (
        <div className='d-flex flex-column flex-sm-row mb-3'>
            
            
            <Col>
                <Card >
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <span><b>{place},{country}</b></span>

                    <Card.Text>
                        {description}
                    </Card.Text>       

                    <Link to={`/houses/${_id}`}>
                        <Button className='btn-regular' variant="warning">Purchase</Button>  
                    </Link>                   
                                     
                    </Card.Body>
                    
                </Card>
            </Col>
            

        

    </div>
    );
};

export default Products;