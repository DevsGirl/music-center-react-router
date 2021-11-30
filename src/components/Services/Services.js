import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = (props) => {
   
  const {services} = props;

    return (
        <div>
            <Container>
            <Row xs={1} md={4} className="g-2 my-4 py-4">
               {
                   services.map(service => <Service 
                    service = {service}></Service>)
               }
            </Row>
        </Container>
           
        </div>
    );
};

export default Services;