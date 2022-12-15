const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    title: String,
    flag: String,
    image: String,
    text: String,
})

const model = mongoose.model('Service', ServiceSchema, 'servicesHola' )

module.exports = model;