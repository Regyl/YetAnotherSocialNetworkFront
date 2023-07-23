import * as axios from "axios";

const BASE_URL = "http://localhost:8090/social-network";
const AUTH_URL = "http://localhost:8760/auth";

const instance = axios.create({
    baseURL: BASE_URL,
    method: "GET",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

/**
 * @deprecated
 */
const headerInstance = axios.create({
    baseURL: BASE_URL,
    method: "POST",
    headers: {
        "Content-Type": "application/json",

    },
});

const auth = axios.create({
    baseURL: AUTH_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/json",
    },
});


export const API = {
    postNewUser(user) {
        return auth.post("/sign-up", user);
    },
    signIn(user) {
        return auth.get('/sign-in', {user});
    },
    logout() {
        return auth.post('/logout', {withCredentials: true});
    },
    getRelocationStatistics() {
        return instance.get('/statistics/count')
    },
    getAllSubjects() {
        return instance.get('/subjects/');
    },
}
