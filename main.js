// Loader
window.addEventListener("load", () => {
  document.getElementById("spinner").style.display = "none";
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});
