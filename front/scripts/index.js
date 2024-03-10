document.addEventListener("DOMContentLoaded", function () {

    const filmContainer = document.getElementById("filmcontainer");
    tempData.forEach((movie) => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("tarjeta");
  
      //HTML contenedor.
      movieCard.innerHTML = `
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
  
      filmContainer.appendChild(movieCard);
    });
});
  