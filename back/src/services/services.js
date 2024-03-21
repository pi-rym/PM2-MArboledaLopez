const Movie = require("../models/Movie");

const movieService = {
    createMovie: async (movieData) => {
        try {
            const newMovie = await Movie.create(movieData);
            return newMovie;
        } catch (error) {
            throw new Error("Failed to add movie: " + error.message);
        }
    },
    getMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            throw new Error("Failed to fetch movies: " + error.message);
        }
    }
};

module.exports = movieService;
