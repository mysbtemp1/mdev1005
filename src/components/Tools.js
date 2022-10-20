import React from 'react';
import {Route, Link, Routes} from 'react-router-dom';

const Tools = () => {
    return (
        <div>
            <h1>This is Tools Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/tools/calculator">Calculator</Link>
                    </li>
                    <li>
                        <Link to="/tools/weather">Weather</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Tools;