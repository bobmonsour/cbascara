const navToggle = document.querySelector("#nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});

confetti({
  spread: 180,
});
