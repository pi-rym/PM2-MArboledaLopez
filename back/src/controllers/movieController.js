const movieService = require("../services/services");

const movieController = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

module.exports = {movieController};
