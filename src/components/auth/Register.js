import React, { useState } from 'react';
import Header, { Footer } from '../Theme';

const Register = () => {

    const [ username, setUsername ] = useState([]);
    const [ password, setPassword ] = useState([]);

    return (
        <div>
            <Header headingText='Login' />
            
            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <h1>Enter your credentials ...</h1>
                        
                        <input onKeyUp={ event => setUsername(event.target.value) } title="usernam" placeholder="Enter username ..." />
                        <input onKeyUp={ event => setPassword(event.target.value) } title="usernam" placeholder="Enter password ..." />

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Register;