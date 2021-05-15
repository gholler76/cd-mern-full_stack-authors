const RapperController = require("../controllers/rapper.controller");

module.exports = function (app) {
	app.post("/api/rappers", RapperController.createOneRapper);
	app.get("/api/rappers", RapperController.listRappers);
	app.get("/api/rappers/:id", RapperController.findOneRapper);
	app.put("/api/rappers/:id", RapperController.updateOneRapper);
	app.delete("/api/rappers/:id", RapperController.deleteRapper);
};
