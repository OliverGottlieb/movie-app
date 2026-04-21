"use strict";

console.log("Movie App starter...");

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image: "https://filmnoerden.dk/wp-content/uploads/2015/05/Inception.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Interstellar",
    year: 2014,
    rating: 8.6,
    image:
      "https://imusic.b-cdn.net/images/item/original/935/5051892182935.jpg?interstellar-2015-interstellar-dvd&class=scaled&v=1691753575",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    image:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
  },
  {
    title: "The Devil Wears Prada",
    year: 2006,
    rating: 6.9,
    image:
      "https://m.media-amazon.com/images/I/8170e2LAEoL._AC_UF894,1000_QL80_.jpg",
  },
  {
    title: "Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    image:
      "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.3,
    image:
      "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Spider-Man",
    year: 2002,
    rating: 7.3,
    image:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/Spider-Man_%282002_film%29_poster.jpg",
  },
  {
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: 2005,
    rating: 7.7,
    image:
      "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Southpaw",
    year: 2015,
    rating: 7.3,
    image:
      "https://m.media-amazon.com/images/S/pv-target-images/e6a3620a55ec1bc9e4d9c42b8ed2488b5111ff451ae4f7f26042025301877811.jpg",
  },
  {
    title: "Creed",
    year: 2015,
    rating: 7.6,
    image:
      "https://m.media-amazon.com/images/M/MV5BNWM3NjY2ZDctMGZiYy00OGFlLThkMTktOTY2MDM2YjE2OTliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Mac & Devin Go to High School",
    year: 2012,
    rating: 4.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTM1OTUwOTMyM15BMl5BanBnXkFtZTcwNTQ3OTk2Nw@@._V1_.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const highlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";

  const html = /* html */ `
    <article class="movie-card ${highlightClass}">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}

showMovies();
