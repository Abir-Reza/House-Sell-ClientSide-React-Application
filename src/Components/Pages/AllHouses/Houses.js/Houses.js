import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../Shared/Header/Header';

import House from '../House'

const Houses = () => {
    const [houses,setHouses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allhouses')
        .then(res => res.json())
        .then( data => {
            setHouses(data);
            console.log("data is : ", data);
        })
    },[])


    return (
        <div id="">
            <Header></Header>
            <h1 className="text-center mb-3">Explore Houses</h1>
            <Container>
                <Row className="g-2">
                {
                    houses.map(house => <House
                    key = {house._id}
                    house = {house}

                    
                    >
                    </House> )
                }
                </Row>
            </Container>
        </div>
    );
};

export default Houses;