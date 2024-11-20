/*
# Modules:
- [X] Selector of Elements
- [X] Card Data Model & List
- [X] Card Builder
- [ ] Cards Container Slide Manupulator
    - [X] Change Card Positions Behavior
    - > [X] Create GUI Navigator.
    - [X] Change Card Positions Animation
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

    cardModelList;

    isCardsMoving;


    cardWidth = {
        smallW: 500,
        bigW: 500
    }

    constructor(cardModelList) {
        this.cardModelList = cardModelList;

        this.cardsContainerElement = document.querySelector("#carousel-app .cards-container");
        this.initCarouselNavigator();
        this.isCardsEnableToMove = true;

    }

    #generateCard(cardModel, width = 400) {
        const li = document.createElement("li");
        li.setAttribute("class", "card");
        li.setAttribute("id", `card-${cardModel.title.trim()}`);

        li.style.width = `${width}px`;

        li.innerHTML = `
        <figure>
            <figcaption>${cardModel.title}</figcaption>
            </figure>
        <img src="${cardModel.imgSrc}" href="${cardModel.title} image." >
    `;

        return li;
    }

    putCardsOnContainer() {

        for (let i = 0; i < 3; i++) {
            const cardElement = this.#generateCard(this.cardModelList[i], i == 1 ? this.cardWidth.bigW : this.cardWidth.smallW);
            this.cardsContainerElement.appendChild(cardElement);
        }
    }

    clearCardsContainer() {
        this.cardsContainerElement.innerHTML = "";
    }

    changeCardModelListPosition(direction) {

        //Change position of cardsModels on List:
        if (direction == "left") {
            let aux;
            aux = this.cardModelList[this.cardModelList.length - 1];
            for (let i = this.cardModelList.length - 1; i > 0; i--) {
                this.cardModelList[i] = this.cardModelList[i - 1];
            }
            this.cardModelList[0] = aux;

        } else if (direction == "right") {
            let aux;
            aux = this.cardModelList[0];
            for (let i = 0; i < this.cardModelList.length; i++) {
                this.cardModelList[i] = this.cardModelList[i + 1];
            }
            this.cardModelList[this.cardModelList.length - 1] = aux;
        }



        //refresh render:
        this.clearCardsContainer();
        this.putCardsOnContainer();
    }

    animateChangeCardsPositions(direction) {

        //--------------------------- Animation test
        // Animate and change only style position:
        const cardElementList = document.querySelectorAll("li.card");

        // const smallW = parseFloat(getComputedStyle(cardElementList[0]).width);
        // const bigW = parseFloat(getComputedStyle(cardElementList[1]).width);

        if (direction == "left") {

            // To Left
            cardElementList[1].style.width = `${this.cardWidth.smallW}px`;

            cardElementList[0].style.transform = `translateX(${this.cardWidth.smallW}px)`;
            cardElementList[1].style.transform = `translateX(${this.cardWidth.smallW}px)`;
            cardElementList[2].style.transform = `translateX(${-this.cardWidth.smallW * 2}px)`;


            cardElementList[2].style.width = `${this.cardWidth.bigW}px`;

            cardElementList[2].style.opacity = "0";


        } else if (direction == "right") {

            //  To Right:
            cardElementList[1].style.width = `${this.cardWidth.smallW}px`;

            cardElementList[0].style.transform = `translateX(${this.cardWidth.smallW * 2}px)`;
            cardElementList[1].style.transform = `translateX(${-this.cardWidth.smallW}px)`;
            cardElementList[2].style.transform = `translateX(${-this.cardWidth.smallW}px)`;


            cardElementList[2].style.width = `${this.cardWidth.bigW}px`;


            cardElementList[0].style.opacity = "0";
        }


    }

    moveCards(direction) {

        if (this.isCardsEnableToMove) {
            this.isCardsEnableToMove = false;
            this.animateChangeCardsPositions(direction);

            setTimeout(function () {
                this.changeCardModelListPosition(direction);
                this.isCardsEnableToMove = true;
            }.bind(this), 600);
        }

    }

    initCarouselNavigator() {
        this.carouselNavigator = document.querySelector("#carousel-app .carousel-navigator");

        console.log(this.carouselNavigator.children[0]);

        this.carouselNavigator.children[0].addEventListener("click", function () {
            this.moveCards("left")
        }.bind(this));

        this.carouselNavigator.children[1].addEventListener("click", function () {
            // TO-DO: Show Gallery Pop UP:
        }.bind(this));

        this.carouselNavigator.children[2].addEventListener("click", function () {
            // this.changeCardModelListPosition("right");
            this.moveCards("right");
        }.bind(this));

    }

}

const cardModelList = new Array();

cardModelList.push(new CardModel("1", "/assets/images/chile-pg-2.png"));
cardModelList.push(new CardModel("2", "/assets/images/chile-pg-2-b.png"));
cardModelList.push(new CardModel("3", "/assets/images/chile-pg-2-c.png"));
cardModelList.push(new CardModel("4", "/assets/images/chile-pg-2-d.png"));
cardModelList.push(new CardModel("5", "/assets/images/chile-pg-2-e.png"));
cardModelList.push(new CardModel("6", "/assets/images/chile-pg-2-f.png"));

const carouselComponent = new CarouselComponent(cardModelList);

carouselComponent.putCardsOnContainer(cardModelList);
