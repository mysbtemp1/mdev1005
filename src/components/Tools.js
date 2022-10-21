import React from 'react';
import Header from './Theme';
import { Footer } from './Theme';
import {Route, Link, Routes} from 'react-router-dom';

const Tools = () => {
    return (
        
        <div>
            <Header headingText='Tools' />
            
            <div className="w3-row-padding w3-padding-64 w3-padding-bottom-0 w3-container">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <ul>
                            <li>
                                <Link to="/tools/calculator">Calculator</Link>
                            </li>
                            <li>
                                <Link to="/tools/weather">Weather</Link>
                            </li>
                        </ul>
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