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
    servicesCardImg.classList.add("services__card__headline");
    servicesCardImg.setAttribute("src", card.illustration)

    let servicesCardHeadline = document.createElement("h2");
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


// ----- SITES ----- //


// ----- ADVANTAGES ----- //


// ----- FOOTER ----- //