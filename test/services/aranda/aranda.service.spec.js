const ARANDA_HOST = 'aranda-host';
process.env.ARANDA_HOST = ARANDA_HOST;
const ArandaService = require('@/services/aranda/aranda.service');

describe('Aranda Service', () => {

    it('Usa variable de entorno ARANDA_HOST para peticiones', () => {
        ArandaService.login().catch(err => {
            expect(err.config.url).toEqual(ARANDA_HOST + '/api/v8.6/user/login');
        });
    });
});