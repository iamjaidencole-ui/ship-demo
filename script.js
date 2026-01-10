/* SMOOTH SCROLL */
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

/* MOBILE MENU */
function toggleMenu(){
  const nav = document.getElementById("navMenu");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

/* TRACKING SYSTEM */
function trackPackage(){
  const input = document.getElementById("trackingInput").value.trim();
  const result = document.getElementById("trackingResult");

  if(input === ""){
    result.innerHTML = "Please enter a valid tracking number.";
    result.style.color = "yellow";
    return;
  }

  result.innerHTML = "Tracking " + input + "... Package In Transit ✔️";
  result.style.color = "#00ff6a";
}

/* FAQ */
function toggleFAQ(element){
  const text = element.nextElementSibling;
  const symbol = element.querySelector("span");

  if(text.style.display === "block"){
    text.style.display = "none";
    symbol.textContent = "+";
  } else {
    text.style.display = "block";
    symbol.textContent = "-";
  }
}

/* RATE CALCULATOR */
function calculateRate(){
  const weight = Number(document.getElementById("weightInput").value);
  const result = document.getElementById("rateResult");

  if(weight <= 0){
    result.innerHTML = "Enter valid weight.";
    result.style.color = "red";
    return;
  }

  let price;

  if(weight <= 1) price = 6;
  else if(weight <= 3) price = 12;
  else if(weight <= 10) price = weight * 4.5;
  else price = weight * 4;

  result.innerHTML = "Estimated Cost: $" + price.toFixed(2);
  result.style.color = "#00ff6a";
}

/* SCROLL REVEAL */
document.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(element=>{
    const position = element.getBoundingClientRect().top;
    if(position < window.innerHeight - 100){
      element.classList.add("visible");
    }
  });
});
