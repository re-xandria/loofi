import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASEURL


export const updateRole = (adminEmail, userEmail, role) => {
    return axios.post(baseUrl + '/admin/update-role', {
        adminEmail: adminEmail,
        userEmail: userEmail,
        role: role
    })
}

export const getAllAdmins = () => {
    return axios.get(baseUrl + '/admin/get-admins');
}