const Request = require('../models/Request');

const list = async (req, res, next) => {
    try {
        const {limit = 0, skip = 0} = req.query;
        res.json({
            items: await Request.find().limit(+limit).skip(+skip),
            count: await Request.countDocuments(),
        })
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        res.json({
            item: await Request.findById(req.params.id)
        })
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
	try {
    const request = new Request(req.body);
    await request.save();
		res.json({
      item: request,
      message: `Hello, ${request.userName}!`
    })
	} catch (error) {
		next(error)
	}
}

module.exports = {
    list, getById, create
}