import React from 'react';
import Services from '../Services/Services';
import './Home.css'
import Feedback from '../../feedback.png' 


const Home = (props) => {
    return (
        <div >
            <Services services = {props.services}></Services>
            <div className="feedback bg container">
                <div>
                    <img src={Feedback} alt="" />
                </div>
                <div className="text">
                    <h1><i className="p-8">Our <span className="text-warning fw-semi-bold">Learners</span> Feedback</i></h1>
                    <p className="feedback-text">It had been a fair most experience me that I feel a great assumption that never thougthts that will happens to But provocatives things appropities received without realmost qualifier that happen that never thoughts that never thoughts that will happens to a fear most experience.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;