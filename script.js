const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.onclick = () => {
  mobileMenu.style.right = "0";
};

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
    mobileMenu.style.right = "-100%";
  }
});

document.querySelectorAll(".m-link").forEach(link=>{
  link.onclick=()=> mobileMenu.style.right="-100%";
});

// FAQ
document.querySelectorAll(".faq-question").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const ans = btn.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});

// Scroll animations
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.2});

document.querySelectorAll(".fade-up, .fade-in").forEach(el=>observer.observe(el));

// Scroll To Top
const topBtn = document.getElementById("topBtn");

window.onscroll = () =>{
  if(window.scrollY > 400) topBtn.style.display="block";
  else topBtn.style.display="none";
};

topBtn.onclick = ()=> window.scrollTo({top:0,behavior:"smooth"});
