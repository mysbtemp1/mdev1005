import React from 'react';
import Header, { Footer } from './Theme';

const About = () => {
    return (
        <div>
            <Header headingText='About' />

            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <h1>What functional components are used.</h1>
                    <h5 className="w3-padding-32">
                        We defined extracted components like Header, Footer in Theme.js and composed them to the pages where they needed.
                    </h5>
                </div>
            </div>

            <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div className="w3-content">
                    <h1>What media query used.</h1>
                    <h5 className="w3-padding-32">
                        Here, we choosed <a href='https://openweathermap.org/' target="_blank">openweathermap</a> API and its query structure to receive json data.
                    </h5>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default About;