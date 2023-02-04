const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RequestShema = new Schema({
    userName: String,
    userPhone: String,
    selectGta: String,
})

const model = mongoose.model('Request', RequestShema, 'requests');

module.exports = model;