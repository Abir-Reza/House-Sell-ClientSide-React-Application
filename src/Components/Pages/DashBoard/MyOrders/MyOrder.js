import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = ({order}) => {
    const {_id, houseId,houseTitle,housePlace,houseCountry,houseDescription,houseImg, orderStatus} = order;
    
     const handleDelete = (id) => {
         alert("Confirm Delete ? ");
         const url = `https://evening-harbor-83022.herokuapp.com/myorders/${id}`;
         fetch (url, {
             method : 'DELETE'
         })
         .then(res => res.json())
         .then(data => {
             console.log('deleted ', data);
         })
     }
   
    return (
        <div className='d-flex flex-column flex-sm-row mb-3'>
            
        <Col className="hotel-img"  sm={6} md={4} >
          <Image className=" " src={houseImg} thumbnail fluid/>
        </Col>
        <Col className='hotel-body p-3' sm={6} md={8}>
            <h4>{houseTitle}</h4>
            <span><b>{housePlace},{houseCountry}</b></span>
            <br/> 
            <Row>
                <Col >
                    <p className=''>{houseDescription}</p>
                    <p><b>Status: {orderStatus}</b></p>
                    
                </Col>
                <Col className="text-center align-self-center">
                    
                    
                    <Button onClick={() => handleDelete(_id)}  className="btn btn-success">Delete order</Button>
                </Col>
                
            </Row>
        </Col> 

        

    </div>
    );
};

export default MyOrder;