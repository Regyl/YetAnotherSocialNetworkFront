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

const auth = axios.create({
    baseURL: AUTH_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        // "Content-Type": "application/json",
    },
});


export const API = {
    signUp(user) {
        return auth.post('/basic/sign-up', user);
    },
    signInBasic(login, password) {
        return auth.get('/basic/sign-in', {params: {username: login, password: password}});
    },

    signUpOauth(oAuthData) {
        return auth.post('/oauth/sign-up', oAuthData);
    },
    signInOauth(code, state, oAuthProviderType) {
        return auth.get('/oauth/sign-in', {params: {code: code, state: state, oAuthProviderType: oAuthProviderType}})
    },

    logout() {
        return auth.post('/logout', {withCredentials: true});
    },

    /**
     * @deprecated
     */
    getRelocationStatistics() {
        return instance.get('/statistics/count')
    },
    /**
     * @deprecated
     */
    getAllSubjects() {
        return instance.get('/subjects/');
    },
}
