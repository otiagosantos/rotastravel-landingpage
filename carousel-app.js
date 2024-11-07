
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
        carouselHendler: () => {
            return document.querySelector("#carousel-app .carousel-handler")
        },
        cardsContainer: () => {
            return document.querySelector("#carousel-app .carousel-handler .cards-container");
        },
        card: () => {
            return document.querySelectorAll("#carousel-app .carousel-handler .cards-container .card");
        },
        nav: () => {
            // TO-DO: Change to specify element only inside the "#carousel-app" id.
            return document.querySelector(".carousel-navigator");
        },
        navButton: (ref) => {
            return document.querySelector(`.carousel-navigator button:nth-of-type(${ref})`);
        }
    }

    cardModelList;

    // positions = [] 

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

        this.initializeNav();
    }

    // setPositions() {}

    changeCardModelListPositions(direction) {
        console.log(this.cardModelList);


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


        ///////
        // let aux;
        // aux = this.cardModelList[0];
        // this.cardModelList[0] = this.cardModelList[1];
        // this.cardModelList[1] = this.cardModelList[2];
        // this.cardModelList[2] = aux;

        this.render();
    }

    clearRender() {
        this.element.carouselApp().innerHTML = "";
    }

    initializeNav() {
        console.log(this.element.navButton(1));
        this.element.navButton(1).addEventListener("click", (event) => {
            this.changeCardModelListPositions("left");
        })
        
        this.element.navButton(2).addEventListener("click", (event) => {
            alert(`${event.target.innerHTML} is Clicked`);
        })

        this.element.navButton(3).addEventListener("click", (event) => {
            this.changeCardModelListPositions("right");
        })
    }

    render() {

        this.clearRender();

        const carousel = document.createElement("div");
        carousel.setAttribute("class", "carousel-handler");

        const ul = document.createElement("ul");
        ul.setAttribute("class", "cards-container");

        this.cardModelList.forEach(cardModel => {
            ul.appendChild(CardComponent.render(cardModel))
        });
        carousel.appendChild(ul);
        this.element.carouselApp().appendChild(carousel)




        // console.log
    }
}

// function main() {

const cardModelList = new Array();

cardModelList.push(new CardModel("Atacama", "/assets/images/atacama-pg-1.png", new Gallery()));
cardModelList.push(new CardModel("Chile", "/assets/images/chile-pg-2.png", new Gallery()));
cardModelList.push(new CardModel("Machupichu", "/assets/images/machupichu-pg-4.png", new Gallery()));

const carouselAppComponent = new CarouselAppComponent(cardModelList);

carouselAppComponent.render();


// return carouselAppComponent;

// }

// main();
