import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASEURL

export const changePassword = (email, password) => {
    return axios.post(baseUrl + '/dashboard/password-settings', {
        email: email,
        password: password
    })
}

export const changeEmail = (currE, newE) => {
    return axios.post(baseUrl + '/dashboard/email-settings', {
        currentEmail: currE,
        newEmail: newE
    })
}