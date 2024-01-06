import * as axios from "axios";

const hostname = "localhost";
const BASE_URL = `http://${hostname}:8090/jarvis`;
const AUTH_URL = `http://${hostname}:8760/auth`;
const DIC_URL = `http://${hostname}:8070/jarvis`;

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
    },
});

const dictionaries = axios.create({
    baseURL: DIC_URL,
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

    CORE: {
        getRecommendations() {
            return instance.get('/recommendations/list')
        },
        getTourPreview(id) {
            return instance.get('/tours/', {params: {id: id}})
        }
    },

    DICTIONARIES: {
        getCatalogRecords(catalog) {
            return dictionaries.get('/list', {params: {catalog: catalog}})
        }
    }
}
