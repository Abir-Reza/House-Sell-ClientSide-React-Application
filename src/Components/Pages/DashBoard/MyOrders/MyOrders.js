import { map } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import DashBoardHeader from '../DashBoardHeader';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    

    useEffect( () => {
        fetch(`http://localhost:5000/myorders/${user.email}`)
        .then(res => res.json())
        .then(data =>  {
            setOrders(data) ;
            console.log("orderlist : ",data)
        })
    },[])


    return (
        <div>
            <DashBoardHeader></DashBoardHeader>
            <h1 className="text-center mt-4">My Orders</h1>

            <Container>
                <Row className="g-2">
                {
                    orders.map(order => <MyOrder
                    key = {order._id}
                    order = {order}

                    
                    >
                    </MyOrder> )
                }
                </Row>
            </Container>



        </div>
    );
};

export default MyOrders;