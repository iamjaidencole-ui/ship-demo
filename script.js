// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('active'));

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.15});

document.querySelectorAll('.service-card,.rate-card,.contact-form').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = '1s ease';
  observer.observe(el);
});

// Form submit
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Your request has been received. Our team will contact you shortly.');
  e.target.reset();
});
