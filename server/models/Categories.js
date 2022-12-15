const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: String,
    color: String,
    id: Number,
    count: Number
})

const model = mongoose.model('Categories', CategorySchema, 'categoriesHola');
module.exports = model;