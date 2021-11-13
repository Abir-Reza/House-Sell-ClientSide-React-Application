import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import DashBoardHeader from '../DashBoardHeader';
import ManageOrder from './ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect( () => {
        fetch("http://localhost:5000/orders")
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [orders])

    return (
        <div>
            <DashBoardHeader></DashBoardHeader>
            <h2 className = "text-center mt-3 mb-3"> Manage Orders</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Client Name</th>
                    <th>Product Title</th>
                    <th>Property Location</th>
                    <th>Action</th>

                    </tr>
                </thead>

                {
                    orders.map ( order => <ManageOrder
                    
                        key= {order._id}
                        order= {order}
                    ></ManageOrder> )
                }
                
            </Table>
        </div>
    );
};

export default ManageOrders;