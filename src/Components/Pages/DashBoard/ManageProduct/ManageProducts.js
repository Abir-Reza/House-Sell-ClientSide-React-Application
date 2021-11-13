import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Products from '../../Home/ProductsHome/Products';
import DashBoardHeader from '../DashBoardHeader';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [houses, setHouses] = useState([]);

    useEffect( ()=> {
        fetch('https://evening-harbor-83022.herokuapp.com/allhouses')
        .then(res => res.json())
        .then(data => setHouses(data))
    },[houses])
    return (
        <div>
            <DashBoardHeader></DashBoardHeader>
            <h2 className="text-center mt-3 mb-3"> Manage Products</h2>
            
            <Container>        
                  <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        houses.map(house => <ManageProduct
                            key = {house._id}
                            house = {house}
                        >
                        </ManageProduct> )
                    }
                </Row>
        </Container>

        </div>
    );
};

export default ManageProducts;