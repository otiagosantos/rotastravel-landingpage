
/*

// console.log(cardDataList);
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







# Modules:
- [X] Selector of Elements
- [X] Card Data Model & List
- [X] Card Builder
- [ ] Cards Container Slide Manupulator
- [ ] Slide cards with Swipe Motion (For Mobile)

*/

class Gallery {
    imgSrc;
    description;

    constructor(imgSrc, description) {
        this.imgSrc = imgSrc;
        this.description = description;
    }
}

class CardModel {

    title;
    workdir;
    imgSrc;
    #gallery;

    constructor(title, imgSrc, galleryInstance) {
        this.title = title;
        this.imgSrc = imgSrc;
        this.#gallery = galleryInstance;
    }

    get gallery() {
        return this.#gallery;
    }

    set gallery(galleryInstance) {
        this.#setGalery(galleryInstance);
    }

    #setGalery(galleryInstance) {
        this.#gallery = galleryInstance;
    }

}

class CardComponent {

    // cardDataModel;

    // constructor(cardDataModel) {
    //     console.log(cardDataModel);
    //     this.cardDataModel = cardDataModel;
    // }

    static render(cardModel) {

        const li = document.createElement("li");
        li.setAttribute("class", "card");
        li.setAttribute("id", `card-${cardModel.title.trim()}`);

        li.innerHTML = `
            <figure>
                <figcaption>${cardModel.title}</figcaption>
                <img src="${cardModel.imgSrc}" href="${cardModel.title} image." >
            </figure>
        `;

        return li;
    }
}

class CarouselAppComponent {
    element = {
        carouselApp: () => {
            return document.querySelector("#carousel-app");
        },
        cardsContainer: () => {
            return document.querySelector("#carousel-app .cards-container");
        },
        card: () => {
            return document.querySelectorAll("#carousel-app .cards-container .card");
        }
    }

    cardModelList;

    positions = [] 

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

    }

    setPositions() {
        
    }

    render() {
        const carousel = document.createElement("div");
        carousel.setAttribute("class", "carousel-handler");

        const ul = document.createElement("ul");
        ul.setAttribute("class", "cards-container");

        this.cardModelList.forEach(cardModel => {
            ul.appendChild(CardComponent.render(cardModel))
        });
        carousel.appendChild(ul);
        this.element.carouselApp().appendChild(carousel)
    }
}

function main() {

    const cardModelList = new Array();

    // cardModelList.push(new CardModel("Chile", "/assets/images/chile-pg-2.png", new Gallery()));
    cardModelList.push(new CardModel("Argentina", "", new Gallery()));
    cardModelList.push(new CardModel("Chile", "", new Gallery()));
    cardModelList.push(new CardModel("Bolívia", "", new Gallery()));

    const carouselAppComponent = new CarouselAppComponent(cardModelList);

    const carousel = carouselAppComponent.render();



}

main();
