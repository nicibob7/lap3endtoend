const { Router } = require('express');

const filmController = require('../controllers/film');

const filmRouter = Router();

filmRouter.get("/", filmController.index);
filmRouter.get("/top", filmController.getTop);
filmRouter.get("/:id", filmController.show);

filmRouter.post("/", filmController.create);

filmRouter.patch("/:id", filmController.update);

filmRouter.delete("/:id", filmController.destroy);

module.exports = filmRouter;