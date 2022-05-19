// VARIABLES
let elSearchInput = selectorElem(".js-search");
let elSearchBtn = selectorElem(".search-btn");
let elReadyList = selectorElem(".movies-list");
let elTemplate = selectorElem("#template").content;

// FUNCTION READY LIST
let readyList = function () {
    kinolar.forEach(kino => {
        kinolar.splice(100);
        let elItems = createElem("li", "", "movies-items w-25 my-3");

        let elImg = createElem("img", "", "movies-img");
        elImg.src = "./img/noway-home.jfif";

        let elTitle = createElem("p", `Title: ${kino.title}`, "movies-name t-center text-center");

        let elYear = createElem("p", `Year of premiere: ${kino.year}`, "movies-year t-center text-center");

        let elActors = createElem("p", `Actors: ${kino.cast.splice(0,5).join(",   ")}`, "movies-actors t-center text-center");

        elItems.append(elImg, elTitle, elYear, elActors);
        elReadyList.append(elItems);
        // return elItems;

    });
}
readyList();