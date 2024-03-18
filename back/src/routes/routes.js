const {Router} = require ("express");
const {testController, moviesController}= require("../controllers/controllers");

const router = Router();

router.get ("/", testController);
router.get ("/movies", moviesController);

module.exports = router;