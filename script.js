// Hide and show nav
const navButton = document.querySelector("#nav-icon");
const navMenu = document.querySelector("#nav-menu");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("nav__icon-active");
  navMenu.classList.toggle("nav__menu-active");
});
