// VARIABLES
let elSearchInput = selectorElem(".js-search");
let elSearchBtn = selectorElem(".search-btn");
let elReadyList = selectorElem(".movies-list");
// let elTest = selectorElem(".js-list");


// FUNCTION READY LIST
let readyList = function () {
    kinolar.forEach(kino => {
        kinolar.splice(100);
        let elItems = createElem("li", "", "movies-items w-25 my-3");

        let elImg = createElem("img", "", "movies-img");
        elImg.src = "./img/noway-home.jfif";

        let elTitle = createElem("p", `Title: ${kino.title}`, "movies-name t-center text-center");

        let elYear = createElem("p", `Year of premiere: ${kino.year}`, "movies-year t-center text-center");

        let elActors = createElem("p", `Actors: ${kino.cast.join(",   ")}`, "movies-actors t-center text-center");

        elItems.append(elImg, elTitle, elYear, elActors);
        elReadyList.append(elItems);
        // return elItems;

    });
}
readyList();

// let renderElements = function() {
//     let elMovieWrapperFragment = document.createDocumentFragment();

//     kinolar.forEach(function(kino) {
//         elMovieWrapperFragment.appendChild(readyList(kino));
//     })
//     elReadyList.appendChild(elMovieWrapperFragment);
// }

// renderElements(kinolar);    


// CALLING INPUT VALUE
elSearchBtn.addEventListener("click", function() {
    let films = [];
    let searchingValue = elSearchInput.value.trim();
    elTest.value = readyList()
    let elTestItem = createElem("li");

    let searchRegex = new RegExp(searchingValue, "gi");
    
    kinolar.forEach((kino) => {
        elTest.append(elTestItem);
        if (kino.title.match(searchRegex)) {
            // films.push(kino);
            // films.push(elTest)
            // elTest.innerHtml = elTest

        }
        // else {
        //     console.log("No suckh kind of movie");
        // }
    })
    // return kinolar
    console.log(films);
})
// console.log(films);