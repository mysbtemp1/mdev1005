import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';

const Tools = () => {
    return (
        <div className="w3-row-padding w3-padding-64 w3-container">
            <div className="w3-content">
                <div className="w3-twothird">
                    <h1>This is Tools Page</h1>
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
    );
};

export default Tools;