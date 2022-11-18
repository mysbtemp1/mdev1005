import React, { useState } from 'react';
import  Header, { Footer, Navbar }  from '../Theme';
import News from '../tools/News';
import Finance from '../tools/Finance';
import Weather from '../tools/Weather';

const Dashboard = () => {

    return (
        
        <div>
            <Navbar />

            <div className='right-container'>

                <Header headingText='Welcome' />

                <div className="w3-row-padding w3-padding-64 w3-container">
                    <div className="w3-content mb-5">
                        <Weather />
                    </div>
                    <div className="w3-content mb-5">
                        <News />
                    </div>
                    <div className="w3-content">
                        <Finance />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
