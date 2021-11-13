import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from './Products';

const ProductsInHomePage = () => {
    const [houses,setHouses] = useState([]);

    useEffect( () => {
        fetch('https://evening-harbor-83022.herokuapp.com/houseshomepage')
        .then(res => res.json())
        .then( data => {
            setHouses(data);
        })
    },[])
    return (
        <div id="">
        <h1 className="text-center mt-5 mb-4">Our House Collections</h1>
        <Container>
            
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    houses.map(house => <Products
                        key = {house._id}
                        house = {house}
                    >
                    </Products> )
                }
            </Row>
        </Container>
    </div>
    );
};

export default ProductsInHomePage;