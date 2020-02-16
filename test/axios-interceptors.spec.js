
const AUTH_TOKEN = 'auth-token';
process.env.AUTH_TOKEN = AUTH_TOKEN;
const axios = require('axios');
const { setupAxiosInterceptors } = require('@/util/axios.interceptors');

describe('Axios interceptor', () => {
    setupAxiosInterceptors();
    it('Agrega el header Authorization en cada petición', () => {
        expect.assertions(1);
        return axios.post('/not-exists').then(() => { }).catch(err => {
            expect(err.config.headers.Authorization).toEqual(AUTH_TOKEN);
        });
    });
});
