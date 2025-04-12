import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASEURL

export const signIn = (email, password) => {
    return axios.post(baseUrl + '/auth/sign-in', {
        email: email,
        password: password
    })
}


export const signUp = (firstName, email, password) => {
    return axios.post(baseUrl + '/auth/sign-up', {
        firstName: firstName,
        email: email,
        password: password
    })
}
