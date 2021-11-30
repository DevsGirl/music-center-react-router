import React from 'react';
import './About.css'
import Feedback from '../../download.jpg' 
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
       <body >
           <div className="container  py-4">
               <div className="row  bg py-4">
      <Row xs={1} md={2} className="g-4">
            <Col>
                <Card.Title><img src={Feedback} alt=""  className="round"/></Card.Title>
            </Col>

            <Col>
                <Card.Text>
                <h1><i className="text-warning" >About Us</i></h1>
                <p className="about-text  title">
                This is a music school website. Here you can learn any kind of musical instrument. You can select your preferred music course. It is an educational institution specialized in the study, training, and research of music. Such an institution can also be known as a school of music, music academy, music faculty, college of music, music department, conservatory, conservatorium or conservatoire. In piano classes, students learn scales, arpeggios, and simple repertoire.
                <br />
                <br />
                <br />
                <br />
                 A working knowledge of the piano is helpful, and many conservatory programs therefore require that students, regardless of their instrument, be able to demonstrate a basic level of keyboard proficiency. A music degree is worth it for most aspiring musicians. Music degrees are essential for employment in the music industry as well as building well-rounded musicians. However, in some areas of music, a degree may not be necessary.
                    </p>
                </Card.Text>
            </Col>
        </Row>
       </div>
       </div>
       </body>
      
    );
};

export default About;