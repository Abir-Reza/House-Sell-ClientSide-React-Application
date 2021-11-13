import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import DashBoardHeader from '../../DashBoard/DashBoardHeader';

const AddReview = () => {
    const {user} = useAuth();

    const [reviewData, setReviewData] = useState({});
    const [rate, setRate] = useState(0); 

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = {...reviewData};
        newReviewData[field] = value;
        setReviewData(newReviewData);
        // console.log(newReviewData);
    }
    const handleRating = e => {
        e.preventDefault();
        const value = e.target.value;

        const ratingInt = parseInt(value);
        setRate(ratingInt);
        console.log(rate);
    }

    const handleSubmit = (e) => {
        const review = {
            ...reviewData,
            userEmail: user.email,
            rating : rate
        }

          // send to the server
          fetch('https://evening-harbor-83022.herokuapp.com/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log("will send to database", review);
            });

        

        e.preventDefault();
    }
    return (
        <div>
            <DashBoardHeader></DashBoardHeader>
            <Container>
                <h2 className="text-center mt-3"> Add Review </h2>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User Email</Form.Label>
                        <Form.Control onChange={handleOnChange} name="email" type="email"  defaultValue={user.email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Comment</Form.Label>
                        <Form.Control onChange={handleOnChange} as="textarea" rows={3}  placeholder="Comment here ..." name="comment"/>
                    </Form.Group>

                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Rate us:</Form.Label>
                        <Form.Control onBlur={handleRating} size="lg" type="text" placeholder="number between 1 and 5" />
                    </Form.Group>
                   


                    <Button variant="primary" type="submit">
                        Submit Review
                    </Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddReview;