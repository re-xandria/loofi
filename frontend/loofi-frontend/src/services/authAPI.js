import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASEURL

export const signIn = (email, password) => {
    return axios.post(baseUrl + '/auth/sign-in', {
        email: email,
        password: password
    })
}


export const signUp = (displayName, email, password) => {
    return axios.post(baseUrl + '/auth/sign-up', {
        displayName: displayName,
        email: email,
        password: password
    })
}




