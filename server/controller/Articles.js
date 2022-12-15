const { query } = require('express');
const Articles = require('../models/Articles');

const list = async (req, res, next) => {
    try {
        const {limit = 0, skip = 0} = req.query;
        res.json({
            items: await Articles.find().limit(+limit).skip(+skip),
            count: await Articles.countDocuments(),
        })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Articles.findById(req.params.id)
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list, getById
}