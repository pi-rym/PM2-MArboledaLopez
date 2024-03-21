const movieService = require("../services/services");

const movieController = {
    getMovies: async (req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
    createMovie: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;

            const newMovie = await movieService.createMovie({ title, year, director, duration, genre, rate, poster });

            res.status(201).json({ message: "Movie created successfully", movie: newMovie });
        } catch (error) {

            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = {movieController};
