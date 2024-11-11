/*
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


class CardModel {

    title;
    imgSrc;

    constructor(title, imgSrc) {
        this.title = title;
        this.imgSrc = imgSrc;
    }
}

class CarouselComponent {

    cardsContainerElement;
    carouselNavigator;

    cardModelList

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

        this.cardsContainerElement = document.querySelector("#carousel-app .cards-container");
        this.initCarouselNavigator();
    }

    #generateCard(cardModel) {
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

    putCardsOnContainer() {
        this.cardModelList.forEach(cardModel => {
            const cardElement = this.#generateCard(cardModel);
            this.cardsContainerElement.appendChild(cardElement);
        })
    }

    clearCardsContainer() {
        this.cardsContainerElement.innerHTML = "";
    }

    changeCardModelListPosition(direction) {
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
        this.clearCardsContainer();
        this.putCardsOnContainer();
    }

    initCarouselNavigator () {
        this.carouselNavigator = document.querySelector("#carousel-app .carousel-navigator");

        console.log(this.carouselNavigator.children[0]);
    
        this.carouselNavigator.children[0].addEventListener("click", function () {
            this.changeCardModelListPosition("left");
        }.bind(this));

        this.carouselNavigator.children[1].addEventListener("click", function () {
            // TO-DO: Show Gallery Pop UP:
        }.bind(this));

        this.carouselNavigator.children[2].addEventListener("click", function () {
            this.changeCardModelListPosition("right");
        }.bind(this));

    }

}

const cardModelList = new Array();

cardModelList.push(new CardModel("Atacama", "/assets/images/chile-pg-2-b.png"));
cardModelList.push(new CardModel("Chile", "/assets/images/chile-pg-2.png"));
cardModelList.push(new CardModel("Machupichu", "/assets/images/chile-pg-2-c.png"));

const carouselComponent = new CarouselComponent(cardModelList);

carouselComponent.putCardsOnContainer(cardModelList);
