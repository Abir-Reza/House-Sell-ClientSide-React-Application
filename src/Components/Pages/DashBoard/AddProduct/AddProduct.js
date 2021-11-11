import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';


const AddProduct = () => {

    const [propertyInfo, setPropertyInfo] = useState({}); 
    
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newPropertyinfo ={...propertyInfo};

        newPropertyinfo[field] = value;
        setPropertyInfo(newPropertyinfo);
       
        
    }

    const handleAddPropertySubmit = e => {

         // collect data
         const house = {
            ...propertyInfo
           
        }
        console.log(house);

         // send to the server
        fetch('http://localhost:5000/houses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(propertyInfo)
         })
         .then(res => res.json())
            // .then(data => {

            //     console.log(data);
            //     if (data.insertedId) {
            //         setBookingSuccess(true);
            //         handleBookingClose();
            //     }
            // });
        e.preventDefault();
    }


    
    return (
        <div >
            <h1 className="text-center mt-5">Add a Property</h1>
            <Container>
            <Form  onSubmit={handleAddPropertySubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">  
                    <Form.Control name="title"
                    onBlur={handleOnChange} 
                    placeholder="Property title" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">  
                    <Form.Control name="place"
                    onBlur={handleOnChange} 
                    placeholder="Place" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">  
                    <Form.Control name="country"
                    onBlur={handleOnChange} 
                    placeholder="Country" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDescription">  
                    <Form.Control as="textarea" name="description"
                    onBlur={handleOnChange} 
                    placeholder="Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">  
                    <Form.Control as="textarea" name="img"
                    onBlur={handleOnChange} 
                    placeholder="Image url" />
                </Form.Group>
                
                
                
                <Button variant="success" type="submit">
                    Add property 
                </Button> 
                
                

                
            </Form>
            </Container>
        </div>
    );
};

export default AddProduct;