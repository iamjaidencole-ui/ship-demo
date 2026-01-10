function openMenu(){
document.getElementById("mobileNav").style.right="0";
document.getElementById("overlay").style.display="block";
}

function closeMenu(){
document.getElementById("mobileNav").style.right="-100%";
document.getElementById("overlay").style.display="none";
}

function toggleFaq(el){
let content = el.querySelector(".faq-content");
content.style.display = content.style.display==="block" ? "none" : "block";
}

window.onscroll=function(){
let btn=document.getElementById("topBtn");
btn.style.display=window.scrollY>400?"block":"none";
}

function scrollToTop(){
window.scrollTo({top:0,behavior:"smooth"});
}
