const axios = require('axios');
const utils = require('./aranda-utils');
const baseUrl = process.env.ARANDA_HOST + '/api/v8.6';
const PROBLEMA = 'Problema';
const INCIDENTE = 'Incidente';

const ArandaService = {

    /**
     * Realiza petición de autenticación con el username, password
     * y languageId proporcionados. 
     * El languageId puede omitirse, el valor por defecto es 'Español'
     */
    login: function (username, password, languageId = 'Español') {
        return new Promise((resolve, reject) => {
            axios
                .post(baseUrl + '/user/login',
                    utils.toFieldValueFormat({ username: username, password: password, languageid: languageId }))
                .then(res => resolve(utils.fromFieldValueFormat(res.data)))
                .catch(err => reject(err));
        });
    },

    /**
     * Realiza petición de renovación de sesión. 
     */
    renewLogin: function () {
        return new Promise((resolve, reject) => {
            axios
                .post(baseUrl + '/session/renew')
                .then(res => resolve(res.data))
                .catch(err => reject(err));
        });
    },

    /**
     * Crea un caso del tipo itemType
     */
    crearCaso: function (itemType, caso) {
        if (!itemType || !caso) {
            return Promise.reject;
        }
        return new Promise((resolve, reject) => {
            axios
                .post(baseUrl + '/item/add/' + itemType, utils.toFieldValueFormat(caso))
                .then(res => resolve(utils.toFieldValueFormat(res.data)))
                .catch(err => reject(err));
        });
    },

    /**
     * Crea un incidente
     */
    crearIncidente: function (caso) {
        return crearCaso(INCIDENTE, caso);
    },

    /**
     * Crea un problema
     */
    crearProblema: function (caso) {
        return crearCaso(PROBLEMA, caso);
    }
}

module.exports = ArandaService;