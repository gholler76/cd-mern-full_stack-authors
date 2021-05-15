// require mongoose for database api calls
const mongoose = require("mongoose");
// assigns database name to variable "db"
const db = "barz";

// create database connection path and invoke two options to avoid dependency error messages
mongoose
	.connect(`mongodb://localhost/${db}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	// tell mongoose how to respond to successful and unsuccessful connections to database
	.then(() => console.log("Database connected..."))
	.catch((err) => console.log("Error connecting to the database!", err));
