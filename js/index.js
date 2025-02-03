// ----- SECTIONS ----- //
const heroSection = document.querySelector(".hero");
const servicesSection = document.querySelector(".services");
const facilitiesSection = document.querySelector(".facilities");
const sitesSection = document.querySelector(".sites");
const advantagesSection = document.querySelector(".advantages");
const footerSection = document.querySelector(".footer");



// ----- HERO ----- //
let heroImg = document.createElement("img");
heroImg.classList.add("hero__img");

let heroHeadline = document.createElement("h1");
heroHeadline.classList.add("hero__headline");
heroHeadline.textContent = hero.headline;

let heroTxt = document.createElement("p");
heroTxt.classList.add("hero__txt");
heroTxt.textContent = hero.copy;

heroSection.append(heroImg, heroHeadline, heroTxt);


// ----- SERVICES ----- //

services.forEach(card => {
    let servicesCard = document.createElement("article");
    servicesCard.classList.add("services__card");

    let servicesCardImg = document.createElement("img");
    servicesCardImg.classList.add("services__card__img");
    servicesCardImg.setAttribute("src", card.illustration);

    let servicesCardHeadline = document.createElement("h3");
    servicesCardHeadline.classList.add("services__card__headline");
    servicesCardHeadline.textContent = card.headline;

    let servicesCardTxt = document.createElement("p");
    servicesCardTxt.classList.add("services__card__txt");
    servicesCardTxt.textContent = card.text;

    let servicesCardLink = document.createElement("a");
    servicesCardLink.classList.add("services__card__link");
    servicesCardLink.textContent = card.linktext;

    servicesCard.append(servicesCardImg, servicesCardHeadline, servicesCardTxt, servicesCardLink);
    servicesSection.append(servicesCard);
});



// ----- FACILITIES ----- //

let facilitiesHeadline = document.createElement("h2");
facilitiesHeadline.textContent = facilities.headline;

let facilitiesGrid = document.createElement("div");
facilitiesGrid.classList.add("facilities__grid");

facilities.options.forEach(card => {
    let facilitiesCard = document.createElement("article");
    facilitiesCard.classList.add("facilities__card");

    let facilitiesCardImg = document.createElement("img");
    facilitiesCardImg.classList.add("facilities__card__img");
    facilitiesCardImg.setAttribute("src", card.icon);

    let facilitiesCardHeadline = document.createElement("h3");
    facilitiesCardHeadline.classList.add("facilities__card__headline");
    facilitiesCardHeadline.textContent = card.headline;

    let facilitiesCardTxt = document.createElement("p");
    facilitiesCardTxt.classList.add("facilities__card__txt");
    facilitiesCardTxt.textContent = card.text;

    facilitiesCard.append(facilitiesCardImg, facilitiesCardHeadline, facilitiesCardTxt);
    facilitiesGrid.append(facilitiesCard);
});

facilitiesSection.append(facilitiesHeadline, facilitiesGrid);


// ----- SITES ----- //

let sitesHeadline = document.createElement("h2");
sitesHeadline.textContent = sites.headline;

let sitesTxt = document.createElement("p");
sitesTxt.textContent = sites.text;

let sitesGrid = document.createElement("div");
sitesGrid.classList.add("sites__grid");

sites.places.forEach(card => {
    let sitesCard = document.createElement("article");
    sitesCard.classList.add("sites__card");

    let sitesCardImg = document.createElement("img");
    sitesCardImg.classList.add("sites__card__img");
    sitesCardImg.setAttribute("src", card.img);

    let sitesCardHeadline = document.createElement("h3");
    sitesCardHeadline.classList.add("sites__card__headline");
    sitesCardHeadline.textContent = card.name;

    let sitesCardTxt = document.createElement("p");
    sitesCardTxt.classList.add("sites__card__txt");
    sitesCardTxt.textContent = card.city;

    sitesCard.append(sitesCardImg, sitesCardHeadline, sitesCardTxt);
    sitesGrid.append(sitesCard);
});

sitesSection.append(sitesHeadline, sitesTxt, sitesGrid);


// ----- ADVANTAGES ----- //


// ----- FOOTER ----- //