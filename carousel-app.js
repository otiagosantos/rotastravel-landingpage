
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

    // cardDataModel;

    // constructor(cardDataModel) {
    //     console.log(cardDataModel);
    //     this.cardDataModel = cardDataModel;
    // }

    static render(cardModel) {

        let component = document.createElement("li")
        component.setAttribute("class", "card");
        component.setAttribute("id", `card-${cardModel.title}`)

        component.innerHTML = `
            <figure>
                <figcaption>${cardModel.title}</figcaption>
            </figure>
        `;

        return component;
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
    // CardComponent;

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

    }
    
    render() {
        const component = document.createElement("div");
        component.setAttribute("class", "carousel-handler");
        
        component.innerHTML = `
            <ul>
            ${
                this.cardModelList.map(cardModel => {
                    console.log(CardComponent.render(cardModel));
                    return CardComponent.render(cardModel).innerHTML;
                }).join('')
            }
            </ul>
        `;

        // console.log(this.element.carouselApp())
        this.element.carouselApp().appendChild(component)
    }
}

function main() {

    const cardModelList = new Array();

    cardModelList.push(new CardModel("cartão 1", "", new Gallery()));
    cardModelList.push(new CardModel("cartão 2", "", new Gallery()));
    cardModelList.push(new CardModel("cartão 3", "", new Gallery()));

    const carouselAppComponent = new CarouselAppComponent(cardModelList);

    const carousel = carouselAppComponent.render();



}

main();
