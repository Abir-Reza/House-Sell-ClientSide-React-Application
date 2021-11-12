import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({review}) => {
    const {comment, userEmail, rating} = review;
    return (
        <div>
            <Col>
            <Card>
                <Card.Header>Rating : {rating}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {comment}
                    </p>
                    <footer className="blockquote-footer">
                        {userEmail}
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
            </Col>
        </div>
    );
};

export default Review;