
/*

# Modules:
- [X] Selector of Elements
- [X] Card Data Model & List
- [ ] Card Builder
- [ ] Cards Container Slide Manupulator
- [ ] Slide cards with Swipe Motion (For Mobile)

*/

class Gallery {
    imgSrc;
    description;

    constructor (imgSrc, description) {
       this.imgSrc = imgSrc;
       this.description = description; 
    }
}

class CardDataModel {

    title;
    cardImageSrc;
    #gallery;

    constructor (title, cardImg, galleryInstance) {
        this.title = title;
        this.cardImageSrc = cardImg;
        this.#gallery = galleryInstance;
    }

    get gallery () {
        return this.#gallery;
    } 

    set gallery (galleryInstance) {
        this.#setGalery(galleryInstance);
    }

    #setGalery(galleryInstance) {
        this.#gallery = galleryInstance;
    }

}

const cardDataList = new Array();

cardDataList.push(new CardDataModel("cartão 1", "", new Gallery()));
cardDataList.push(new CardDataModel("cartão 2", "", new Gallery()));
cardDataList.push(new CardDataModel("cartão 3", "", new Gallery()));
console.log(cardDataList);
// const cardsDataList = [
//     {
//         title: "Card X",
//         cardImageSrc: "",
//         gallery: [
//             {
//                 imgSrc: "",
//                 description: ""
//             }
//         ]
//     }
// ]

const Element = {
    galleryApp: () => {
        return document.querySelector("#gallery-app");
    },
    cardsContainer: () => {
        return document.querySelector("#gallery-app .cards-container");
    },
    card: () => {
        return document.querySelectorAll("#gallery-app .cards-container .card");
    }
}

function main() {
    // console.log(Element.card());
}

main();
