// responsive navbar toggle
const mainNavbar = document.querySelector(".main-navbar");
const ctaNavbar = document.querySelector(".cta-navbar");
const toggleMenu = document.querySelector(".toggle-menu input");

toggleMenu.addEventListener('click', (event) => {
    mainNavbar.classList.toggle("show-navbar");
    ctaNavbar.classList.toggle("show-navbar");
});

// scroll style navbar
window.addEventListener('scroll', (event) => {
    const navbar = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        navbar.classList.add("nav-scroll");
    } else {
        navbar.classList.remove("nav-scroll");
    }
});