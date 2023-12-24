let button_header_nav = document.querySelector(".header-button");
let nav               = document.querySelector("nav");
let active_nav = false;

button_header_nav.addEventListener("click", () => {
    if(active_nav) {
        nav.style.display = "none";
        active_nav = false;
    } else {
        nav.style.display = "flex";
        active_nav = true;
    }
});