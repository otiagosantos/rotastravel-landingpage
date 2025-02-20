document.addEventListener('DOMContentLoaded', function (){
    const cardList = document.querySelector("#gallery-app_card-list");
    const cards = document.querySelectorAll("#gallery-app_card-list li");
    const btnPrev = document.querySelector("#gallery-app_navmenu .btn:first-child");
    const btnNext = document.querySelector("#gallery-app_navmenu .btn:last-child");
    const btnSeeMore = document.querySelector("#gallery-app_navmenu .btn:nth-child(2)");
    const appWidth = document.querySelector("#destinos_gallery-app").clientWidth;

    console.log(appWidth);
    
    const isMobile = window.matchMedia("(max-width:1050px)").matches;
    
    let currentIndexPosition = isMobile ? 0 : 1;
    // let currentIndexPosition = 0;
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;
    const cardsPerView = isMobile ? 1 : 3;
    let cardSelected = currentIndexPosition;

    function updateGallery() {
        const x = -((currentIndexPosition - 1) * cardWidth);
        const y = -(currentIndexPosition * cardWidth) + cardWidth / 4;
        const offset = isMobile ? y : x;
        cardList.style.transform = `translateX(${offset}px)`;
        cardSelected = currentIndexPosition;
    }

    btnPrev.addEventListener('click', function() {
        if(currentIndexPosition > 0) {
            currentIndexPosition--;
        } else {
            currentIndexPosition = totalCards - 1;
        }
        updateGallery();
    });

    btnNext.addEventListener('click', function () {
        if (currentIndexPosition < totalCards - 1) {
            currentIndexPosition++;
        } else {
            currentIndexPosition = 0;
        }
        updateGallery();
    });


    btnSeeMore.addEventListener('click', function () {
        console.log(`ver mais de: ${cardSelected}`);
        console.log(cards[cardSelected]);
    });

    updateGallery();
})