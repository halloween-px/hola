const Category = require('../models/Categories');

const list = async (req, res, next) => {
    try {
        res.json({
            items: await Category.find()
        })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Category.findById(req.params.id)
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list, getById
}