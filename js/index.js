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
heroImg.setAttribute("src", hero.image);
heroImg.setAttribute("alt", "Kvinde som står i et kontor");

let heroTxtContainer = document.createElement("div");
heroTxtContainer.classList.add("hero__textbox");

let heroHeadline = document.createElement("h1");
heroHeadline.classList.add("hero__headline");
function addSpan(text, span) {
    return text.replace(span, `<span>${span}</span>`);
}
heroHeadline.innerHTML = addSpan(hero.headline, "save your time");

let heroTxt = document.createElement("p");
heroTxt.classList.add("hero__txt");
heroTxt.textContent = hero.copy;

let heroBtn = document.createElement("a");
heroBtn.classList.add("hero__btn", "btn");
heroBtn.setAttribute("href", "");
heroBtn.innerHTML = `<img src="${hero.icon}" alt="Globe icon"> Explore`;

heroTxtContainer.append(heroHeadline, heroTxt, heroBtn);
heroSection.append(heroImg, heroTxtContainer);



// ----- SERVICES ----- //

services.forEach(card => {
    let servicesCard = document.createElement("article");
    servicesCard.classList.add("services__card");

    let servicesCardImg = document.createElement("img");
    servicesCardImg.classList.add("services__card__img");
    servicesCardImg.setAttribute("src", card.illustration);
    servicesCardImg.setAttribute("alt", "Illustration");

    let servicesCardHeadline = document.createElement("h3");
    servicesCardHeadline.classList.add("services__card__headline");
    servicesCardHeadline.textContent = card.headline;

    let servicesCardTxt = document.createElement("p");
    servicesCardTxt.classList.add("services__card__txt");
    servicesCardTxt.textContent = card.text;

    let servicesCardLink = document.createElement("a");
    servicesCardLink.classList.add("services__card__link", "link");
    servicesCardLink.setAttribute("href", "");
    servicesCardLink.textContent = card.linktext;

    servicesCard.append(servicesCardImg, servicesCardHeadline, servicesCardTxt, servicesCardLink);
    servicesSection.append(servicesCard);
});



// ----- FACILITIES ----- //

let facilitiesHeadline = document.createElement("h2");
facilitiesHeadline.classList.add("facilities__headline");
facilitiesHeadline.textContent = facilities.headline;

let facilitiesGrid = document.createElement("div");
facilitiesGrid.classList.add("facilities__grid");

facilities.options.forEach(card => {
    let facilitiesCard = document.createElement("article");
    facilitiesCard.classList.add("facilities__card");

    let facilitiesCardImg = document.createElement("img");
    facilitiesCardImg.classList.add("facilities__card__img");
    facilitiesCardImg.setAttribute("src", card.icon);
    facilitiesCardImg.setAttribute("alt", "Small illustration");

    let facilitiesCardHeadline = document.createElement("h3");
    facilitiesCardHeadline.classList.add("facilities__card__headline");
    facilitiesCardHeadline.textContent = card.headline;

    let facilitiesCardTxt = document.createElement("p");
    facilitiesCardTxt.classList.add("facilities__card__txt");
    facilitiesCardTxt.textContent = card.text;

    let facilitiesCardLink = document.createElement("a");
    facilitiesCardLink.setAttribute("href", "");
    facilitiesCardLink.classList.add("facilities__card__link", "link");
    facilitiesCardLink.textContent = "Show me more";

    facilitiesCard.append(facilitiesCardImg, facilitiesCardHeadline, facilitiesCardTxt, facilitiesCardLink);
    facilitiesGrid.append(facilitiesCard);
});

facilitiesSection.append(facilitiesHeadline, facilitiesGrid);



// ----- SITES ----- //

let sitesTxtContainer = document.createElement("div");
sitesTxtContainer.classList.add("sites__textbox");

let sitesHeadline = document.createElement("h2");
sitesHeadline.classList.add("sites__headline");
sitesHeadline.textContent = sites.headline;

let sitesTxt = document.createElement("p");
sitesTxt.classList.add("sites__txt");
sitesTxt.textContent = sites.text;

let sitesBtn = document.createElement("a");
sitesBtn.classList.add("sites__btn", "btn");
sitesBtn.setAttribute("href", "");
sitesBtn.innerHTML = `<img src="${sites.btnicon}" alt="Start icon"> Start`;

sitesTxtContainer.append(sitesHeadline, sitesTxt, sitesBtn);

let sitesGrid = document.createElement("div");
sitesGrid.classList.add("sites__grid");

sites.places.forEach(card => {
    let sitesCard = document.createElement("article");
    sitesCard.classList.add("sites__card");

    let sitesCardImg = document.createElement("img");
    sitesCardImg.classList.add("sites__card__img");
    sitesCardImg.setAttribute("src", card.img);
    sitesCardImg.setAttribute("alt", `Person named ${card.name}`);

    let sitesCardHeadline = document.createElement("h3");
    sitesCardHeadline.classList.add("sites__card__headline");
    sitesCardHeadline.textContent = card.name;

    let sitesCardTxt = document.createElement("p");
    sitesCardTxt.classList.add("sites__card__txt");
    sitesCardTxt.textContent = card.city;

    let sitesCardLink = document.createElement("a");
    sitesCardLink.classList.add("sites__card__link", "link");
    sitesCardLink.setAttribute("href", "");
    sitesCardLink.textContent = "View the Site";

    sitesCard.append(sitesCardImg, sitesCardHeadline, sitesCardTxt, sitesCardLink);
    sitesGrid.append(sitesCard);
});

sitesSection.append(sitesTxtContainer, sitesGrid);



// ----- ADVANTAGES ----- //

let advantagesHeadline = document.createElement("h2");
advantagesHeadline.classList.add("advantages__headline");
advantagesHeadline.textContent = "Our Advantages";

let advantagesGrid = document.createElement("div");
advantagesGrid.classList.add("advantages__grid");

advantages.forEach(card => {
    let advantagesCard = document.createElement("article");
    advantagesCard.classList.add("advantages__card");

    let advantagesCardImg = document.createElement("img");
    advantagesCardImg.classList.add("advantages__card__img");
    advantagesCardImg.setAttribute("src", card.icon);
    advantagesCardImg.setAttribute("alt", "Small illustration");

    let advantagesCardHeadline = document.createElement("h3");
    advantagesCardHeadline.classList.add("advantages__card__headline");
    advantagesCardHeadline.textContent = card.headline;

    let advantagesCardTxt = document.createElement("p");
    advantagesCardTxt.classList.add("advantages__card__txt");
    advantagesCardTxt.textContent = card.text;

    advantagesCard.append(advantagesCardImg, advantagesCardHeadline, advantagesCardTxt);
    advantagesGrid.append(advantagesCard);
});

advantagesSection.append(advantagesHeadline, advantagesGrid);



// ----- FOOTER ----- //

let footerContainer = document.createElement("div");
footerContainer.classList.add("footer__container");

let footerTxtContainer = document.createElement("div");
footerTxtContainer.classList.add("footer__textbox");

let footerTxt = document.createElement("p");
footerTxt.classList.add("footer__txt");
footerTxt.textContent = footer.text;

let footerHeadline = document.createElement("h2");
footerHeadline.classList.add("footer__headline");
footerHeadline.textContent = footer.headline;

footerTxtContainer.append(footerTxt, footerHeadline);

let footerListContainer = document.createElement("div");
footerListContainer.classList.add("footer__list__container");
footerListContainer.innerHTML = footer.list1 + footer.list2 + footer.list3;

footerContainer.append(footerTxtContainer, footerListContainer);

let footerAddress = document.createElement("address");
footerAddress.classList.add("footer__address");
footerAddress.innerHTML = footer.address;

footerSection.append(footerContainer, footerAddress);


// footerListContainer.innerHTML = `
//     <ul class="footer__list">
//         <li class="footer__list__item">
//             Discover the Network
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Where to shop</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Tour Guided</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Our Tours</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">About Us</a>
//         </li>
//     </ul>
//     <ul class="footer__list">
//         <li class="footer__list__item">
//             Become a Manager
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Join your Pairing</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Offer your Service</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Are you a guide?</a>
//         </li>
//     </ul>
//     <ul class="footer__list">
//         <li class="footer__list__item">
//             Assistance
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Support Center</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">FAQs</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Cancallation Options</a>
//         </li>
//         <li class="footer__list__item">
//             <a href="" class="footer__list__link">Reliablity and Sequrity</a>
//         </li>
//     </ul>
// `;


// footerAddress.innerHTML = `
//     <small class="footer__address__copyright">EazyCamper. All rights reserved.</small>
//     <ul class="footer__address__list">
//         <li class="footer__address__list__item">
//             <a href="" class="footer__address__list__link">About</a>
//         </li>
//         <li class="footer__address__list__item">
//             <a href="" class="footer__address__list__link">Site Map</a>
//         </li>
//         <li class="footer__address__list__item">
//             <a href="" class="footer__address__list__link">Terms</a>
//         </li>
//         <li class="footer__address__list__item">
//             <a href="" class="footer__address__list__link">Privacy Policy</a>
//         </li>
//         <li class="footer__address__list__item">
//             <a href="" class="footer__address__list__link">Teams</a>
//         </li>
//     </ul>
// `;