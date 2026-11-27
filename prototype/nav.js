const navMenu = document.querySelector("#nav-menu");
const menuButton = document.querySelector("#menu-button");

menuButton.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
});