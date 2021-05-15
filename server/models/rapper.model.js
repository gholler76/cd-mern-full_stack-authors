const mongoose = require("mongoose");

const RapperSchema = new mongoose.Schema({
	emcee: {
		type: String,
		required: [true, "Yo who spit that?"],
	},
	song: {
		type: String,
		required: [true, "What joint was that from?"],
	},
	lyrics: {
		type: String,
		required: [true, "Type in those barz, son!"],
	},
});

const Rapper = mongoose.model("Rapper", RapperSchema);

module.exports = Rapper;
