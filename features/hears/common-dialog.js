/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const { helpQuickReplies } = require('../dialogs/util/info-quick-replies');
const { typing } = require('../../util/bot.typing');

module.exports = function (controller) {
    controller.hears(['hey', 'hi', 'hello', 'hola'], 'message', async (bot, message) => {
        await bot.say('Hola, estoy para servirte en lo que pueda');
    });

    controller.hears(['[¿]?eres real[?]?'], 'message', async (bot, message) => {
        await bot.say('soy una inteligencia artificial, que fue creada para ayudarte');
    });

    controller.hears(['[¿]?tienes nombre[?]?', '[¿]cual es tu nombre[?]?'], 'message', async (bot, message) => {
        await bot.say('mi nombre es socrates, y estoy para servirte');
    });

    controller.hears(['ayuda'], 'message', async (bot, message) => {
        await typing(bot,message,'te puedo ayudar en algo?');
        await typing(bot,message,'será un placer');
        await typing(bot,message,'sólo dime cómo');

    });

    controller.hears(['[¿]?c[oó]mo est[áa]s[?]?'], 'message', async (bot, message) => {
        await bot.say('Me encuentro muy bien, ¡gracias por preguntar!');
        await bot.reply(message, {
            text: '¿Te puedeo apoyar con alguno de los siguientes temas?:',
            quick_replies: helpQuickReplies
        });
    });

    controller.hears(['buenos dias', 'buenas noches', 'buenas tardes'], 'message', async (bot, message) => {
        await bot.say('Es un gusto saludarte');
        await bot.reply(message, {
            text: '¿Te puedeo apoyar con alguno de los siguientes temas?:',
            quick_replies: helpQuickReplies
        });
    });

    controller.hears(['adios', 'a dios', 'hasta pronto', 'bye', 'hasta luego'], 'message', async (bot, message) => {
        await bot.say('Fue un placer ayudarte, estaré aquí si me necesitas');
    });
}