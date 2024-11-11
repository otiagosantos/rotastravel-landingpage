
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
    - [X] Change Card Positions Behavior
    - > [ ] Create GUI Navigator.
    - [ ] Change Card Positions Animation
- [ ] Slide cards with Swipe Motion (For Mobile)
- [ ] Refactor Code
    - [ ] Isolate CarouselAppComponent Elements & Refactor their attributes entries. 
    - [ ] Isolate all classes in the correct project directories.

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
                </figure>
            <img src="${cardModel.imgSrc}" href="${cardModel.title} image." >
        `;

        return li;
    }
}

class CarouselAppComponent {


    cardModelList;

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

        this.internalComponents = {
            carouselApp: {
                element: document.querySelector("#carousel-app")
            },
            carouselHandler: {
                element: (() => {
                    const carouselHandler = document.createElement("div");
                    carouselHandler.setAttribute("class", "carousel-handler");
                    return carouselHandler;
                })()
            },
            cardsContainer: {
                element: (() => {
                    const ul = document.createElement("ul");
                    ul.setAttribute("class", "cards-container");
                    return ul;
                })(),
                fill: (cardsList) => {
                    this.internalComponents.cardsContainer.element.innerHTML = ""; // Limpa antes de preencher
                    cardsList.forEach(card => {
                        this.internalComponents.cardsContainer.element.appendChild(CardComponent.render(card));
                    });
                },
                clear: () => {
                    this.internalComponents.cardsContainer.element.innerHTML = "";
                }
            },
            cardsList: this.cardModelList.map(cardModel => CardComponent.render(cardModel)),
            carouselNav: {
                buttons: {
                    generate: (text) => {
                        const btn = document.createElement("button");
                        btn.innerHTML = text;
                        return btn;
                    },
                    toLeft: (() => {
                        return this.internalComponents.carouselNav.buttons.generate("To Left");
                    })(),
                    moreAbout: (() => {
                        return this.internalComponents.carouselNav.buttons.generate("More About");
                    })(),
                    toRight: (() => {
                        return this.internalComponents.carouselNav.buttons.generate("To Right");
                    })()
                },
                element: (() => {
                    const nav = document.createElement("nav");
                    nav.setAttribute("class", "carousel-navigator");

                    nav.appendChild(this.internalComponents.carouselNav.buttons.toLeft);
                    nav.appendChild(this.internalComponents.carouselNav.buttons.moreAbout);
                    nav.appendChild(this.internalComponents.carouselNav.buttons.toRight);

                    // Adicionar event listeners aqui, se necessário
                    return nav;
                }).bind(this)() // Chamamos bind(this) para garantir acesso correto ao objeto interno
            }
        };

    }

    createCarouselHandler() {

    }

    createCardsContainer() {
        //create cards-container element and their attributes.
        const ul = document.createElement("ul");
        ul.setAttribute("class", "cards-container");
        this.cardsContainer = ul;
    }

    createCards() {
        // this.cardList = [];
        // this.cardModelList.forEach(cardModel => {
        //     this.cardList.push(CardComponent.render(cardModel));
        // })

        this.cardModelList.forEach(cardModel => {
            this.cardsContainer.appendChild(CardComponent.render(cardModel));
        })
    }

    createCarouselNav() {
        //create navigation elements of carousel
        const nav = document.createElement("nav");
        nav.setAttribute("class", "carousel-navigator");

        const buttons = {
            left: function () {
                const btn = document.createElement("button")
                btn.innerHTML = "To Left"
                return btn;
            }(),
            moreAbout: function () {
                const btn = document.createElement("button")
                btn.innerHTML = "More About"
                return btn;
            }(),
            right: function () {
                const btn = document.createElement("button");
                btn.innerHTML = "To Right";
                return btn;
            }()
        }

        nav.appendChild(buttons.left);
        nav.appendChild(buttons.moreAbout);
        nav.appendChild(buttons.right);

        this.carouselNav = nav;


        // Create and render Nav components
        // this.renderNav();

        //Add events - Nav Behaviors 
        this.carouselNav.querySelector(".carousel-navigator button:nth-of-type(1)").addEventListener("click", (event) => {
            this.changeCardModelListPositions("left");
        })

        // this.carouselNav(2).addEventListener("click", (event) => {
        //     alert(`${event.target.innerHTML} is Clicked`);
        // })

        // this.carouselNav(3).addEventListener("click", (event) => {
        //     this.changeCardModelListPositions("right");
        // })
    }

    mount() {

        // Adiciona elementos ao DOM
        this.internalComponents.carouselHandler.element.appendChild(this.internalComponents.cardsContainer.element);
        this.internalComponents.carouselApp.element.appendChild(this.internalComponents.carouselHandler.element);
        this.internalComponents.carouselApp.element.appendChild(this.internalComponents.carouselNav.element);

        // Preenche cards
        this.internalComponents.cardsContainer.fill(this.cardModelList);
    }

    changeCardModelListPositions(direction) {
        if (direction == "right") {
            let aux;
            aux = this.cardModelList[this.cardModelList.length - 1];
            for (let i = this.cardModelList.length - 1; i > 0; i--) {
                this.cardModelList[i] = this.cardModelList[i - 1];
            }
            this.cardModelList[0] = aux;

        } else if (direction == "left") {
            let aux;
            aux = this.cardModelList[0];
            for (let i = 0; i < this.cardModelList.length; i++) {
                this.cardModelList[i] = this.cardModelList[i + 1];
            }
            this.cardModelList[this.cardModelList.length - 1] = aux;
        }

        this.render();
    }

    clearRender() {
        this.carouselApp.innerHTML = "";
    }

    render() {
        this.clearRender();
        this.mount();




        // const carousel = document.createElement("div");
        // carousel.setAttribute("class", "carousel-handler");

        // const ul = document.createElement("ul");
        // ul.setAttribute("class", "cards-container");

        // this.cardModelList.forEach(cardModel => {
        //     ul.appendChild(CardComponent.render(cardModel))
        // });
        // carousel.appendChild(ul);
        // this.component.carouselApp().appendChild(carousel)



    }
}

// function main() {

const cardModelList = new Array();

cardModelList.push(new CardModel("Atacama", "/assets/images/chile-pg-2-b.png", new Gallery()));
cardModelList.push(new CardModel("Chile", "/assets/images/chile-pg-2.png", new Gallery()));
cardModelList.push(new CardModel("Machupichu", "/assets/images/chile-pg-2-c.png", new Gallery()));

const carouselAppComponent = new CarouselAppComponent(cardModelList);

carouselAppComponent.render();


// return carouselAppComponent;

// }

// main();
