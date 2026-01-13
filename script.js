const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

menuBtn.onclick = () => {
  mobileNav.style.right = "0";
  overlay.style.display = "block";
};

overlay.onclick = () => {
  mobileNav.style.right = "-100%";
  overlay.style.display = "none";
};

// FAQ Toggle
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    let answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Back To Top
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});
