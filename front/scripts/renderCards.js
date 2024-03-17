// card rendering module

import { fetchData } from './dataFetch.js';

const filmContainer = $("#filmcontainer");

const renderMovies = function(data) {
  data.forEach(function(movie) {
    const movieCard = $("<div>").addClass("tarjeta");

    const htmlContent = `
      <div class="cajaimagen">
        <img src="${movie.poster}" alt="${movie.title}">
        <div class="contenidos">
          <div>
            <h2>${movie.title}</h2>
            <p>Year: ${movie.year}</p>
            <p>Director: ${movie.director}</p>
            <p>Duration: ${movie.duration}</p>
            <p>Genre: ${movie.genre.join(", ")}</p>
            <p>Rate: ${movie.rate}</p>
          </div>
        </div>
      </div>
    `;

    movieCard.html(htmlContent);

    filmContainer.append(movieCard);
  });
};

export { renderMovies };
