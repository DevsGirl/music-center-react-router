import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
   
    const{name, description, price, img} = props.service;
    return (
        <div>
             <Col>
              <Card>
                <Card.Img variant="top" className="img-height" src={img} />
                <Card.Body>
                <Card.Title><h3>{name}</h3>
                </Card.Title>
                <Card.Text>
                {description.slice(0,150)}
                <br />
                <h5 className="text-warning">{price}</h5> 
                <button className="enroll">Enroll</button>
                </Card.Text>
                </Card.Body>
             </Card>
         </Col>
        </div>
    );
};

export default Service;