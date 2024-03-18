const http = require("http");

class Movie {
    constructor(title, poster, director) {
        if (!title || !poster || !director) {
            throw new Error("Se necesita título, poster y director.");
        }
        this.title = title;
        this.poster = poster;
        this.director = director;
    }
}

const movieService = {
    getMovies: async () => {
        return new Promise((resolve, reject) => {
            const options = {
                hostname: "students-api.up.railway.app",
                path: "/movies",
                method: "GET"
            };

            const request = http.request(options, response => {
                let data = "";

                response.on("data", chunk => {
                    data += chunk;
                });

                response.on("end", () => {
                    console.log("Received data:", data);
                    if (data.trim() === "") {
                        reject(new Error("Empty response received."));
                    } else {
                        try {
                            const jsonData = JSON.parse(data);
                            if (Array.isArray(jsonData)) {
                                const movies = jsonData.map(movie => new Movie(movie.title, movie.poster, movie.director));
                                resolve(movies);
                            } else {
                                reject(new Error("Invalid JSON data."));
                            }
                        } catch (error) {
                            reject(new Error("Failed to parse movie data: " + error.message));
                        }
                    }
                });
            });

            request.on("error", error => {
                reject(new Error("Failed to fetch movie data: " + error.message));
            });

            request.end();
        });
    }
};

module.exports = movieService;

