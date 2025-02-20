let popup = document.querySelector("#wellcome-popup");
let closePopup = document.querySelector("#close-popup");

function toggle () {
    popup.classList.toggle("active");
}

closePopup.addEventListener("click", toggle)