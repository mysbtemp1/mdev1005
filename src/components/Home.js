import React from 'react';
import  Header, { Footer }  from './Theme';

const Home = () => {
    return (
        
        <div>
            <Header headingText='Welcome' />

            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <h1>Technology and Template.</h1>
                        <h5 className="w3-padding-32">
                            We created this react application in guidance of our faculty using&nbsp;
                            <a href='https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page' target="_blank">w3schools</a>&nbsp;
                            and  <a href='https://reactjs.org/' target="_blank">reactjs</a> documentations.
                        </h5>
                        <p className="w3-text-grey">
                            This application contains 4 seperate webpages using proper html tags. We used functional components for such as 
                            header and pages so we can reuse them inside reactjs application.
                        </p>
                    </div>
                    <div className="w3-third w3-center">
                        <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
                    </div>
                </div>
            </div>

            <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="w3-third w3-center">
                        <i className="fa fa-coffee w3-padding-64 w3-text-red w3-margin-right"></i>
                    </div>
                    <div className="w3-twothird">
                        <h1>Implemented Tools.</h1>
                        <h5 className="w3-padding-32">
                            Here, we choosed two tools to implement are <a href='/tools/calculator'>calculator</a> and <a href='/tools/weather'>weather</a>.
                        </h5>
                        <p className="w3-text-grey">
                            For calculator we used javascript eval function to process display expression. And for weather we used&nbsp;
                            <a href='https://openweathermap.org/' target="_blank">openweathermap</a> API.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Home;
