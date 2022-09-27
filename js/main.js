let burgerBtn = document.querySelector(".menu-burger");
let nav = document.querySelector(".nav");
console.log(burgerBtn);

burgerBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  nav.classList.contains("active")
    ? burgerBtn.classList.add("fa-xmark")
    : burgerBtn.classList.remove("fa-xmark");
});
