
let hero = {
    image: "https://dazzling-squirrel-77a63d.netlify.app/imgs/hero.png",
    headline: "Find out how we can save your time in Backpacking in Europe",
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac amet id eget scelerisque amet etiam in sit commodo. Pretium ut duis orci pulvinar pretium id consectetur.",
    icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Globe.png"
}


let services = [
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/exploring.png",
        headline: "Promoting your territory towards foreign tourists",
        text: "EasyCamper wants to promote the excellence of Italian food and wine, art, culture and the economy.",
        linktext: "Discover the places linked to your area that you can link to your structure"
    },
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/tourist_map.png",
        headline: "Additional services designed for the needs of campers",
        text: "Travelling often means that you dont have time to organise excursions along your route. EasyCamper takes care of that!",
        linktext: "Discover the Guided Tours and additional services that you can link to your structure"
    }, 
    {
        illustration: "https://dazzling-squirrel-77a63d.netlify.app/imgs/illustrations/destination.png",
        headline: "Free online showcase with promotion in Italy and abroad",
        text: "Forget about the time and money spent on creating your own website or e-commerce system for bookings.",
        linktext: "Easycamper creates your showcase. Discover the terms and conditions for joining the Network"
    },
]

let facilities = {
    headline: "Making your facility known is our priority",
    options : [
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/list-check.png",
            headline: "Choose the type of stop",
            text: "Select the type of stopover you are ordering from Equipped Area, Camping and Agricamping"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/spellcheck.png",
            headline: "Describe your structure",
            text: "Describe thee property, location and nearby attractions"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Text-Frame-Add.png",
            headline: "Build your showcase",
            text: "Add photos, videos and descriptions Define the price of each type of that make your propety truly"
        },
        {
            icon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Calendar-Today.png",
            headline: "Prices and Availability",
            text: "pitch and configure the availablity calendar."
        },
    ]
}

let sites = {
    headline: "Join the community campervan sites managers.",
    text: "Discover all the equibbed areas in Italy. Find the shop with all the services for you and your camper.",
    btnicon: "https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/arrow-icon.png",
    places: [
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/lucciano.png",
            name: "Lucciano",
            city: "Rome"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/cremonesi.png",
            name: "Cremonesi",
            city: "Florence"
        },
        {
            img: "https://dazzling-squirrel-77a63d.netlify.app/imgs/beneventi.png",
            name: "Beneventi",
            city: "Venice"
        },
    ]
}

let advantages = [
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/compare.png",
        headline: "Convenience and Transparency",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/library_books.png",
        headline: "Digital marketing and editorial support",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
    {
        icon:"https://dazzling-squirrel-77a63d.netlify.app/imgs/icons/Compare-HSV.png",
        headline: "Community of services dedicated to campers",
        text: "You don’t have to find out later or only after camenierk and trarsparent Easyamper ratains pliacas and beautias of your tariaary and halpin a fixed commission on each transaction of 5"
    },
]

// Opret dit dataobjekt til footerens indhold herunder

let footer = {
    text: "Easy Camper",
    headline: "When Passion Meets Comfort.",
    list1:
    `
        <ul class="footer__list">
            <li class="footer__list__item">
                Discover the Network
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Where to shop</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Tour Guided</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Our Tours</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">About Us</a>
            </li>
        </ul>
    `,
    list2:
    `
        <ul class="footer__list">
            <li class="footer__list__item">
                Become a Manager
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Join your Pairing</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Offer your Service</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Are you a guide?</a>
            </li>
        </ul>
    `,
    list3:
    `
        <ul class="footer__list">
            <li class="footer__list__item">
                Assistance
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Support Center</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">FAQs</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Cancallation Options</a>
            </li>
            <li class="footer__list__item">
                <a href="" class="footer__list__link">Reliablity and Sequrity</a>
            </li>
        </ul>
    `,
    address:
    `
        <small class="footer__address__copyright">EazyCamper. All rights reserved.</small>
        <ul class="footer__address__list">
            <li class="footer__address__list__item">
                <a href="" class="footer__address__list__link">About</a>
            </li>
            <li class="footer__address__list__item">
                <a href="" class="footer__address__list__link">Site Map</a>
            </li>
            <li class="footer__address__list__item">
                <a href="" class="footer__address__list__link">Terms</a>
            </li>
            <li class="footer__address__list__item">
                <a href="" class="footer__address__list__link">Privacy Policy</a>
            </li>
            <li class="footer__address__list__item">
                <a href="" class="footer__address__list__link">Teams</a>
            </li>
        </ul>
    `
}

// let footer = {
//     text: "Easy Camper",
//     headline: "When Passion Meets Comfort.",
//     lists: [
//         {
//             items: [
//             {headline: "Discover the Network"},
//             {listitem: "Where to shop"},
//             {listitem: "Tour Guided"},
//             {listitem: "Our Tours"},
//             {listitem: "About Us"}
//         ]
//         },
//         {
//             headline: "Become a Manager",
//             listitem: "Join your Pairing",
//             listitem: "Offer your Service",
//             listitem: "Are you a guide?"
//         },
//         {
//             headline: "Assistance",
//             listitem: "Support Center",
//             listitem: "FAQs",
//             listitem: "Cancallation Options",
//             listitem: "Reliablity and Sequrity",
//         }
//     ],
//     address: [
//         {
//             headline: "EazyCamper. All rights reserved.",
//             listitem1: "About",
//             listitem2: "Site Map",
//             listitem3: "Terms",
//             listitem4: "Privacy Policy",
//             listitem5: "Teams",
//         }
//     ]
// }