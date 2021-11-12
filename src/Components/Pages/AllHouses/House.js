import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const House = (house) => {
    const {_id,title,place,country,description,img} = house.house;


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
                    
                    <Link to={`/houses/${_id}`}>
                        <Button className='btn-regular' variant="warning">Purchase</Button>  
                    </Link> 
                </Col>

               
            </Row>
        </Col> 

        

    </div>
    );
};

export default House;