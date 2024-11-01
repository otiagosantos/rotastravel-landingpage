export class MainNavMenu {

    element;

    constructor () {
        this.element = document.querySelector("#main-nav-menu");

    }    

    whenScroll () {
        window.addEventListener("scroll", function () {

            console.log(this.element);

            if(window.scrollY > 50) {
                this.element.classList.add("scrolled");
            } else {
                this.element.classList.remove("scrolled");
            }
        }.bind(this))
   }
} 
