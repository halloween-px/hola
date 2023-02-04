const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParamsSchema = new Schema({
    phone: Array,
    email: Array,
    address: Array,
    social: Array
})

const model = mongoose.model('Params', ParamsSchema, 'paramsInfo');

module.exports = model;