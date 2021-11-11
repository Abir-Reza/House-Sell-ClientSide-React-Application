import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';

const House = (house) => {
    const {title,place,country,description,img} = house.house;


    const handlePurchaseApply = (id) => {

    }

    return (
        <div className='d-flex flex-column flex-sm-row mb-3'>
            
        <Col className="hotel-img"  sm={6} md={4} >
          <Image className=" " src={img} thumbnail fluid/>
        </Col>
        <Col className='hotel-body p-3' sm={6} md={8}>
            <h4>{title}</h4>
            <span><b>{place},{country}</b></span>
            <br/> 
            <Row>
                <Col >
                    <p className=''>{description}</p>
                    
                </Col>
                <Col className="text-center align-self-center">
                    
                    <Button  className="btn btn-success">Apply for Purchase</Button>
                </Col>
            </Row>
        </Col> 

        

    </div>
    );
};

export default House;