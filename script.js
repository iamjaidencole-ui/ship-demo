const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
  mobileNav.classList.add("active");
  overlay.style.display = "block";
};

overlay.onclick = closeMenu;

function closeMenu() {
  mobileNav.classList.remove("active");
  overlay.style.display = "none";
}

// FAQ
document.querySelectorAll(".faq-question").forEach(q => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("active");
  });
});

// Scroll to top
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
