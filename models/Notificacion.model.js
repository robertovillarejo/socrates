const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let NotificacionSchema = new Schema({
    destinatarios: { type: String },
    remitente: { type: String },
    fechaEnvio: { type: Date },
    asunto: { type: String },
    mensaje: { type: String },
    cc: { type: String },
    cco: { type: String },
    estado: { type: String }
});


// Export the model
module.exports = mongoose.model('Notificacion', NotificacionSchema, 'notificacion');