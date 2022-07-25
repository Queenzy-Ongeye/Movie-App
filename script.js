//API TMDB
const API_KEY = 'api_key=d04f9f433b6bc8aaf962beee8a8e2c00';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500'
getMovie(API_URL);

function getMovie(url) {
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data);
        showMovies(data.results);
    })
}


function showMovies(data) {

    data.forEach(movie => {
        const { title, poster, vote_average, overview } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMAGE_URL + poster}" alt="${title}">
            <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getColor(vote_average)}"></span>${vote_average}</span>
            </div>

            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `
    });

}

function getColor(vote) {
    if (vote >= 8) {
        return 'green';
    } else if (vote >= 5) {
        return 'orange';

    } else {
        return 'red';
    }
}
