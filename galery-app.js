
/*

# Modules:
- [X] Selector of Elements
- [ ] Card Data List
- [ ] Card Builder
- [ ] Cards Container Slide Manupulator
- [ ] Slide cards with Swipe Motion (For Mobile)

*/



const Element = {
    galeryApp: () => {
        return document.querySelector("#galery-app");
    },
    cardsContainer: () => {
        return document.querySelector("#galery-app .cards-container");
    },
    card: () => {
        return document.querySelectorAll("#galery-app .cards-container .card");
    }
}

function main() {
    console.log(Element.card());
}


main();
