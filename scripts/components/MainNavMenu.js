export class MainNavMenu {

    element;

    constructor () {
        this.element = document.querySelector("#main-nav-menu");

    }    

    whenScroll () {
        window.addEventListener("scroll", function () {
            if(window.scrollY > 50) {
                this.element.classList.add("scrolled");
            } else {
                this.element.classList.remove("scrolled");
            }
        }.bind(this))
   }
} 
