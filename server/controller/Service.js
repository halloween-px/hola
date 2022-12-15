const Service = require('../models/Service');

const list = async (req, res, next) => {
	try {
		res.json({
			items: await Service.find()
		});
	} catch (error) {
		next(error);
	}
}

const getById = async (req, res, next) => {
	try {
		res.json({
			item: await Service.findById(req.params.id)
		})
	} catch (error) {
		next(error)
	}
}

const update = async (req, res, next) => {
	try {
		res.json({ item: await Service.findByIdAndUpdate(req.params.id, req.body, { new: true }) });
	} catch (error) {
		next(error)
	}
}

module.exports = {
    list, getById, update
}