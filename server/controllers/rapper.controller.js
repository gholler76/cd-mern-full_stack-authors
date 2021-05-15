const Rapper = require("../models/rapper.model");

module.exports.listRappers = (req, res) => {
	Rapper.find()
		.then((rappers) => {
			res.json(rappers);
		})
		.catch((err) => res.status(400).json(err));
};

module.exports.createOneRapper = (req, res) => {
	const { emcee, song, lyrics } = req.body;
	Rapper.create({
		emcee,
		song,
		lyrics,
	})
		.then((newRapper) => {
			res.json(newRapper);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

module.exports.findOneRapper = (req, res) => {
	const { id } = req.params;
	Rapper.findOne({ _id: id })
		.then((thisRapper) => {
			res.json(thisRapper);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

module.exports.updateOneRapper = (req, res) => {
	const { id } = req.params;
	const { emcee, song, lyrics } = req.body;
	Rapper.findOneAndUpdate(
		{ _id: id },
		{
			emcee,
			song,
			lyrics,
		},
		{
			new: true,
			runValidators: true,
			userFindAndModify: true,
		}
	)
		.then((updatedRapper) => {
			res.json(updatedRapper);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};

module.exports.deleteRapper = (req, res) => {
	const { id } = req.params;
	Rapper.deleteOne({ _id: id })
		.then((deletedRapper) => {
			res.json(deletedRapper);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
};
