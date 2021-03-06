const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UnknowIntentSchema = new Schema({
    word: { type: String, required: true, max: 100 },
    last_modified: { type: Date, default: Date.now, alias:'lastModified' }
});

module.exports = mongoose.model('UnknowIntent', UnknowIntentSchema, 'unknowIntents');