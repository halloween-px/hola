const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeamsSchema = new Schema({
    name: String,
    post: String,
    images: String,
    id: Number,
})

const model = mongoose.model('Teams', TeamsSchema, 'teamsHola');

module.exports = model;