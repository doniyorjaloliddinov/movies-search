// VARIABLES
let elSearchForm = $(".js-search-form");
let elSearchInput = $(".js-search-input", elSearchForm);
let elReadyList = $(".movies-list");
let elTemplate = $("#template").content;

kinolar.splice(100);

let normalizedMovies = kinolar.map((kino, i) => {
    return {
        id: i + 1,
        title: kino.title,
        cast: kino.cast.splice(0, 8).join(", "),
        genres: kino.genres.join(", "),
        year: kino.year,
    }
})

let readyItems = function (kino) {
    elReadyList.innerHTML = "";

    let elReadyItem = elTemplate.cloneNode(true);

    $(".js-title-movie", elReadyItem).textContent = kino.title;
    $(".js-movie-premier", elReadyItem).textContent = kino.year;
    $(".movie-cast", elReadyItem).textContent = kino.cast;
    $(".movie-genres", elReadyItem).textContent = kino.genres;

    return elReadyItem;
}

let renderElements = function (kinolar) {
    let elMoviesWrapperFragment = document.createDocumentFragment();

    kinolar.forEach(function (kino) {
        elMoviesWrapperFragment.appendChild(readyItems(kino));
    });

    elReadyList.appendChild(elMoviesWrapperFragment);
}
renderElements(normalizedMovies);

elSearchForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    let searchMovie = new RegExp(elSearchInput.value.trim(), "gi");

    let searchResult = normalizedMovies.filter((movie) => {
        if (movie.title.match(searchMovie)) {
            return movie.title.match(searchMovie);
        }
    })
    
    renderElements(searchResult);
    // console.log(renderElements(searchResult));
})