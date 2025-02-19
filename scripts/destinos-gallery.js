document.addEventListener('DOMContentLoaded', function (){
    const cardList = document.querySelector("#gallery-app_card-list");
    const cards = document.querySelectorAll("#gallery-app_card-list li");
    const btnPrev = document.querySelector("#gallery-app_navmenu .btn:first-child");
    const btnNext = document.querySelector("#gallery-app_navmenu .btn:last-child");

    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;
    const cardsPerView = 3;

    function updateGallery() {
        const offset = -(currentIndex * cardWidth);
        cardList.style.transform = `translateX(${offset}px)`;
    }

    btnPrev.addEventListener('click', function() {
        if(currentIndex > -1) {
            currentIndex--;
        } else {
            currentIndex = totalCards - cardsPerView +1;
        }
        updateGallery();
    })

    btnNext.addEventListener('click', function () {
        if (currentIndex < totalCards - cardsPerView +1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateGallery();
    })
})