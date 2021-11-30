import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';

const Contact = () => {
  
    return (
        <div className="bg container">
         <div className="col-6 py-4 my-4 container ">
             <h3 className="mb-4 pb-4">Fill Up The Form</h3>
         <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <button className="submit">submit</button>
            </Form.Group>
         
        </Form>
        </div>
</div>
    );
};

export default Contact;