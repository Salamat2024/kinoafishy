
const API_KEY = "dc0025e1-f0f8-4e3c-ab79-6b25a6275f14";
const API_URL = 
"https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2024&month=MAY";
const API_URL_SEARCH=
"https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword="





getMovies(API_URL)
async function getMovies(url) {
    const resp = await fetch(url, {
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_KEY,
        },
    });
    const respData = await resp.json();
    showMovies(respData);
}
function showMovies(data) {
    const moviesEl = document.querySelector(".movies");
    document.querySelector(".movies").innerHTML="";
    data.items.forEach((movie) => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = `
        <div class="movie">
                <div class="movie__cover-inner">
                    <img src="${movie.posterUrl}"
                        class="movie__cover" alt="${movie.nameRu}" />
                    <div class="movie__cover--darkened">

                    </div>
                </div>
                <div class="movie-info">
                    <div class="movie__title">${movie.nameRu}</div>
                    <div class="movie__category">${movie.genres.map(
            (genre) => ` ${genre.genre}`
        )}</div>
                    <div class="movie__average movie__average--green">${movie.year}</div>
                </div>
            </div>`;
        moviesEl.appendChild(movieEl);
    })
}

const form=document.querySelector("form")
const search=document.querySelector(".header__search")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const apiSearchUrl=`${API_URL_SEARCH}${search.value}`
    if (search.value){
        getMovies(apiSearchUrl);
        search.value ="";
    }

});