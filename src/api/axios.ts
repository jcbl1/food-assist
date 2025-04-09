import axios from "axios";

const baseURL = 'https://furina.yelr.de'

export const authorizedInstance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    timeout: 1000000,
})

authorizedInstance.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                console.log('401 Unauthorized')
                // sessionStorage.setItem('unauthorized', 'true')
                break;
        }
    } else if (error.request) {

    } else {

    }

    return Promise.reject(error)
})