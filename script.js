// Hide and show nav
const navButton = document.querySelector("#nav-icon");
const navMenu = document.querySelector("#nav-menu");
const nav = document.querySelector(".nav");
const navLinks = Array.from(document.getElementsByClassName("nav__link"));

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__icon-active");
  navMenu.classList.toggle("nav__menu-active");
});

console.log(navLinks);

navLinks.map((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu-active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("nav__box-shadow");
  } else {
    nav.classList.remove("nav__box-shadow");
  }
});
