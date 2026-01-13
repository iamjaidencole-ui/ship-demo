// ===== Mobile Menu =====
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");
const links = mobileNav.querySelectorAll("a");

menuBtn.onclick = () => openMenu();
overlay.onclick = () => closeMenu();
links.forEach(link => link.onclick = closeMenu);

function openMenu(){
  mobileNav.style.right = "0";
  overlay.style.display = "block";
}

function closeMenu(){
  mobileNav.style.right = "-270px";
  overlay.style.display = "none";
}

// ===== FAQ Toggle =====
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.onclick = () => {
    let ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  };
});

// ===== Back To Top =====
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 250 ? "block" : "none";
});
topBtn.onclick = () => window.scrollTo({top:0,behavior:"smooth"});

// ===== Scroll Reveal (Hero & About) =====
const revealElements = document.querySelectorAll(".reveal");
function reveal(){
  revealElements.forEach((el,index) => {
    const top = el.getBoundingClientRect().top;
    const delay = el.dataset.delay || 0;
    if(top < window.innerHeight - 100){
      setTimeout(() => el.classList.add("show"), delay*300);
    }
  });
}
window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===== Hero Parallax =====
const hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.3;
  hero.style.backgroundPositionY = `${offset}px`;
});
