import React from 'react';
import  Header, { Footer, Navbar }  from '../Theme';

const Home = () => {
    return (
        
        <div>
            <Navbar />

            <div className='right-container'>

                <Header headingText='Welcome' />

                <div className="w3-row-padding w3-padding-64 w3-container">
                    <div className="w3-content">
                        <div className="w3-twothird">
                            <h1>Technology and Template.</h1>
                            <h5 className="w3-padding-32">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </h5>
                            <p className="w3-text-grey">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;
