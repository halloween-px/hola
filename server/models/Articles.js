const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticlesSchema = new Schema({
    title: String,
    text: String,
    images: String,
    id: Number,
    memberId: {
        type: Schema.Types.ObjectId,
    },
    categoryId: {
        type: Schema.Types.ObjectId
    },
    preview: String
})

const model = mongoose.model('articles', ArticlesSchema, 'articlesHola');

module.exports = model;