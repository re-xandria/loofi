import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_BASEURL

export const addUser = (requestorEmail, userEmail) => {
    return axios.post(baseUrl + '/friends/add-user', {
        requestorEmail: requestorEmail,
        userEmail: userEmail
    })
}

export const removeUser = (requestorEmail, userEmail) => {
    return axios.post(baseUrl + '/friends/remove-user', {
        requestorEmail: requestorEmail,
        userEmail: userEmail
    })
}

export const findFriends = (email) => {
    return axios.post(baseUrl + '/friends/find-friends', {
        email: email
    })
}