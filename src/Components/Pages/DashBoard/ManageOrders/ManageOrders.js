import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import DashBoardHeader from '../DashBoardHeader';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect( () => {
        fetch("https://evening-harbor-83022.herokuapp.com/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])

    return (
        <div>
            <DashBoardHeader></DashBoardHeader>
            <h2 className = "text-center mt-3 mb-3"> Manage Orders</h2>
            <Container>
                <Row className="g-2">
                {
                    orders.map(order => <ManageOrder
                    key = {order._id}
                    order = {order}

                    
                    >
                    </ManageOrder> )
                }
                </Row>
            </Container>
        </div>
    );
};

export default ManageOrders;