import React from 'react';
import Header from './Theme';
import { Footer } from './Theme';
import { NavLink } from 'react-router-dom';

const Tools = () => {

    return (
        
        <div>
            <Header headingText='Tools' />
            
            <div className='w3-row-padding w3-padding-64 w3-container'>
                <div className="w3-content">
                    <div className="w3-twothird">
                        <NavLink to="/tools/calculator" className={({isActive}) => `custom-btn ${isActive && 'custom-btn-active'}`}>Calculator</NavLink>
                        <NavLink to="/tools/weather" className={({isActive}) => `custom-btn ml-10px ${isActive && 'custom-btn-active'}`}>Weather</NavLink>
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