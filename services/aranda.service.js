const axios = require('axios');
const utils = require('./aranda.utils');
const baseUrl = 'api/v8.6';
module.exports = class ArandaClient {

    login = function (username, password, languageid) {
        return new Promise((resolve, reject) => {
            axios
                .post(baseUrl + '/user/login',
                    utils.toFieldValueFormat({ username: username, password: password, languageid: languageid }))
                .then(res => resolve(utils.fromFieldValueFormat(res)))
                .catch(err => reject(err));
        });
    }

    crearCaso = function (itemType, caso) {
        return new Promise((resolve, reject) => {
            axios
                .post(baseUrl + '/item/add/' + itemType, utils.toFieldValueFormat(caso))
                .then(res => resolve(utils.toFieldValueFormat(res)))
                .catch(err => reject(err));
        });
    }
}