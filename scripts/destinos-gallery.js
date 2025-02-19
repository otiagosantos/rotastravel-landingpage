document.addEventListener('DOMContentLoaded', function () {
    const cardList = document.querySelector('#gallery-app_card-list ul');
    const cards = document.querySelectorAll('#gallery-app_card-list ul li');
    const btnPrev = document.querySelector('#gallery-app_navmenu .btn:first-child');
    const btnNext = document.querySelector('#gallery-app_navmenu .btn:last-child');

    let currentIndex = 1;
    const cardWidth = cards[0].offsetWidth;
    const totalCards = cards.length;
    const cardsPerView = 3; // Mostra 3 cards por vez

    // Função para mover os cards
    function updateCarousel() {
        const offset = -(currentIndex * cardWidth);
        cardList.style.transform = `translateX(${offset}px)`;
    }

    // Botão para ir para o card anterior
    btnPrev.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalCards - cardsPerView;
        }
        updateCarousel();
    });

    // Botão para ir para o próximo card
    btnNext.addEventListener('click', function () {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    // Loop automático a cada 3 segundos
    // setInterval(function () {
    //     btnNext.click();
    // }, 3000);
});
