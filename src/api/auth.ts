import axios from "axios"

export interface JwtResponse {
    token: string;
}

export const useValidateToken = async (token: string) => {
    const queryUrl = 'https://furina.yelr.de/login/validate'
    const response = await axios.post<boolean>(queryUrl, {
        token: token
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data
}

export const useLogin = async (username: string, password: string) => {
    const queryUrl = 'https://furina.yelr.de/login'
    const response = await axios.post<JwtResponse>(queryUrl, {
        username: username,
        password: password
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return response.data.token
}