const Teams = require('../models/Teams');

const list = async (req, res, next) => {
    try {
        const {skip = 0, limit = 10} = req.query;
        res.json({
            items: await Teams.find().limit(+limit),
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    list
}