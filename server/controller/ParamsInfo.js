const Params = require('../models/Params');

const list = async (req, res, next) => {
    try {
        res.json({items: await Params.find()})
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list
}