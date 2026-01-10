function openMenu() {
  mobileNav.classList.add('open');
  overlay.classList.add('show');
}

function closeMenu() {
  mobileNav.classList.remove('open');
  overlay.classList.remove('show');
}

function toggleFaq(item) {
  const answer = item.querySelector('.faq-answer');
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
