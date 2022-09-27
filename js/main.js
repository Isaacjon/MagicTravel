let burgerBtn = document.querySelector(".menu-burger");
let nav = document.querySelector(".nav");

const toggleNav = () => {
  nav.classList.toggle("active");

  nav.classList.contains("active")
    ? burgerBtn.classList.add("fa-xmark")
    : burgerBtn.classList.remove("fa-xmark");
};

burgerBtn.addEventListener("click", toggleNav);

window.addEventListener("click", (e) => {
  burgerBtn.classList.contains("fa-xmark") &&
    e.target != burgerBtn &&
    e.target != nav &&
    toggleNav();
});
