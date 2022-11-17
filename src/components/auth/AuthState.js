
import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export async function getAuthStatus() {
    if (auth.currentUser)
        return auth.currentUser.hasOwnProperty('email');
    else
    return false;
}
export async function login(username, password) {

    signInWithEmailAndPassword(auth, username, password)
    .then((response) => {
        console.log(response);
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })
};

export async function register(username, password) {

    createUserWithEmailAndPassword(auth, username, password)
    .then((response) => {
        console.log(response);
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    })
};

export async function logout() {
    sessionStorage.removeItem('Auth Token');
    this.navigate('/login')
};
