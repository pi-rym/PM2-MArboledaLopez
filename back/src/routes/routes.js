const { Router } = require("express");
const { testController } = require("../controllers/controllers");
const { movieController } = require("../controllers/movieController");

const router = Router();

router.get("/", testController);
router.get("/movies", movieController.getMovies);

module.exports = router;
