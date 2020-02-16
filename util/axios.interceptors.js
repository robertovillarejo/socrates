const axios = require('axios');

/**
 * Agrega el header 'Authorization' con el valor de la 
 * variable de ambiente 'AUTH_TOKEN' si existe
 * @param {*} config 
 */
const onRequestAddAuthToken = config => {
    if (process.env.AUTH_TOKEN) {
        config.headers.Authorization = process.env.AUTH_TOKEN;
    }
    return config;
}


const setupAxiosInterceptors = function () {
    if (axios.interceptors) {
        axios.interceptors.request.use(onRequestAddAuthToken, err => Promise.reject(err));
    }
}

module.exports = { setupAxiosInterceptors }