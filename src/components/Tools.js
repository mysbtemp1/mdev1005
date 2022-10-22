import React from 'react';
import Header from './Theme';
import { Footer } from './Theme';
import { Link } from 'react-router-dom';

const Tools = () => {

    return (
        
        <div>
            <Header headingText='Tools' />
            
            <div className='w3-row-padding w3-padding-64 w3-container'>
                <div className="w3-content">
                    <div className="w3-twothird">
                        <Link to="/tools/calculator" className='custom-btn'>Calculator</Link>
                        <Link to="/tools/weather" className='custom-btn ml-10px'>Weather</Link>
                    </div>
                </div>
            </div>

            {window.location.pathname === '/tools' &&
                <Footer />
            }
        </div>
    );
};

export default Tools;