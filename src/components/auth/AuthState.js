import React from 'react';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default class AuthState
{
    static instance;

    constructor()
    {
        if(AuthState.instance)
        {
            return AuthState.instance
        }

        AuthState.instance = this;

        this.username = '';
        this.auth_status = true;
    }

     getAuthStatus() {
        return this.auth_status;
    }

    async login(username, password) {
        
    const authentication = getAuth();

        signInWithEmailAndPassword(authentication, username, password)
        .then((response) => {
            console.log(response);
            this.username = response.user.email;
            this.auth_status = true;
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }

    async register(username, password) {
        
    const authentication = getAuth();

        createUserWithEmailAndPassword(authentication, username, password)
        .then((response) => {
            this.username = response.user.email;
            this.auth_status = true;
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
    }

    logout() {
        sessionStorage.removeItem('Auth Token');
        this.username = '';
        this.auth_status = false;
        this.navigate('/login')
    }

};