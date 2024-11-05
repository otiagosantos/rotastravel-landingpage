import { MainNavMenu } from "./components/mainNavMenu.js";

const mainNavMenu = new MainNavMenu();

mainNavMenu.whenScroll();


// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(event) {
//         event.preventDefault();

//         // Obtenha o ID de destino do link
//         const targetId = this.getAttribute("href").substring(1);
//         const targetElement = document.getElementById(targetId);

//         // Ajuste o deslocamento com base na altura da barra de navegação
//         const navBarHeight = document.querySelector("#main-nav-menu").offsetHeight;

//         // Use scrollIntoView com behavior: "smooth"
//         window.scrollTo({
//             top: targetElement.getBoundingClientRect().top + window.pageYOffset - navBarHeight,
//             behavior: "smooth"
//         });
//     });
// });


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        const navBarHeight = document.querySelector("#main-nav-menu").offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navBarHeight * 2;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 1000;
        let startTime = null;

        function smoothScroll(currentTime) {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(smoothScroll);
        }

        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(smoothScroll);
    });
});