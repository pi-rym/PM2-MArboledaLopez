const Movie = require("../models/Movie");

const movieService = {
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw new Error("Failed to fetch movie data: " + error.message);
        }
    }
};

module.exports = movieService;

