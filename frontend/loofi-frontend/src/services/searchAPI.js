import axios from "axios";

const baseUrl = process.env.REACT_APP_API_BASEURL

export const findUsers = (searchInput) => {
    return axios.post(baseUrl + '/search/search-users', {
        search: searchInput
    })
}