"use strict";

const movies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"];

console.log("alle film:", movies);

console.log ("Første film:", movies [0]);
console.log ("Anden film:", movies [1]);
console.log ("sidste film:", movies[3]);

console.log("Antal film", movies.length);

for (const movie of movies) {
  const html = `
  <article class="movie-card">
    <div class="movie-info">
      <h3>${movie}</h3>
    </div>
  </article>
`;
  movieList.insertAdjacentHTML("beforend", html);
}

const movieList = document.querySelector("#movie-list");
console.log(movieList);

<section id="movie-list" class="movie-grid" aria-label="Filmliste">
</section>


