let navbarList = document.querySelector("#navbar_list");
let mobileNavButton = document.querySelector("#mobile_nav-button");

function toggleNavbarList () {
    navbarList.classList.toggle("active");
    mobileNavButton.classList.toggle("active");
}

mobileNavButton.addEventListener("click", toggleNavbarList)

