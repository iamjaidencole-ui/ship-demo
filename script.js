const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

function closeMenu(){
  mobileNav.style.right = "-100%";
  overlay.style.display = "none";
}

menuBtn.onclick = () => {
  mobileNav.style.right = "0";
  overlay.style.display = "block";
};

overlay.onclick = closeMenu;

document.querySelectorAll(".mobile-nav a").forEach(link=>{
  link.addEventListener("click", closeMenu);
});

// FAQ
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click",()=>{
    let ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

// Back To Top
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});
