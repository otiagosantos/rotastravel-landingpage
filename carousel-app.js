
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
- [ ] Card Builder
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
    cardImageSrc;
    #gallery;

    constructor(title, cardImg, galleryInstance) {
        this.title = title;
        this.cardImageSrc = cardImg;
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

    cardDataModel;

    constructor(cardDataModel) {
        console.log(cardDataModel);
        this.cardDataModel = cardDataModel;
    }

    render() {
        let component = document.createElement("li")
        component.setAttribute("class", "card");
        component.setAttribute("id", `card-${title}`)

        component.innerHTML = `
            <figure>
                <figcaption>${this.cardDataModel.title}</figcaption>
            </figure>    
        `;

        return component;
    }
}

class CarouselAppComponent {
    element = {
        galleryApp: () => {
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
    CardComponent;

    constructor(cardList) {
        this.cardList = cardList;
    }

    render() {
        const component = document.createElement("div");
        component.setAttribute("class", "carouselHandler");
    }
}

function main() {

    const cardModelList = new Array();

    cardModelList.push(new CardDataModel("cartão 1", "", new Gallery()));
    cardModelList.push(new CardDataModel("cartão 2", "", new Gallery()));
    cardModelList.push(new CardDataModel("cartão 3", "", new Gallery()));

    const carouselAppComponent = new CarouselAppComponent(cardModelList);

}

main();
