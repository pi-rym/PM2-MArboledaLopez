const { Router } = require("express");
const { testController } = require("../controllers/controllers");
const { movieController } = require("../controllers/movieController");
const validateMovieData = require("../middlewares/validationMiddleware");

const router = Router();

router.get("/", testController);
router.get("/movies", movieController.getMovies);
router.post("/movies", validateMovieData, movieController.createMovie);

module.exports = router;
