import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className=' p-2' style={{backgroundColor: "lightblue"}}>
            <div className='container mt-3' >
            <Row className="g-2 ">
                
                <Col sm>
                    <div className="">
                        <h2>Our Services</h2>
                        <ul className="opening-hours">
                            <li><span>House Consultancy</span></li>
                            <li><span>Tax related issue</span></li>
                            <li><span>Rent House</span></li>

                        </ul>
                    </div>
                </Col>

                <Col sm>
                    <div className="d-none d-sm-block">
                        <h2>Get In Touch</h2>
                        <ul className="footer-contact-info">
                            <li>
                                <i className='bx bxs-phone'></i>
                                <span>Phone</span>
                                <a href="tel:882569756">882-569-756</a>
                            </li>

                            <li>
                                <i className='bx bx-map'></i>
                                <span>Address</span>
                                175 5th Ave Premium Area, Germany
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row> 
            </div>   
            
            <p className='text-center'>Copyright © 2021 . Developed By Abir Reza</p>

        </div>
    );
};

export default Footer;