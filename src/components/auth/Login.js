import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header, { Footer } from '../Theme';

import { app } from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [ username, setUsername ] = useState([]);
    const [ password, setPassword ] = useState([]);

    let navigate = useNavigate();

    function login() {
        
    const authentication = getAuth();

        signInWithEmailAndPassword(authentication, username, password)
        .then((response) => {
            console.log(response);
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }

    function register() {
        
    const authentication = getAuth();

        createUserWithEmailAndPassword(authentication, username, password)
        .then((response) => {
          navigate('/home')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }

    function logout() {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
    }

    return (
        <div>
            <Header headingText='Login' />
            
            <div className="w3-row-padding w3-padding-64 w3-container">
                <div className="w3-content">
                    <div className="w3-twothird">
                        <h1>Enter your credentials ...</h1>
                        
                        <input onKeyUp={ event => setUsername(event.target.value) } title="usernam" placeholder="Enter username ..." />
                        <input onKeyUp={ event => setPassword(event.target.value) } title="usernam" placeholder="Enter password ..." />
                        <br />
                        <br />
                        <a onClick={ () => login() } className='custom-btn custom-btn-active'>Login</a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Login;