import React from 'react';
import {Link} from 'react-router-dom';

const Weather = () => {
    return (
        <div>
            <h1>This is Tools Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/tools">Tools</Link>
                    </li>
                </ul>
            </nav>
            <h1>This is Weather</h1>
        </div>
    );
};

export default Weather;