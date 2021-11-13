import React, { useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = ({order}) => {
    const {_id,clientName,clientEmail, houseTitle, housePlace, houseCountry,houseImg, houseDescription, orderStatus} = order;
    const [changedStatus, setChangedStatus] = useState({orderStatus});

    
   
    const handleReject = () => {
        setChangedStatus("Rejected");
        console.log(changedStatus);
    }

    const handleAprove = () => {
        setChangedStatus("Aproved");
        console.log(changedStatus);
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
                            <p >Client Name: {clientName}</p>
                            <p >Email: {clientEmail}</p>
                            <p ><b>orderStatus: {orderStatus}</b></p>
                            
                        </Col>
                        <Col className="text-center align-self-center">
                        
                            <Button onClick={() => handleReject(_id)} className='btn-regular' variant="danger">Reject</Button> 
                            &nbsp; &nbsp;
                            <Button onClick={() => handleAprove(_id)} p className='btn-regular' variant="success">Aprove</Button>    
                           
                        </Col>

                    
                    </Row>
                </Col> 

        </div>
    );
};

export default ManageOrder;